import { Link } from 'gatsby';
import React from 'react';

const ZoomSection = () => {
    return (
        <section className="zoom-area pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-2">
                        <div className="zoom-thumb position-relative">
                            <img className="zoom-shape-01" src="/assets/img/teacher/zoom-shape-1.png" alt="img not found" />
                            <img className="zoom-shape-02" src="/assets/img/teacher/zoom-shape-2.png" alt="img not found" />
                            <img className="zoom-thumb-main-img" src="/assets/img/teacher/Zoom.png" alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-1">
                        <div className="zoom-class-wrapper mb-60">
                            <div className="section-title mb-30">
                                <h2>Live Class From
                                    Anywhere Via <span className="down-mark-line-2"><a href="#">Zoom</a></span></h2>
                            </div>
                            <div className="zoon-class-text">
                                <p>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace.</p>
                            </div>
                            <Link to="/zoom-class" className="edu-btn btn-transparent mt-25">Try free now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZoomSection;