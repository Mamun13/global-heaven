import React, {Fragment, useEffect, useState} from "react";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Image from "next/image";
import Payment from "../../public/payment.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "../../public/card.jpg";
import BankTransfer from "../../public/bank-transfer.png";
import Mobile from "../../public/mobile.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchAddresses,
  updateDefaultBillingAddress,
  updateDefaultShippingAddress,
} from "../../services/AddressServices";
import {getAddressToString, makeTitle, tostify} from "../../utils/helpers";
import {toast} from "react-toastify";
import {makePayment, saveOrder} from "../../services/OrderServices";
import {fetchPaymentMethods} from "../../services/PaymentMethodServices";
import {
  RESET_CART,
  UPDATE_BILLING_ADDRESS,
  UPDATE_PAYMENT_METHOD_ID,
  UPDATE_SHIPPING_ADDRESS,
} from "../../store/slices/CartSlice";
import {useRouter} from "next/router";
import Link from "next/link";
import {useCart} from "../../utils/hooks/useCart";
import Head from "next/head";
// import {Oval} from "react-loader-spinner";
import withAuth from "../../utils/HOC/withAuth";

const CheckoutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [isLoading, setIsLoading] = useState(false);

  const [agree, setAgree] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [billingAddress, setBillingAddress] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);
  const {totalShippingCharge, totalWeight} = useCart(null);

  useEffect(() => {
    fetchPaymentMethods().then((response) => {
      if (response?.data) {
        setPaymentMethods(response.data);
      }
    });
  }, []);

  const fetchAddressesData = () => {
    fetchAddresses().then((response) => {
      if (response?.data) {
        setAddresses(response.data);
      }
    });
  };

  useEffect(() => {
    fetchAddressesData();
  }, []);

  useEffect(() => {
    if (addresses.length > 0) {
      addresses.map((address) => {
        if (address.is_default_billing) {
          setBillingAddress(address);
          dispatch(UPDATE_BILLING_ADDRESS(address));
        }
        if (address.is_default_shipping) {
          setShippingAddress(address);
          dispatch(UPDATE_SHIPPING_ADDRESS(address));
        }
      });
    }
  }, [addresses]);

  const handleSetDefaultBillingAddress = (event, id) => {
    event.preventDefault();

    if (id) {
      updateDefaultBillingAddress(id).then((response) => {
        if (response.status) {
          tostify(toast, "success", response);
          fetchAddressesData();
        }
      });
    }
  };

  const handleSetDefaultShippingAddress = (event, id) => {
    event.preventDefault();

    if (id) {
      updateDefaultShippingAddress(id).then((response) => {
        if (response.status) {
          tostify(toast, "success", response);
          fetchAddressesData();
        }
      });
    }
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (cart.items && cart.items.length < 1) {
      alert("The cart shouldn't be empty!");
      return;
    }

    if (!agree) {
      alert("Please accept the terms & conditions, refund policy & privacy policy.");
      return;
    }

    if (!cart?.paymentMethodId) {
      alert("Please choose a payment method!");
      return;
    }

    setIsLoading(true);

    if (cart.paymentMethodId === "1") {
      makePayment({
        shipping_address: getAddressToString(cart.shippingAddress),
        shipping_address_json: cart.shippingAddress,
        billing_address: getAddressToString(cart.billingAddress),
        billing_address_json: cart.billingAddress,
        cart: cart.items,
        sub_total: cart.subTotal,
        discount: cart.discount,
        shipping_charge: totalShippingCharge,
        tax: cart.tax,
        grand_total: cart.subTotal + totalShippingCharge,
        payment_method_id: cart.paymentMethodId,
        total_weight: totalWeight,
      }).then((response) => {
        if (response?.data?.GatewayPageURL) {
          // tostify(toast, 'success', response);

          dispatch(RESET_CART());
          setIsLoading(false);

          window.location.href = response?.data?.GatewayPageURL;
        }
      });
    } else {
      saveOrder({
        shipping_address: getAddressToString(cart.shippingAddress),
        shipping_address_json: cart.shippingAddress,
        billing_address: getAddressToString(cart.billingAddress),
        billing_address_json: cart.billingAddress,
        cart: cart.items,
        sub_total: cart.subTotal,
        discount: cart.discount,
        shipping_charge: totalShippingCharge,
        tax: cart.tax,
        grand_total: cart.subTotal + totalShippingCharge,
        payment_method_id: cart.paymentMethodId,
        total_weight: totalWeight,
      }).then((response) => {
        if (response?.data?.status) {
          tostify(toast, "success", response);

          dispatch(RESET_CART());
          setIsLoading(false);

          setTimeout(() => {
            router.push("/my-account?tab=order");
          }, 2500);
        }
      });
    }
  };

  const handlePaymentMethodId = (id) => {
    try {
      dispatch(UPDATE_PAYMENT_METHOD_ID(id));
      console.log("Selected");
    } catch (err) {
      tostify(toast, "success", {
        message: err.message,
      });
    }
  };

  return (
      <Fragment>
        <Head>
          <title>{makeTitle("Checkout")}</title>
        </Head>
        <section>
          <div className="position-relative mn">
            <Image src={Payment} alt="" className="img-fluid payment"/>
            <h1 className="pay-banner-text text-light text-uppercase font-48 fw-bold">
              payment
            </h1>
          </div>
          <Container>
            <Row>
              <Col lg={7} md={12} sm={12} className=" mt-4">
                <div className="row">
                  <div className="col-8">
                    <h1 className="text-uppercase font-24 fw-bold mb-3 billing_details">
                      BILLING DETAILS
                    </h1>
                  </div>
                  <div className="col-4 text-end">
                    <div className="text-end">
                      <select
                          className="form-select"
                          value={billingAddress.id}
                          onChange={(event) =>
                              handleSetDefaultBillingAddress(
                                  event,
                                  event.target.value
                              )
                          }
                      >
                        <option value="" selected>
                          Set Default Billing
                        </option>
                        {addresses &&
                            addresses.length > 0 &&
                            addresses.map((address, key) => (
                                <option key={key} value={address.id}>
                                  {address.title}
                                </option>
                            ))}
                      </select>
                      <Link
                          href="/my-account?tab=address"
                          className="btn btn-link m-0 p-0"
                      >
                        Add New
                      </Link>
                    </div>
                  </div>
                </div>
                <Row>
                  <Col lg={12} md={12} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.address_line_1}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.address_line_2}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Division</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress?.division?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>District</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress?.district?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Upozila</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress?.upazila?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.postcode}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.phone}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label className="font-lato">Email Address</Form.Label>
                      <Form.Control
                          type="email"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={billingAddress.email}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <br/>
                <br/>
                <div className="row">
                  <div className="col-8">
                    <h1 className="text-uppercase font-24 fw-bold mb-3">
                      SHIPPING DETAILS
                    </h1>
                  </div>
                  <div className="col-4 text-end">
                    <select
                        className="form-select"
                        value={shippingAddress.id}
                        onChange={(event) =>
                            handleSetDefaultShippingAddress(event, event.target.value)
                        }
                    >
                      <option value="" selected>
                        Set Default Shipping
                      </option>
                      {addresses &&
                          addresses.length > 0 &&
                          addresses.map((address, key) => (
                              <option key={key} value={address.id}>
                                {address.title}
                              </option>
                          ))}
                    </select>
                    <Link
                        href="/my-account?tab=address"
                        className="btn btn-link m-0 p-0"
                    >
                      Add New
                    </Link>
                  </div>
                </div>
                <Row>
                  <Col lg={12} md={12} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.address_line_1}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.address_line_2}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Division</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress?.division?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>District</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress?.district?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Upozila</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress?.upazila?.name}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.postcode}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.phone}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} className="">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label className="font-lato">Email Address</Form.Label>
                      <Form.Control
                          type="email"
                          placeholder=""
                          className="rounded-0 form-deco"
                          value={shippingAddress.email}
                          readOnly={true}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <br/>
                <br/>
                <h1 className="text-uppercase font-24 fw-bold mb-3">NOTE</h1>
                <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Write some note here.."
                />
                <br/>
                <br/>
              </Col>
              <Col lg={5} md={12} sm={12} className=" my-4">
                <div className="payment-card p-3">
                  <h2 className="text-uppercase font-24 fw-bold ps-2">
                    your order
                  </h2>
                  <table className="table">
                    <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col" className="text-end">
                        Total
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart?.items &&
                        cart.items.length > 0 &&
                        cart.items.map((item, key) => (
                            <tr key={key}>
                              <th
                                  scope="row"
                                  className="fw-normal text-wrap lh-base text-capitalize font-16 "
                              >
                                {item.type === "product" && (
                                    <a href={`/product/${item.inventory_id}`}>
                                      {item.title}
                                    </a>
                                )}
                                {item.type === "combo" && (
                                    <a href={`/combo/pack/${item.combo_id}`}>
                                      {item.title}
                                    </a>
                                )}
                              </th>
                              <td className="text-end">
                                {item.quantity}
                                &nbsp;x &nbsp;{item.unit_price}
                                &nbsp;= &nbsp;{item.total} Tk
                              </td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="">
                    <div className="d-flex justify-content-center">
                      <p className="font-lato text-capitalize font-20 pe-2 phone_res fw-semibold">
                        subtotal :{" "}
                      </p>
                      <p className=" font-20 phone_res ">{cart.subTotal} Tk</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="font-lato text-capitalize font-20 pe-2 phone_res fw-semibold">
                        shipping charge :{" "}
                      </p>
                      <p className=" font-20  phone_res">
                        {totalShippingCharge} Tk ({totalWeight.toFixed(2)} kg)
                      </p>
                    </div>

                    <div className="d-flex justify-content-center">
                      <p className="font-lato fw-semibold text-capitalize font-20 pe-2 phone_res">
                        total :{" "}
                      </p>
                      <p className="font-20 theme-text phone_res fw-bold">
                        {cart.subTotal + totalShippingCharge || 0} Tk
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    {paymentMethods &&
                        paymentMethods.length > 0 &&
                        paymentMethods.map((paymentMethod, key) => (
                            <div className="form-check form-check-inline" key={key}>
                              <input
                                  className="form-check-input"
                                  type="radio"
                                  name="paymentMethod"
                                  value={paymentMethod.id}
                                  onChange={(event) =>
                                      handlePaymentMethodId(event.target.value)
                                  }
                              />
                              <label
                                  className="form-check-label text-capitalize"
                                  htmlFor="inlineRadio1"
                              >
                                {paymentMethod.code === "sslcommerze"
                                    ? "Pay Online"
                                    : "COD"}
                              </label>
                            </div>
                        ))}
                  </div>

                  <p className="mt-3 d-flex flex-column">
                    <span><strong>Delivery:</strong> Inside Dhaka in 24 hours, outside Dhaka in 48 hours</span>
                  </p>
                  {/* <p className="mt-2 d-flex flex-column">
                    <span>Outside Dhaka in 48 hours</span>
                  </p> */}

                  <div className="mt-3 d-flex">
                    <Form.Group
                        className="mb-1 text-secondary d-flex me-2 justify-content-start"
                        controlId=""
                    >
                      <Form.Check
                          type="checkbox"
                          label=""
                          onChange={(event) => setAgree(event.target.checked)}
                          className="me-2"
                      />
                      <Link href="/terms-and-conditions" className="mr-1">
                        Terms & Conditions,
                      </Link>
                      <Link href="/refund-policy" className="mr-1">
                        Refund policy,
                      </Link>
                      <Link href="/privacy-policy" className="mr-1">
                        Privacy policy
                      </Link>
                    </Form.Group>
                  </div>

                  <div className="">
                    <button
                        type="button"
                        className="d-flex align-items-center justify-content-center text-capitalize place_order_border cursor-pointer font-16 w-100 place-order mt-4 font-lato fw-bold"
                        onClick={(event) => handlePlaceOrder(event)} disabled={isLoading}
                    >
                      {isLoading && (
                          <span className="me-2 text-dark">
                            <Oval
                                height={18}
                                width={18}
                                color="#fff"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#f38120"
                                strokeWidth={6}
                                strokeWidthSecondary={6}
                            />
                          </span>
                      )} place order
                    </button>
                  </div>
                </div>

                <div className="">
                  <p className="text-capitalize py-3 font-16">
                    online payment by SSLCommerz :
                  </p>
                  <div className="row">
                    <Col lg={4} md={4} sm={4} className="mb-3">
                      <p className="text-capitalize text-center pb-2">card</p>
                      <Image
                          src={Card}
                          alt="card"
                          className=" card-payment rounded-1 shadow"
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-3">
                      <p className="text-capitalize text-center pb-2">
                        bank transfer
                      </p>
                      <Image
                          src={BankTransfer}
                          alt="card"
                          className=" transfer-payment rounded-1 shadow"
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-3">
                      <p className="text-capitalize text-center pb-2">
                        mobile banking
                      </p>
                      <Image
                          src={Mobile}
                          alt="card"
                          className=" card-payment rounded-1 shadow"
                      />
                    </Col>
                  </div>
                </div>

                <div className="">
                  <p className="text-capitalize py-3 font-16 fw-bold">
                    Company Information:
                  </p>
                  <div className="row">
                    <Col lg={12} md={12} className="d-flex">
                      <b className="text-capitalize text-center pb-2 mr-1">
                        TIN:
                      </b>
                      <p className="text-capitalize text-center pb-2">
                        117029919179
                      </p>
                    </Col>
                    <Col lg={12} md={12} className="d-flex">
                      <b className="text-capitalize text-center pb-2 mr-1">
                        BIN:
                      </b>
                      <p className="text-capitalize text-center pb-2">
                        000079132-0403
                      </p>
                    </Col>
                    <Col lg={12} md={12} className="d-flex">
                      <b className="text-capitalize text-center pb-2 mr-1">
                        Trade License:
                      </b>
                      <p className="text-capitalize text-center pb-2">
                        TRAD/DESCC/216136/2019
                      </p>
                    </Col>
                  </div>
                </div>

                <div className="">
                  <p className="text-capitalize py-3 font-16 fw-bold">
                    Bank Account Info:
                  </p>
                  <div className="row">
                    <Col lg={12} md={12} className="d-flex">
                      <b className="text-capitalize text-center pb-2 mr-1">
                        Acc Name:
                      </b>
                      <p className="text-capitalize text-center pb-2">
                        Ifad Multi Products Limited
                      </p>
                    </Col>
                    <Col lg={12} md={12} className="d-flex">
                      <b className="text-capitalize text-center pb-2 mr-1">
                        Acc No:
                      </b>
                      <p className="text-capitalize text-center pb-2">
                        00233011222
                      </p>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <ScrollToTopButton/>
      </Fragment>
  );
};

export default withAuth(CheckoutPage);
