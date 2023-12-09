import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const AboutDetails = ({ tab }) => {
  return (
    <>
      <section>
        <div className="mb-5">
          <img src="/mushrooms.png" alt="" className="w-100 about_banner" />
        </div>
        <Container>
          <Row>
            <Col sm={3}>
              <div className="side_nav_manu_color py-5 mb-5">
                <Link href="/page/inception" legacyBehavior>
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "inception" ? " active-l" : ""
                    }`}
                  >
                    <a>Inception</a>
                  </div>
                </Link>

                <Link href="/page/mission-vision" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "mission-vision" ? " active-l" : ""
                    }`}
                  >
                    <a>Mission & Vision</a>
                  </div>
                </Link>
                
                <Link href="/page/factories" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "factories" ? " active-l" : ""
                    }`}
                  >
                    <a>factories</a>
                  </div>
                </Link>
                <Link href="/page/milestones" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active${
                      tab === "milestones" ? " active-l" : ""
                    }`}
                  >
                    <a>milestones</a>
                  </div>
                </Link>
                <Link href="/page/objective" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "objective" ? " active-l" : ""
                    }`}
                  >
                    <a>Objective</a>
                  </div>
                </Link>
                <Link
                  href="/page/sustainability-practics"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "sustainability-practics" ? " active-l" : ""
                    }`}
                  >
                    <a>sustainability practics</a>
                  </div>
                </Link>

                <Link
                  href="/page/distribution-network"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active py-2 ${
                      tab === "distribution-network" ? " active-l" : ""
                    }`}
                  >
                    <a>Distribution network</a>
                  </div>
                </Link>
              </div>
            </Col>
            <Col sm={9} className=" px-3 mb-5">
              {tab && tab == "inception" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    inception
                  </p>
                  <p className="text-justify">
                    The Global Heavens MB (Pvt) Ltd. has started operation as a
                    manufacturing venture known as “MB International" in 2016.
                    At the initial period our main product was Gas Regulator and
                    our main objective was to ensure best quality with immense
                    customer satisfaction. Today the company has its wide ranges
                    of Cast Iron products like: Gas Stove, Gas meter, High
                    Pressure and Low pressure Gas Regulator, Commercial Stove
                    Etc.
                  </p>
                </div>
              )}
              {tab && tab == "mission-vision" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    mission vision
                  </p>
                  <p className="text-justify">
                    Mission: Our aim is to derive customer satisfaction by
                    ensuring best quality product with reasonable price. We
                    generate employment with a favorable working environment for
                    female executives. Vision: The company wants to be the
                    largest distributor of Gas Stove, Gas Regulator & Commercial
                    Stove. It also wish to create a brand value and keep a step
                    ahead for exporting our product. Values: Tomorrow-minded,
                    knowledge is power, assume best intentions, sustainability.
                    Goal & Objective: Global Heavens MB ‘s goal is to become the
                    market leader with best quality and price within 2025.
                  </p>
                </div>
              )}
             
              {tab && tab == "factories" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    factories
                  </p>
                  <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
              {tab && tab == "milestones" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    milestones
                  </p>
                  <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
              {tab && tab == "objective" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    objective
                  </p>
                  <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
              {tab && tab == "sustainability-practics" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    sustainability practics
                  </p>
                  <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
              {tab && tab == "distribution-network" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    distribution network
                  </p>
                  <p className="text-justify">
                    MB Distribution Network is active all over in Bangladesh. It
                    has a wide and extensive distribution network with which it
                    enjoys a close working relationship, and which benefits from
                    its support and expertise. On our network map you will find
                    a list of MB distributors point, by country, with the
                    relevant contact details
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export async function getStaticProps({ params }) {
  const tab = params.tab;
  return {
    props: {
      tab,
    },
  };
}

export async function getStaticPaths() {
  const tabs = [
    { tab: "inception" },
    { tab: "mission-vision" },
    { tab: "employee-info" },
    { tab: "factories" },
    { tab: "milestones" },
    { tab: "objective" },
    { tab: "sustainability-practics" },
    { tab: "distribution-network" },
  ];

  const paths = tabs.map((item) => ({
    params: { tab: item.tab },
  }));

  return { paths, fallback: false };
}

export default AboutDetails;
