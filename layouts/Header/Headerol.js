import React, { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../../public/logo/api_logo.png";
import { useRouter } from "next/router";
import { Image } from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  const [navShow, setNavShow] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [showItems2, setShowItems2] = useState(false);

  const handleMouseEnter = () => {
    setShowItems(true);
  };
  const handleMouseEnter2 = () => {
    setShowItems2(true);
  };

  const handleMouseLeave = () => {
    setShowItems(false);
  };
  const handleMouseLeave2 = () => {
    setShowItems2(false);
  };

  const handleClickService = () => {
    setShowItems(false);
    router.push("/");
  };
  const handleClickService2 = () => {
    setShowItems2(false);
    router.push("/");
  };

  return (
    <>
      <header id="header">
        <div class="desktop ">
          <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container className="d-flex justify-content-between">
                <div>
                  <Navbar.Brand as={Link} href="/">
                    <img className="brand-logo" src="/logo/api_logo.png" alt="logoImg" />
                  </Navbar.Brand>
                </div>
                <div> <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto d-flex align-items-center">
                    <Nav.Link as={Link} href="/">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} href="/about-us">
                      About Us
                    </Nav.Link>

                    <NavDropdown
                      title="Services"
                      id="custome_dropdown"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClickService}
                      show={showItems}
                    >
                      <div className="subMenuBox d-flex">
                        <div className="subMenu px-5 py-5 w-50">
                          <div className="navBox">
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Custom Software Development
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Web App Development
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Mobile App Development
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                UI/UX Design
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Software QA and Testing
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Machine Learning and AI
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Cloud Solutions
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Creative Design
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Digital Marketing
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                IT Consultancy Service
                              </Nav.Link>
                            </p>
                          </div>
                        </div>
                        <div className="menuContent w-50 d-flex align-items-center">
                          <div className="textBox px-5 py-5">
                            <h4 className="mb-3">Our Services</h4>
                            <p>
                              As a software company, we are committed to
                              excellence, innovation and customer satisfaction
                              by providing cutting-edge solutions that drive
                              growth, efficiency and innovation. Our mission is
                              to empower your business with powerful software
                              solutions that drive success and growth. Our
                              diverse range of services is tailored to meet the
                              unique needs of businesses and organizations
                              across industries.
                            </p>
                            <Link
                              href={`/services`}
                              onClick={() => setShowItems(false)}
                              className="menuBtn mt-4"
                            >
                              Read More
                              <BsArrowRight className="text-danger fs-4 ms-2 d-inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>

                    <NavDropdown
                      title="Expertise"
                      id="custome_dropdown"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                      onClick={handleClickService2}
                      show={showItems2}
                    >
                      <div className="subMenuBox d-flex">
                        <div className="subMenu px-5 py-5 w-50">
                          <div className="navBox">
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Application Development
                              </Nav.Link>
                            </p>
                            <p>
                              <Nav.Link href="#">
                                <IoIosArrowForward />
                                Digital Transformation
                              </Nav.Link>
                            </p>
                          </div>
                        </div>
                        <div className="menuContent w-50 d-flex align-items-center">
                          <div className="textBox px-5 py-5">
                            <h4 className="mb-3">Our Expertise</h4>
                            <p>
                              As a software company, we are committed to
                              excellence, innovation and customer satisfaction
                              by providing cutting-edge solutions that drive
                              growth, efficiency and innovation. Our mission is
                              to empower your business with powerful software
                              solutions that drive success and growth. Our
                              diverse range of services is tailored to meet the
                              unique needs of businesses and organizations
                              across industries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>

                    <Nav.Link as={Link} href="/products">
                      Products
                    </Nav.Link>
                    <Nav.Link as={Link} href="/contact-us">
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse></div>
                <div>asgaa</div>

               
              </Container>
            </Navbar>
          </div>
        </div>

        <div class="phoneMenu d-none">
          <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand as={Link} href="/">
                  <img className="logo" src="/logo.png" alt="logoImg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto d-flex align-items-center">
                    <Nav.Link
                      as={Link}
                      href="/"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      href="/about-us"
                      onClick={() => setNavShow(!navShow)}
                    >
                      About Us
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      href="/services"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Services
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      href="/expertise"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Expertise
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      href="/products"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Products
                    </Nav.Link>
                    {/* <Nav.Link as={Link} href="/blog" onClick={() => setNavShow(!navShow)}>
                              Blog
                           </Nav.Link> */}
                    <Nav.Link
                      as={Link}
                      href="/contact-us"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
