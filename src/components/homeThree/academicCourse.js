import { Link } from 'gatsby';
import React from 'react';

const AcademicCourse = () => {
    return (
        <div className="academic-courses-area p-relative pt-110 pb-120">
            <img className="academic-shape-2" src="/assets/img/shape/acadenic-shape-2.png" alt="shape" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title mb-50">
                            <h2>Academic <span className="down-mark-line-2">Courses</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="academic-box position-relative mb-30">
                            <img className="academic-shape" src="/assets/img/shape/acadenic-shape-1.png" alt="img not found" />
                            <div className="academic-thumb">
                                <img src="/assets/img/course/academi-course-2.jpg" alt="img not found" />
                            </div>
                            <div className="academic-content">
                                <div className="academic-content-header">
                                    <Link to="/course-details"><h3>Bachelor of Business Administration ( Accounting)</h3></Link>
                                </div>
                                <div className="academic-body">
                                    <div className="academic-tutor d-flex align-items-center">
                                        <img src="/assets/img/course/academic-tutor-1.png" alt="img not found" />
                                        <Link to="/instructor-profile">Professor David</Link>
                                    </div>
                                    <p>Helping employees gain skills and development often take a back seat to business</p>
                                </div>
                                <div className="academic-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-wall-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <Link to="/course-details" className="edo-course-sec-btn">Apply now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="academic-box mb-30">
                            <div className="academic-thumb">
                                <img src="/assets/img/course/academi-course-3.jpg" alt="img not found" />
                            </div>
                            <div className="academic-content">
                                <div className="academic-content-header">
                                    <Link to="/course-details"><h3>Entrepreneurship Essentials Business Course</h3></Link>
                                </div>
                                <div className="academic-body">
                                    <div className="academic-tutor d-flex align-items-center">
                                        <img src="/assets/img/course/academic-tutor-2.png" alt="img not found" />
                                        <Link to="/instructor-profile">Professor Watson</Link>
                                    </div>
                                    <p>Helping employees gain skills and development often take a back seat to business
                                    </p>
                                </div>
                                <div className="academic-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-wall-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <Link to="/course-details" className="edo-course-sec-btn">Apply now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="academic-box mb-30">
                            <div className="academic-thumb">
                                <img src="/assets/img/course/academi-course-4.jpg" alt="img not found" />
                            </div>
                            <div className="academic-content">
                                <div className="academic-content-header">
                                    <Link to="/course-details"><h3>Financial Analysis Valuation for Lawyers Eduman</h3></Link>
                                </div>
                                <div className="academic-body">
                                    <div className="academic-tutor d-flex align-items-center">
                                        <img src="/assets/img/course/academic-tutor-3.png" alt="img not found" />
                                        <Link to="/instructor-profile">Professor Michel</Link>
                                    </div>
                                    <p>Helping employees gain skills and development often take a back seat to business
                                    </p>
                                </div>
                                <div className="academic-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-wall-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <Link to="/course-details" className="edo-course-sec-btn">Apply now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 text-center">
                        <div className="academic-bottom-btn ">
                            <Link to="/course" className="edo-theme-btn mt-30">View all course</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicCourse;