import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { fetchCategories } from "../../services/CategoryServices";
import { getStoragePath } from "../../utils/helpers";
import { Col, Container, Row } from "react-bootstrap";
import { SlScreenDesktop } from "react-icons/sl";

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);

  // fetch
  useEffect(() => {
    fetchCategories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCategories(response.data);
      }
    });
  }, []);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 2000,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrow: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Fragment>
      <section className="categories">
        <div className="container p-0">
          <div className="py-5 px-2">
            <Row>
              <Col lg={6}>
                <h1 className="font-30 text-capitalize">
                  product <span className="theme_text_color">categories</span>
                </h1>
                <p className="text-secondary">
                  Stands for sustainable luxury products
                </p>
              </Col>
              <Col lg={6}>
                <p className="font-16 w-50">
                  From building your home to adorning it, we are here to serve
                  it all. Pick out from a range of our categories to your
                  requirement.
                </p>
              </Col>
            </Row>
          </div>
          <div className="col-lg-12 slider-primary">
            {/* <Slider {...settings}> */}
            <Container>
              <Row>
                {categories &&
                  categories.map((category, key) => {
                    return (
                      <Col key={key} className="my-3 px-0">
                        <Link href={`/category/${category.id}`}>
                          <div className="category_one rounded-3 p-3 ">
                            <div className="category d-flex justify-content-start align-items-center">
                              <img
                                src={getStoragePath(
                                  `category-image/${category.image}`
                                )}
                                alt=""
                                className="category_img pe-3"
                              />
                              <div className="text-start text-capitalize fw-bold">
                                {category.name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </Container>

            {/* </Slider> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryShowcase;
