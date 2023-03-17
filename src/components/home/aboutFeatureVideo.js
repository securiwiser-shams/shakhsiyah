import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ScrollAnimation from "react-animate-on-scroll"

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
                                    <img className="features-shape" src="/assets/img/shape/features-shape.png" alt="features-shape" />
                                    <span>Taqwah</span>
                                </div>
                                <div className="features-shape-werapper-2">
                                    <span>Tarbiyah</span> <br />
                                    <img className="features-shape-2" src="/assets/img/shape/features-shape-2.png" alt="features-shape-2" />
                                </div>
                                <div className="reatures-video-thumb">
                                <ScrollAnimation
                                 animateIn="fadeIn"
                                 animateOut="fadeOut"
                                  >
                                    <img src="/assets/img/features/features.jpg" alt="features-img" /> 
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