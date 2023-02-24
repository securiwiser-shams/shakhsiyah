import { Link } from 'gatsby';
import React from 'react';
import Pagination from '../common/pagination';
import ShopSidebar from '../shop/shopSidebar';

const CourseContentThree = () => {
    return (
        <section className="course-content-area pb-90">
            <div className="container">
                <div className="row mb-10">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                        <ShopSidebar />
                    </div>

                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-01.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-1"><Link to="/course">Development</Link></span>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-1">Development</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">WordPress Development Course for Plugins and Themes</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$47.00 </span>
                                                <del className="price-old">$75.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-01.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-02.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-1"><Link to="/course">Development</Link></span>
                                                <Link to="/course-details"><h3>Master Google Docs: Free online documents for personal use</h3></Link>

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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-1">Development</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Master Google Docs: Free online documents for personal use</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$32.00 </span>
                                                <del className="price-old">$45.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-02.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-03.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-3"><Link to="/course">Business</Link></span>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-3">Business</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Write Better Emails: Tactics for Smarter Team Communication</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$21.00 </span>
                                                <del className="price-old">$27.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-03.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-04.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-4"><Link to="/course">Life Style</Link></span>
                                                <Link to="/course-details"><h3>Become a Super Human: Naturally and Safely Boost</h3></Link>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-4">Life Style</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Become a Super Human: Naturally and Safely Boost</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$19.00 </span>
                                                <del className="price-old">$31.00</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-02.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-05.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-1"><Link to="/course">Development</Link></span>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-1">Development</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Python and Django Full Stack Web Developer Bootcamp</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$14.00 </span>
                                                <del className="price-old">$23.00</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-03.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-06.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-5"><Link to="/course">Data Science</Link></span>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-5">Data Science</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Data Science Real-Life Data Science Exercises Included</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$24.00 </span>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-04.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-07.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-1"><Link to="/course">Development</Link></span>
                                                <Link to="/course-details"><h3>Become a Super Human: Naturally and Safely Boost Testosterone</h3></Link>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-5">Data Science</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Become a Super Human: Naturally and Safely Boost Testosterone</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$28.00 </span>
                                                <del className="price-old">$36.00</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-05.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-thumb w-img">
                                        <Link to="/course-details"><img src="/assets/img/portfilo/course-img-08.jpg" alt="course-img" /></Link>
                                    </div>
                                    <div className="course-cart">
                                        <div className="course-info-wrapper">
                                            <div className="cart-info-body">
                                                <span className="category-color category-color-1"><Link to="/course">Development</Link></span>
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
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link to="/course" className="course-link-color-5">Data Science</Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link to="/course-details">Machine Learning Hands-On Python and R In Data Science</Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                                <span className="price-now">$12.00 </span>
                                                <del className="price-old">$19.00</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-06.png" alt="tutor-img" /></Link>
                                                <Link to="/instructor-profile"><span>Eduman</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <i className="fal fa-tv"></i>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseContentThree;