import { Link } from 'gatsby';
import React from 'react';

const BrowserCourseSection = () => {
    return (
        <div className="browser-course-area">
            <div className="container">
                <div className="row">
                <div className="col-12">
                        <div className="section-title text-center mb-60">
                            <h1>Our School <span className="down-mark-line-2"> Settings</span></h1>
                        </div>
                    </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                        <div className="browser-course-wrapper course-height">
                            <div className="browser-course-bg">
                                <img src="/assets/img/browser-course/feature1.png" alt="img not found" />
                            </div>
                            <div className="browser-course-content">
                                <span>North London Branch</span>
                                <div className="browser-course-tittle">
                                    <Link to="/parents">First Floor, 277 St Ann's Rd, London, N15 5RG</Link>
                                </div>
                                <div className="browser-btn">
                                    <Link to="/parents" className="course-btn">Visit School</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                        <div className="browser-course-wrapper course-height">
                            <div className="browser-course-bg">
                                <img src="/assets/img/browser-course/feature2.png" alt="img not found" />
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="browser-course-content">
                                        <span>Slough Branch</span>
                                        <div className="browser-course-tittle">
                                            <Link to="/parents">Cippenham Lodge, Cippenham  Ln, Slough, SL1 5AN</Link>
                                        </div>
                                        <div className="browser-btn">
                                        <Link to="/parents" className="course-btn">Visit School</Link>
                                        </div>
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

export default BrowserCourseSection;