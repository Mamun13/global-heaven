import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="footer_bg">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="logo_side px-3">
                <div>
                  <img src="/logo2.png" alt="footer logo" className="footer_logo" />
                </div>
                <div>
                  <p className="text-capitalize pb-2">company name</p>
                  <p className="text-capitalize pb-2">mirpur-10, Dhaka-1212</p>
                  <p className="text-capitalize pb-2">dhaka, Bangladesh</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    about us
                  </p>
                </div>
                <div>
                  <ul>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Inception</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Milestones</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Factories</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    businesses
                  </p>
                </div>
                <div>
                  <ul>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize  pb-2">
                        category & product
                      </li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">brands</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">export</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    Legal
                  </p>
                </div>
                <div>
                  <ul>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">privacy</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">
                        Terms and Conditions{" "}
                      </li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">FAQ</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* copy right part */}
      <section className="copyright">
        <Container>
          <div className="d-flex justify-content-between py-3">
            <div>
              <ul className="d-flex">
                <Link href="/" className="pe-4 footer_link_hover"><li>Trems of Use</li></Link>
                <Link href="/" className="pe-4 footer_link_hover"><li>Privacy</li></Link>
                <Link href="/" className="pe-4 footer_link_hover"><li>Sitemap</li></Link>
                <Link href="/" className="pe-4 footer_link_hover"><li>Contact</li></Link>
              </ul>
            </div>
            <div className="">
              <p className="fw-semibold">© 2023 MN | All rights reserved</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
