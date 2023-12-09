import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { getStoragePath } from "../../utils/helpers";
import { fetchCombos } from "../../services/ComboServices";
import ComboProductCard from "../common/ComboProductCard";
import { Container, Row } from "react-bootstrap";

const ComboProductScroll = ({ title }) => {
  const [combos, setCombos] = useState([]);

  // fetch
  useEffect(() => {
    fetchCombos({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCombos(response.data);
      }
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <Fragment>
      <section className="combo-pack mt-5 mb-4 ">
        {/*Title Bar*/}
        {/* <div className="container m- p-0">
          <div className="header-title mt-4 mb-3 position-relative rounded">
            <h1 className="text-center font-24 text-capitalize font-lato py-3 combo-title">
              {title}
            </h1>
            <Link href={`/combo`}>
              <div className="d-flex justify-content-center combo-btn bg-white px-3 py-2 position-absolute rounded-pill">
                <p className=" font-16 fw-semibold view-all">View all</p>
                <BsArrowRight className="arrow ms-2" />
              </div>
            </Link>
          </div>
        </div> */}

        {/*Scroll View*/}
        <Container className="">
          <Row>
            <div className="col-lg-3 col-md-3">
              <div className="d-flex align-items-center h-100">
                <div className="position-relative top_category">
                  <p className="text-capitalize ps-4">featured</p>
                  <h1 className="text-capitalize ps-4 font-30 fw-bold font-lato py-4">top sales this week</h1>
                  <p className="text-capitalize ps-4">full catelog</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 slider-primary">
              <Slider {...settings}>
                {combos.map((combo, key) => {
                  return (
                    <div className="mt-0" key={key}>
                      <div className="ms-3 me-3 mb-3">
                        <ComboProductCard
                          id={combo.id}
                          title={combo.title}
                          salePrice={combo.sale_price}
                          offerPrice={combo.offer_price}
                          offerStart={combo.offer_start}
                          offerEnd={combo.offer_end}
                          imagePath={getStoragePath(
                            `combo-image/${combo?.image}`
                          )}
                          viewLink={`/combo/pack/${combo.id}`}
                          isTimer={true}
                          items={combo.combo_items}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* </div> */}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ComboProductScroll;
