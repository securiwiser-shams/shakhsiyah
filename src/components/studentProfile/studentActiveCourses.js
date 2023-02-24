import { Link } from 'gatsby';
import React from 'react';

const StudentActiveCourses = () => {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                        <img src="/assets/img/course/course-01.jpg" alt="course-img" />
                    </div>
                    <div className="course-cart">
                        <div className="course-info-wrapper">
                            <div className="cart-info-body">
                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                <Link to="/course-details"><h3>WordPress Development Course for Plugins and Themes</h3></Link>
                                <div className="cart-lavel">
                                    <h5>Level : <span>Beginner</span></h5>
                                    <p>Knowledge is power. Information is liberating. Education is the premise of
                                        progress, in every society, in every family</p>
                                </div>
                                <div className="info-cart-text">
                                    <ul>
                                        <li><i className="far fa-check"></i>Scratch to HTML</li>
                                        <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                        <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                        <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                    </ul>
                                </div>
                                <div className="course-action">
                                    <Link to="/course-details" className="view-details-btn">View Details</Link>
                                    <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                    <Link to="/course-details" className="c-share-btn"><i className="flaticon-previous"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="student-course-footer">
                        <div className="student-course-linkter">
                            <div className="course-lessons">
                                <i className="fal fa-tv"></i>
                                <span className="ms-2">12 Lessons</span>
                            </div>
                            <div className="portfolio-price">
                                <span>$12.57</span>
                                <del>$24.50</del>
                            </div>
                        </div>
                        <div className="student-course-text">
                            <h3><Link to="/course-details">WordPress Development Course for Plugins and Themes</Link></h3>
                        </div>
                        <div className="portfolio-user">
                            <div className="user-icon">
                                <Link to="/instructor-profile"><i className="fas fa-user"></i>Bravo</Link>
                            </div>
                            <div className="course-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <span>(25)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                        <img src="/assets/img/course/course-02.jpg" alt="course-img" />
                    </div>
                    <div className="course-cart">
                        <div className="course-info-wrapper">
                            <div className="cart-info-body">
                                <Link to="/course" className="category-color category-color-3">Business</Link>
                                <Link to="/course-details"><h3>Write Better Emails: Tactics for Smarter Team Communication</h3></Link>
                                <div className="cart-lavel">
                                    <h5>Level : <span>Beginner</span></h5>
                                    <p>Knowledge is power. Information is liberating. Education is the premise of
                                        progress, in every society, in every family</p>
                                </div>
                                <div className="info-cart-text">
                                    <ul>
                                        <li><i className="far fa-check"></i>Scratch to HTML</li>
                                        <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                        <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                        <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                    </ul>
                                </div>
                                <div className="course-action">
                                    <Link to="/course-details" className="view-details-btn">View Details</Link>
                                    <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                    <Link to="/course-details" className="c-share-btn"><i className="flaticon-previous"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="student-course-footer">
                        <div className="student-course-linkter">
                            <div className="course-lessons">
                                <i className="fal fa-tv"></i>
                                <span className="ms-2">12 Lessons</span>
                            </div>
                            <div className="portfolio-price">
                                <span>FREE</span>
                            </div>
                        </div>
                        <div className="student-course-text">
                            <h3><Link to="/course-details">Write Better Emails: Tactics for Smarter Team Communication</Link></h3>
                        </div>
                        <div className="portfolio-user">
                            <div className="user-icon">
                                <Link to="/instructor-profile"><i className="fas fa-user"></i>Prince</Link>
                            </div>
                            <div className="course-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <span>(25)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentActiveCourses;