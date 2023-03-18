import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollAnimation from "react-animate-on-scroll"

const GallaryInstaSection = () => {
    return (
        <div className="gallery-area">
            <div className="swiper-containers">
                <div className="swiper-wrappers gallery-inner">
                    <div className="swiper-slides gallery-single w-img">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <StaticImage src="./gallary1.png" alt="img not found" quality={100}  />
                        </ScrollAnimation>
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <StaticImage src="./gallary2.png" alt="img not found" quality={100}  />
                        </ScrollAnimation> 
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <StaticImage src="./gallary3.png" alt="img not found" quality={100} />
                        </ScrollAnimation>
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <StaticImage src="./gallary4.png" alt="img not found" quality={100}  />
                        </ScrollAnimation>
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="swiper-slides gallery-single w-img">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <StaticImage src="./gallary5.png" alt="img not found" quality={100} />
                        </ScrollAnimation>
                        <div className="gallery-link">
                            <a href="#" className="gallery-insta"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallaryInstaSection;
