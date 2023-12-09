import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
    return (
        <>
            <section id="slider" className="position-relative">
                <Carousel fade pause="false" indicators={false} controls={false} className="video_slider">
                    <Carousel.Item>
                        <video
                            autoPlay
                            muted
                            loop
                            className="d-block w-100 sliderVideo "
                        >
                            <source src="/videos/video-3.mp4" type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video
                            autoPlay
                            muted
                            loop
                            className="d-block w-100 sliderVideo "
                        >
                            <source src="/videos/video-2.mp4" type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video
                            autoPlay
                            muted
                            loop
                            className="d-block w-100 sliderVideo "
                        >
                            <source src="/videos/video-4.mp4" type="video/mp4" />
                        </video>
                    </Carousel.Item>

                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100 sliderImg"
                            src="/slider1.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </section>
        </>
    );
};

export default Slider;
