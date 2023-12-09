import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { getStoragePath } from "../../utils/helpers";
import { fetchInventoriesByCategory } from "../../services/InventoryServices";
import ProductCard from "../common/ProductCard";

const CategoryProductScroll = ({ title, categoryId }) => {
  const [inventories, setInventories] = useState([]);

  // fetch
  useEffect(() => {
    fetchInventoriesByCategory(categoryId, {
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setInventories(response.data);
      }
    });
  }, [categoryId]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
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
      <section className="combo-pack">
        {/*Title Bar*/}
        <div className="container my-5 px-3">
          <div className="row mt-4 mb-3">
            <div className="col-lg-6">
              <h1 className=" font-30 text-capitalize text-dark">{title}</h1>
              <p>Stands for sustainable luxury products </p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end">
                <Link
                  href={`/category/${categoryId}`}
                  className="d-flex align-items-center theme_bg_color text-white rounded-1 view_all_btn px-3 py-2"
                >
                  <span>view all</span>
                  <BsArrowRight className="arrow ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*Scroll View*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 slider-primary">
              <Slider {...settings}>
                {inventories.map((inventory, key) => {
                  return (
                    <div className="">
                      <div className="mt-0 mx-2" key={key}>
                        <div className="mb-3">
                          <ProductCard
                            id={inventory.id}
                            title={inventory.title}
                            salePrice={inventory.sale_price}
                            offerPrice={inventory.offer_price}
                            offerStart={inventory.offer_start}
                            offerEnd={inventory.offer_end}
                            variants={inventory.inventory_variants}
                            imagePath={
                              inventory?.image
                                ? getStoragePath(
                                    `inventory-image/${inventory?.image}`
                                  )
                                : getStoragePath(
                                    `product-image/${inventory?.product?.image}`
                                  )
                            }
                            viewLink={`/product/${inventory.id}`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryProductScroll;
