import "@/styles/globals.css";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/footer.css";
import "../styles/TopManu.css";
import "../styles/Category.css";
import "../styles/UpcomingProoduct.css";
import "../styles/FeaturedProduct.css";
import "../styles/Slider.css";
import "../styles/Topbar.css";
import "../styles/Header.css";
import "../styles/Aboutus.css";
import "../styles/catalogue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from "react-bootstrap";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../layouts/Layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // https://www.npmjs.com/package/nextjs-progressbar

  return (
    <Fragment>
      <SSRProvider>
        <Layout>
          <NextNProgress options={{ easing: "ease", speed: 500 }} />

          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>

          <ToastContainer autoClose={2500} position="bottom-right" />
        </Layout>
      </SSRProvider>
    </Fragment>
  );
}
