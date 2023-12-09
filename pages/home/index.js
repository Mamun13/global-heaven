import React, { Fragment, useEffect, useState } from "react";
import BannerSection from "../../components/home/BannerSection";
// Brands
import BrandSection from "../../components/home/BrandSection";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { fetchCategories } from "../../services/CategoryServices";
import CategoryProductScroll from "../../components/home/CategoryProductScroll";
import CategoryShowcase from "../../components/home/CategoryShowcase";
// import FeatureSection from "../../components/home/FeatureSection";
import { fetchHomeBanners } from "../../services/CommonServices";
// import AddBanner from "../../components/common/AddBanner";
import ComboProductScroll from "../../components/home/ComboProductScroll";
import DeliveryServices from "../../components/Modules/deliveryServices/DeliveryServices";
import { makeTitle } from "../../utils/helpers";
import Head from "next/head";
import UpComingProduct from "../../components/upcomingproduct/UpComingProduct";
import FeatureProduct from "../../components/home/FeatureProduct";
import SoftwareProduct from "../../components/home/SoftwareProduct";
import Slider from "../../components/Slider/Slider";
import OurCompany from "../../components/our_company/OurCompany";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCategories(response.data);
      }
    });
  }, []);

  const [banners, setBanners] = useState([]);

  // fetch
  useEffect(() => {
    fetchHomeBanners().then((response) => {
      if (response?.data) {
        setBanners(response.data[0]?.content_item);
      }
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{makeTitle("Home")}</title>
      </Head>

      {/* <BannerSection /> */}
      <Slider />
      {/* <DeliveryServices /> */}

      {/* <ComboProductScroll title="Combo Pack" /> */}

      <CategoryShowcase />
      {/* <UpComingProduct /> */}
      <OurCompany />
      {/* <FeatureProduct /> */}

      {/* {banners && banners.length ? (
        <AddBanner imagePath={banners?.[0]?.item_image} />
      ) : (
        ""
      )} */}

      {categories.map((category, key) => {
        return (
          <CategoryProductScroll
            key={key}
            title={category.name}
            categoryId={category.id}
          />
        );
      })}

      {/* {banners && banners.length > 1 ? (
        <AddBanner imagePath={banners?.[1]?.item_image} />
      ) : (
        ""
      )} */}
      {/* <SoftwareProduct /> */}

      {/* <BrandSection /> */}
      {/* <FeatureSection/> */}

      <ScrollToTopButton />
    </Fragment>
  );
};

export default HomePage;
