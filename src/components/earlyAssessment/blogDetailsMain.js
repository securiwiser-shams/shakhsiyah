import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';

const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/course-slider.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>Assessment</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>Early Years Assessment</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="blog-main-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                                            <div className="blog-thumb ">
                                            <h1 className="mb-20">Early Years <span className="down-mark-line">Assessment</span></h1>
                                            </div>
                                                    </div>
                                                </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                
        </>
    );
};

export default BlogDetailsMain;