import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const AboutDetails = () => {
  const handleTabClick = (key) => {
    this.props.history.push(`/${key}`); // < == router router v4
    browserHistory.push(`/${key}`); // <== react router v3
  };
  
  return (
    <>
      <section>
        <div>
          <img src="/mushrooms.png" alt="" className="w-100 about_banner" />
        </div>
        {/* <Container> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="#first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column text-start">
                <Nav.Item>
                  <Nav.Link href="#first" className="text-capitalize">inception</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#second">mission & vision</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#first">
                  <p>
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
                </Tab.Pane>
                <Tab.Pane eventKey="#second">
                  <p> link two</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* </Container> */}
      </section>
    </>
  );
};

export default AboutDetails;
