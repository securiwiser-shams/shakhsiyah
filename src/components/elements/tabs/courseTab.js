import { Link } from 'gatsby';
import React from 'react';

const CourseTab = () => {
    return (
        <section className="course-area p-relative pt-110 pb-90">
            <div className="course-shape-1">
                <img src="/assets/img/shape/portfolio-shap-1.png" alt="shape" />
            </div>
            <div className="course-shape-2">
                <img src="/assets/img/shape/portfolio-shap-2.png" alt="shape" />
            </div>
            <div className="course-shape-3">
                <img src="/assets/img/shape/portfolio-shap-3.png" alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 f-left">
                        <div className="section-title mb-50">
                            <h2>Discover<br />
                                World's Best <span className="down-mark-line">Curriculum</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="portfolio-button mt-60">
                            <nav>
                                <div className="nav portfolio-button-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">View All<span className="port-red">[06]</span></button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Primary School<span className="port-red">[01]</span></button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Secondary School<span className="port-red">[03]</span></button>
                                    <button className="nav-link" id="nav-contact-tabA" data-bs-toggle="tab" data-bs-target="#nav-contactA" type="button" role="tab" aria-controls="nav-contactA" aria-selected="false">Business<span className="port-red">[01]</span></button>
                                    <button className="nav-link" id="nav-contact-tabB" data-bs-toggle="tab" data-bs-target="#nav-contactB" type="button" role="tab" aria-controls="nav-contactB" aria-selected="false">Life Styles<span className="port-red">[01]</span></button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="course-main-items">
                    <div className="tab-content portfolio-tabs-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
                                        <div className="course-cart">
                                            <div className="course-info-wrapper">
                                                <div className="cart-info-body">
                                                    <span className="category-color category-color-1"><Link to="/course">Primary School</Link></span>
                                                    <Link to="/course-details"><h3>Halaqah</h3></Link>
                                                    <div className="cart-lavel">
                                                        <h5>Level : <span>3-11 Year olds</span></h5>
                                                        <p>The Halaqah Curriculum is derived from our Principle of Halaqah.</p>
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-01.jpg" alt="course-img" /></Link>
                                        </div>
                                        <div className="eduman-course-wraper">
                                            <div className="eduman-course-heading">
                                                <Link to="/course" className="course-link-color-1">Halaqah</Link>
                                                <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                            </div>
                                            <div className="eduman-course-text">
                                                <h3><Link to="/course-details">The Halaqah Curriculum is derived from our Principle of Halaqah.</Link></h3>
                                            </div>
                                            <div className="eduman-course-meta">
                                                <div className="eduman-course-price">
                                                    <span className="price-now">$47.00 </span>
                                                    <del className="price-old">$75.50</del>
                                                </div>
                                                <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                    alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Danial</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboar09" transform="translate(-0.008)">
                                                        <path id="Path_01" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-02.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-02.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Mark Hanry</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboar09154" transform="translate(-0.008)">
                                                        <path id="Path_2501" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-03.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">FREE </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-03.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Junior Lucy</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-11" transform="translate(-0.008)">
                                                        <path id="Path_00001" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-05.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                    <del className="price-old">$75.50</del>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-05.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Edyal Romel</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard" transform="translate(-0.008)">
                                                        <path id="Path_101" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-06.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-06.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Mark Hanry</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-13" transform="translate(-0.008)">
                                                        <path id="Path_000" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-04.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00</span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-04.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Danial</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-10" transform="translate(-0.008)">
                                                        <path id="Path_100000" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row'>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-04.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00</span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-04.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Danial</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-10" transform="translate(-0.008)">
                                                        <path id="Path_100000" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className='row'>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-03.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">FREE </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-03.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Junior Lucy</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-11" transform="translate(-0.008)">
                                                        <path id="Path_00001" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-05.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                    <del className="price-old">$75.50</del>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-05.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Edyal Romel</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard" transform="translate(-0.008)">
                                                        <path id="Path_101" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-06.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-06.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Mark Hanry</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboard-13" transform="translate(-0.008)">
                                                        <path id="Path_000" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contactA" role="tabpanel" aria-labelledby="nav-contact-tabA">
                            <div className='row'>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-02.jpg" alt="course-img" /></Link>
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
                                                    <span className="price-now">$47.00 </span>
                                                </div>
                                                <div className="eduman-course-tutor">
                                                    <img src="/assets/img/portfilo/course-tutor-02.png" alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Mark Hanry</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboar09154" transform="translate(-0.008)">
                                                        <path id="Path_2501" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contactB" role="tabpanel" aria-labelledby="nav-contact-tabB">
                            <div className='row'>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="eduman-course-main-wrapper mb-30">
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
                                        <div className="eduman-course-thumb w-img">
                                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-01.jpg" alt="course-img" /></Link>
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
                                                <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                    alt="img not found" />
                                                    <Link to="/instructor-profile"><span>Danial</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eduman-course-footer">
                                            <div className="course-lessson-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                    viewBox="0 0 16.471 16.471">
                                                    <g id="blackboar09" transform="translate(-0.008)">
                                                        <path id="Path_01" data-name="Path 101"
                                                            d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                            fill="#575757" />
                                                    </g>
                                                </svg>
                                                <span className="ms-2">12 Lessons</span>
                                            </div>
                                            <div className="course-deteals-btn">
                                                <Link to="/course-details"><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseTab;