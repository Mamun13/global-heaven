import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";

const OurCompany = () => {
  return (
    <>
      <section className="py-5 our_company my-5">
        <Container>
          <Row>
            <Col lg={5} className="our_company_bg">
              <div>
                <img src="/about.jpg" alt="" className="img-fluid rounded-3" />
              </div>
            </Col>
            <Col lg={7}>
              <div
                className="px-3 d-flex align-items-center"
                // style={{ height: "400px" }}
              >
                <div>
                  <p className="text-capitalize font-30 fw-bold pb-3">
                    Our Company
                  </p>
                  <p className="text-capitalize font-inter text-justify pb-3">
                    The Global Heavens MB (Pvt) Ltd. has started operation as a
                    manufacturing venture known as “MB International" in 2016.
                    At the initial period our main product was Gas Regulator and
                    our main objective was to ensure best quality with immense
                    customer satisfaction. Today the company has its wide ranges
                    of Cast Iron products like: Gas Stove, Gas meter.
                  </p>
                  <div className="">
                    <Link
                      href="/page/inception"
                      className="text-capitalize theme_text_color font-20 fw-semibold d-flex align-items-center explore_btn"
                    >
                      explore
                      <RiExternalLinkLine
                        className="ms-2 theme_text_color"
                        size={"20px"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurCompany;
