import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
// import { MdOutlineFavorite } from "react-icons/md";
// import { getStoragePath } from "../../utils/helpers";
import { fetchDiscountedInventories } from "../../services/InventoryServices";
// import ProductCard from "../common/ProductCard";
import { Col, Container, Row, Card } from "react-bootstrap";

const FeatureProduct = ({ title }) => {
  const [inventories, setInventories] = useState([]);

  // fetch
  useEffect(() => {
    fetchDiscountedInventories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setInventories(response.data);
      }
    });
  }, []);

  return (
    <>
      <section className="combo-pack">
        {/*Title Bar*/}
        <div className="container m- p-0">
          <h1 className="font-30 text-capitalize py-3 fw-bold border-bottom mb-3" >
            Feature Product
          </h1>
        </div>
        {/*Scroll View*/}
        <Container>
          <Row>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/Apple_Watch.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18" data-aos="fade-up">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/new_arrival1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/apple2.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/Apple_Watch.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/new_arrival1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/apple2.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/Apple_Watch.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} className="featured_product">
              <Link href="">
                <Card className="featured_product_style rounded-2 my-3">
                 
                  <div className="d-flex justify-content-center">
                    <img
                      src="/watch/new_arrival1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid"
                      alt=""
                    />
                  </div>
                  <Card.Body className="prod-card-body position-relative ps-0">
                    <Card.Title className="text-center ps-0 text-capitalize font-18">
                      <Link href="" className="prod-title">
                        Product
                      </Link>
                    </Card.Title>

                    <Card.Text className="text-center pb-3 text-capitalize">
                      Price: 2314 Tk.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeatureProduct;
