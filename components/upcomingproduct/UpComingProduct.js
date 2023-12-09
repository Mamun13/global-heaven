import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";

const UpComingProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
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
      <section>
        <Container className="upcoming_slider rounded-3 mb-5">
          <Col lg={11} className="update_product">
            <Slider {...settings}>
              
              <div className="d-flex ">
                <Col
                  lg={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>
                    <p className="font-40 text-capitalize fw-semibold">drone mini</p>
                    <p className="font-14 text-uppercase mb-3">with 1 hour flight time</p>
                    <p className="font-14 text-uppercase">starting at</p>
                    <p className="font-30 text-uppercase  fw-semibold">$50.00</p>
                  </div>
                </Col>
                <Col lg={8} className="d-flex justify-content-center">
                  <div className="mt-5">
                    <img src="/drone1.png" alt="" className="up_pro_img" />
                  </div>
                </Col>
              </div>
              <div className="d-flex ">
                <Col
                  lg={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>
                    <p className="font-40 text-capitalize fw-semibold">drone mini</p>
                    <p className="font-14 text-uppercase mb-3">with 1 hour flight time</p>
                    <p className="font-14 text-uppercase">starting at</p>
                    <p className="font-30 text-uppercase  fw-semibold">$500.00</p>
                  </div>
                </Col>
                <Col
                  lg={8}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div className="mt-5">
                    <img src="/drone.png" alt="" className="up_pro_img" />
                  </div>
                </Col>
              </div>
              <div className="d-flex ">
                <Col
                  lg={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>
                    <p className="font-40 text-capitalize fw-semibold">drone mini</p>
                    <p className="font-14 text-uppercase mb-3">with 1 hour flight time</p>
                    <p className="font-14 text-uppercase">starting at</p>
                    <p className="font-30 text-uppercase  fw-semibold">$100.00</p>
                  </div>
                </Col>
                <Col lg={8} className="d-flex justify-content-center">
                  <div className="mt-5">
                    <img src="/drone1.png" alt="" className="up_pro_img" />
                  </div>
                </Col>
              </div>
            </Slider>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default UpComingProduct;
