import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ScrollAnimation from "react-animate-on-scroll"
import { StaticImage } from 'gatsby-plugin-image';

const AboutFeatureVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <div className="features-video-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-9">
                        <div className="">
                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='OwKwrlpjtpg' onClose={() => { openVideoModal(); }} />
                            <div className="features-video-wrapper">
                                <div className="features-shape-wrapper-1">
                                    <StaticImage className="features-shape" src="./features-shape.png" alt="features-shape" quality={100} />
                                    <span>Taqwah</span>
                                </div>
                                <div className="features-shape-werapper-2">
                                    <span>Tarbiyah</span> <br />
                                    <StaticImage className="features-shape-2" src="./features-shape-2.png" alt="features-shape-2" quality={100} />
                                </div>
                                <div className="reatures-video-thumb">
                                <ScrollAnimation
                                 animateIn="animate__fadeIn"
                                 animateOut="animate__fadeOut"
                                >
                                <StaticImage
                                    src="./features.png"
                                    alt="features-img"
                                    quality={100}
                                    width={825}
                                    height={430}
                                />
                                </ScrollAnimation>

                                </div>
                                <div className="features-video-content">
                                    <div className="features-btn">
                                        <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                                    </div>
                                    <div className="video-btn-text">
                                        <span>Watch Video
                                            <br />Intro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeatureVideo;
