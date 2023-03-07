import { Link } from 'gatsby';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="slider-area hero-height position-relative fix" style={{ backgroundImage: "url(/assets/img/slider/hero2.png)" }}>
            <img className="shape-3 d-none d-xxl-block" src="/assets/img/shape/shape-03.png" alt="img not found" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="hero-text pt-95">
                            <h1>Islamic Day <span className="down-mark-line">School</span> For Children Aged 3 to 12</h1>
                            <p>To educate, inspire and empower our nation's young people into future Scholars and Orators of the Islamic faith 
                                who also equally contribute towards the local wider community as Leaders and professionals in their respective fields.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="hero-right position-relative">
                            <img data-depth="0.2" className="shape shape-1" src="/assets/img/shape/shape-01.png" alt="shape" />
                            <img data-depth="0.2" className="shape-2" src="/assets/img/shape/shape-02.png" alt="shape" />
                            <img className="shape-6" src="/assets/img/shape/slider-shape-6.png" alt="shape" />
                            <div className="shape-4">
                                <img className="" src="/assets/img/shape/shape-04.png" alt="shape" />
                                <h5 className="hero-shape-text">Top Rated
                                    Teachers</h5>
                            </div>
                            <div className="shape-5">
                                <div className="course-card">
                                    <img src="/assets/img/shape/slider-card-1.png" alt="img not found" />
                                    <img src="/assets/img/shape/slider-card-2.png" alt="img not found" />
                                    <img src="/assets/img/shape/slider-card-3.png" alt="img not found" />
                                    <img src="/assets/img/shape/slider-card-4.png" alt="img not found" />
                                    <span><i className="far fa-plus"></i></span>
                                </div>
                                <h5>More than <span>10,000+</span> students
                                    enrolled since the late 1990s</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;