import { Link } from 'gatsby';
import React from 'react';
import Pagination from '../common/pagination';
import ShopSidebar from '../shop/shopSidebar';

const CourseContentTwo = () => {
    return (
        <section className="course-content-area pb-90">
            <div className="container">
                <div className="row mb-10">
                    <div className="col-xl-3 col-lg-4 col-md-12">
                        <ShopSidebar />
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-01.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Python and Django Full Stack Web Developer Bootcamp</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$12.57</span>
                                                <del>$24.50</del>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Python and Django Full Stack Web Developer Bootcamp</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>1:33 Min</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-02.jpg" alt="course-img" /></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>free</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Write Better Emails: Tactics for Smarter Team Communication</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>1:33 Min</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-03.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Data Science Real-Life Data Science Exercises Included</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$12.57</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Data Science Real-Life Data Science Exercises Included</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>1:33 Min</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-04.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>MySQL Database : Beginner SQL Database Design</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$147.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">MySQL Database : Beginner SQL Database Design</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-05.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Python and Django Full Stack Web Developer Bootcamp</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$21.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Python and Django Full Stack Web Developer Bootcamp</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-06.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Basics for Beginners: Learn C# Fundamentals by Coding</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$12.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Basics for Beginners: Learn C# Fundamentals by Coding</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-07.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color">Live Style</Link>
                                                <Link to="/course-details"><h3>Become a Super Human: Naturally and Boost Testosterone</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$48.00</span>
                                                <del>$24.50</del>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Become a Super Human: Naturally and Boost Testosterone</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-08.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-3">Business</Link>
                                                <Link to="/course-details"><h3>Python and Django Full Stack Web Developer Bootcamp</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>free</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Python and Django Full Stack Web Developer Bootcamp</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-09.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Machine Learning Hands-On Python and R In Data Science</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$29.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Machine Learning Hands-On Python and R In Data Science</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-10.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Understanding Java Script 2022 Edition</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>free</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Understanding Java Script 2022 Edition</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-11.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Python for Financial Analysis and Algorithmic Trading</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$57.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Python for Financial Analysis and Algorithmic Trading</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-12.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-1">Development</Link>
                                                <Link to="/course-details"><h3>Python for Financial Analysis and Algorithmic Trading</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$15.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Python for Financial Analysis and Algorithmic Trading</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-13.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-3">Business</Link>
                                                <Link to="/course-details"><h3>Master Google Docs Free online documents for personal use</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$42.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Master Google Docs Free online documents for personal use</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-14.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-3">Business</Link>
                                                <Link to="/course-details"><h3>Spring and Hibernate for Beginners Spring Social Boot</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>$37.00</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Spring and Hibernate for Beginners Spring Social Boot</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                    <div className="student-course-img">
                                        <Link to="/course-details"><img src="/assets/img/course/course-15.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <Link to="/course" className="category-color category-color-3">Business</Link>
                                                <Link to="/course-details"><h3>Accounting Financial Total Beginners to Advanced</h3></Link>
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
                                    <div className="portfolio-course-2-content">
                                        <div className="portfolio-course-wrapper">
                                            <div className="portfolio-price">
                                                <span>free</span>
                                            </div>
                                            <div className="portfolio-course-2">
                                                <h3><Link to="/course-details">Accounting Financial Total Beginners to Advanced</Link></h3>
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
                                    <div className="course-2-footer">
                                        <div className="coursee-clock">
                                            <i className="flaticon-clock"></i><span>4 Years</span>
                                        </div>
                                        <div className="course-creadit">
                                            <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                        </div>
                                        <div className="course-network">
                                            <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12'>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseContentTwo;