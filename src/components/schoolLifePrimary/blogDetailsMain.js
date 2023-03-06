import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';

const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/course-slider.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>Primary School Life</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>Primary School Life</span></li>
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
                                            <h1 className="mb-20">Primary <span className="down-mark-line"> School</span> Life</h1>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <div className="blog-meta">
                                                    <div className="blog-user">
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <p>At Shakhsiyah Schools we believe that learning is a lifelong journey, and extends well beyond the classroom. As a community, 
                                                        we are constantly seeking knowledge to grow closer to Allah (swt). The curriculum and formal classroom learning is just 
                                                        one element of learning in Shakhsiyah Schools. Children learn through all aspects of school life in many ways as our 
                                                        concept of learning is holistic tarbiyah.</p>
                                                        <p>Children learn through a range of experiences. Our key activities are listed below, with further information.</p>
                                                    </div>
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