import { Link } from 'gatsby';
import React from 'react';

const InstructorCourse = () => {
    return (
        <>
            <div className="my-course-info">
                <h3>My Courses</h3>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-md-6">
                    <div className="eduman-course-main-wrapper mb-30">
                        <div className="eduman-course-img w-img">
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
                                <div className="eduman-course-tutor">
                                    <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-01.png" alt="img not found" /></Link>
                                    <Link to="/instructor-profile"><span>Eduman</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="eduman-course-footer">
                            <div className="course-lessson-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                    viewBox="0 0 16.471 16.471">
                                    <g id="blackboard-52441" transform="translate(-0.008)">
                                        <path id="Path_101-65441" data-name="Path 101"
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
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="eduman-course-main-wrapper mb-30">
                        <div className="eduman-course-img w-img">
                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-02.jpg" alt="course-img" /></Link>
                        </div>
                        <div className="eduman-course-wraper">
                            <div className="eduman-course-heading">
                                <Link to="/course" className="course-link-color-2">Life Style</Link>
                                <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                            </div>
                            <div className="eduman-course-text">
                                <h3><Link to="/course-details">Master Google Docs: Free online documents for personal use</Link></h3>
                            </div>
                            <div className="eduman-course-meta">
                                <div className="eduman-course-price">
                                    <span className="price-now">$47.00 </span>
                                    <del className="price-old">$75.50</del>
                                </div>
                                <div className="eduman-course-tutor">
                                    <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-02.png" alt="img not found" /></Link>
                                    <Link to="/instructor-profile"><span>Eduman</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="eduman-course-footer">
                            <div className="course-lessson-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                    viewBox="0 0 16.471 16.471">
                                    <g id="blackboard-1244" transform="translate(-0.008)">
                                        <path id="Path_10154542" data-name="Path 101"
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
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="eduman-course-main-wrapper mb-30">
                        <div className="eduman-course-img w-img">
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
                                    <span className="price-now">$47.00 </span>
                                    <del className="price-old">$75.50</del>
                                </div>
                                <div className="eduman-course-tutor">
                                    <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-04.png" alt="img not found" /></Link>
                                    <Link to="/instructor-profile"><span>Eduman</span></Link>
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
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="eduman-course-main-wrapper mb-30">
                        <div className="eduman-course-img w-img">
                            <Link to="/course-details"><img src="/assets/img/portfilo/course-img-06.jpg" alt="course-img" /></Link>
                        </div>
                        <div className="eduman-course-wraper">
                            <div className="eduman-course-heading">
                                <Link to="/course" className="course-link-color-4">Health and Fitness</Link>
                                <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                            </div>
                            <div className="eduman-course-text">
                                <h3><Link to="/course-details">Become a Super Human: Naturally and Safely Boost Testosterone</Link></h3>
                            </div>
                            <div className="eduman-course-meta">
                                <div className="eduman-course-price">
                                    <span className="price-now">$47.00 </span>
                                </div>
                                <div className="eduman-course-tutor">
                                    <Link to="/instructor-profile"><img src="/assets/img/portfilo/course-tutor-05.png" alt="img not found" /></Link>
                                    <Link to="/instructor-profile"><span>Eduman</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="eduman-course-footer">
                            <div className="course-lessson-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                    viewBox="0 0 16.471 16.471">
                                    <g id="blackboard-2004" transform="translate(-0.008)">
                                        <path id="Path_1012055" data-name="Path 101"
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
        </>
    );
};

export default InstructorCourse;