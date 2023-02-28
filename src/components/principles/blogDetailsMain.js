import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailsSidebar from './eventDetailsSidebar';


const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/course-slider.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>Principles</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>Principles</span></li>
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
                                            <h1 className="mb-20">The Seven <span className="down-mark-line">Principles</span> of Shakhsiyah Education</h1>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <div className="blog-meta">
                                                    <div className="blog-user">
                                                        <i className="flaticon-avatar"></i>
                                                        <span>{blogItem.name}</span>
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <p>The seven Principles of Shakhsiyah Education are built on the solid foundation of our 
                                                        deen and derived from the understanding of the deen as Iman, Islam and Ihsan. At
                                                         Shakhsiyah, these foundational concepts of deen have been related to concepts of
                                                          Islamic education, tarbiyah, ta’alim and taadib. In Islamic Shakhsiyah Foundation 
                                                          schools and educational projects, the following principles shape every aspect of 
                                                          our work, and are the commitment which binds together a community of learning, 
                                                          which involves children, Muslim youth, teachers and parents. Our Guide on the 
                                                          Principles of Shakhsiyah Education offers a detailed overview. </p>
                                                          <blockquote>
                                                        <p>Shakhsiyah Schools endeavour to nurture the natural disposition (fitrah) of each 
                                                            individual child in order to develop his/her personal character (shakhsiyah) into a 
                                                            well rounded, confident Muslim who has sincerity in intention and steadfastness in 
                                                            action.</p>
                                                        <p className="mb-0"><cite>Dr Farah Ahmed</cite></p>
                                                    </blockquote>
                                                          <iframe src="https://drive.google.com/file/d/1yNBDipIfmq0Q7VBbyIAbOcHcuuT1Ib7r/preview" width="740" height="940" allow="autoplay"></iframe>
                                                    </div>
                                                </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-8">
                        <EventDetailsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsMain;