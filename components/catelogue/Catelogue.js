import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Catelogue = () => {
  return (
    <>
      <section>
        <div className="catelogue_banner">
          <img src="./catalogue.jpg" alt="" className="catelogue_img" />
        </div>
        <Container>
          <div className="my-5">
            <Row>
              <Col lg={3}>
                <div className="border rounded-3">
                  <div className="position-relative">
                    <img src="/mushrooms.jpg" className="cat_img" />
                  </div>
                  hahagah
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Catelogue;
