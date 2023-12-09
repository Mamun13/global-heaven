import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { fetchBanners } from "../../services/BannerServices";
import { getStoragePath } from "../../utils/helpers";

const BannerSection = () => {
  const [banners, setBanners] = useState([]);

  // fetch
  useEffect(() => {
    fetchBanners().then((response) => {
      if (response?.data) {
        setBanners(response.data?.[0]?.content_item);
      }
    });
  }, []);

  return (
    <section className="mb-3 banner">
      <Carousel fade>
        {banners &&
          banners.map((banner, key) => (
            <Carousel.Item key={key} >
              <img
                src={getStoragePath(banner.item_image)}
                alt=""
                className="page_banner position-relative"
              />

              {/* <Carousel.Caption className="banner_description">
                <h3 className="text-start font-40 text-uppercase fw-bold">Second.slide.label</h3>
                <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
      </Carousel>
    </section>
  );
};

export default BannerSection;
