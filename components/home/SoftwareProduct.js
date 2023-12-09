import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchDiscountedInventories } from "../../services/InventoryServices";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";

const SoftwareProduct = ({title, categoryId}) => {
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="combo-pack mt-4">
        {/*Title Bar*/}
        <div className="container p-0">
          <h1 className="font-40 text-capitalize font-lato py-3 fw-bold border-bottom mb-3">
            Software Product 
          </h1>
        </div>
        {/*Scroll View*/}
        <Container>
          <Slider {...settings}>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
            <div className="featured_product">
              <Link href={`/category/${categoryId}`}>
                <Card className="featured_product_style rounded-2 my-3 mx-2">
                  <div className="d-flex justify-content-center">
                  <img
                      src="/soft/1.png"
                      width={224}
                      height={172}
                      className="featured_Pro_img py-2 img-fluid p-3 pt-4"
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
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default SoftwareProduct;
