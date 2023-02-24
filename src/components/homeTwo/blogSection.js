import { Link } from 'gatsby';
import React from 'react';

const BlogSection = () => {
    return (
        <div className="blog-area pt-110 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="section-title mb-50">
                            <h2>Read Our <span className="down-mark-line-2">Latest</span> Tech News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog-wrapper position-relative mb-30">
                            <div className="blog-thumb ">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog-01.jpg" alt="not found" /></Link>
                            </div>
                            <Link to="/blog" className="blog-tag">
                                <i className="fal fa-folder-open"></i>
                                Development
                            </Link>
                            <div className="blog-content-wrapper">
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <i className="flaticon-calendar"></i>
                                        <span>20 Jan 2020</span>
                                    </div>
                                    <div className="blog-user">
                                        <i className="flaticon-avatar"></i>
                                        <span>Brian Hoff</span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link to="/blog-details">
                                        <h3>Ask the Expert: Typography Talk with Brian Hoff</h3>
                                    </Link>
                                    <Link to="/blog-details" className="blog-btn">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog-wrapper position-relative mb-30">
                            <div className="blog-thumb ">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog-02.jpg" alt="not found" /></Link>
                            </div>
                            <Link to="/blog" className="blog-tag">
                                <i className="fal fa-folder-open"></i>
                                Business
                            </Link>
                            <div className="blog-content-wrapper">
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <i className="flaticon-calendar"></i>
                                        <span>13 Jan 2020</span>
                                    </div>
                                    <div className="blog-user">
                                        <i className="flaticon-avatar"></i>
                                        <span>Mark Hanry</span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link to="/blog-details">
                                        <h3>Stop Redesigning And Start Your Tuning Your Site Instead</h3>
                                    </Link>
                                    <Link to="/blog-details" className="blog-btn">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog-wrapper position-relative mb-30">
                            <div className="blog-thumb">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog-03.jpg" alt="blog-img" /></Link>
                            </div>
                            <Link to="/blog" className="blog-tag">
                                <i className="fal fa-folder-open"></i>
                                Web Design
                            </Link>
                            <div className="blog-content-wrapper">
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <i className="flaticon-calendar"></i>
                                        <span>23 Dec 2020</span>
                                    </div>
                                    <div className="blog-user">
                                        <i className="flaticon-avatar"></i>
                                        <span>Eduman</span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link to="/blog-details">
                                        <h3>How To Teach Web Design to the New Students</h3>
                                    </Link>
                                    <Link to="/blog-details" className="blog-btn">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;