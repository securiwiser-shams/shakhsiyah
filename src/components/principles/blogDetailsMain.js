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
                                            <h1 className="mb-20">The seven Principles of Shakhsiyah Education</h1>
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

                                                          <iframe src="https://drive.google.com/file/d/1yNBDipIfmq0Q7VBbyIAbOcHcuuT1Ib7r/preview" width="740" height="940" allow="autoplay"></iframe>
                                                    <blockquote>
                                                        <p>Shakhsiyah Schools endeavour to nurture the natural disposition (fitrah) of each 
                                                            individual child in order to develop his/her personal character (shakhsiyah) into a 
                                                            well rounded, confident Muslim who has sincerity in intention and steadfastness in 
                                                            action.</p>
                                                        <p className="mb-0"><cite>Dr Farah Ahmed</cite></p>
                                                    </blockquote>
                                                    
                                                        
                                                </div>
                                            </div>
                                            <div className="latest-comments mb-50 mt-50">
                                                <h3>3 Comments</h3>
                                                <ul>
                                                    <li>
                                                        <div className="comments-box">
                                                            <div className="comments-info d-flex">
                                                                <div className="comments-avatar mr-20">
                                                                    <img src="/assets/img/member/member-img-04.png" alt="" />
                                                                </div>
                                                                <div className="avatar-name">
                                                                    <h5>Eleanor Fant</h5>
                                                                    <span className="post-meta"> July 14, 2022</span>
                                                                </div>
                                                            </div>
                                                            <div className="comments-text ml-65">
                                                                <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
                                                                    blatant have it, standard A bit of
                                                                    how is your father my lady absolutely.</p>
                                                                <div className="comments-replay">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="children">
                                                        <div className="comments-box">
                                                            <div className="comments-info d-flex">
                                                                <div className="comments-avatar mr-20">
                                                                    <img src="/assets/img/member/member-img-01.png" alt="" />
                                                                </div>
                                                                <div className="avatar-name">
                                                                    <h5>Dominic</h5>
                                                                    <span className="post-meta">April 16, 2022 </span>
                                                                </div>
                                                            </div>
                                                            <div className="comments-text ml-65">
                                                                <p>David blatant have it, standard A bit of how is your father my lady
                                                                    absolutely.</p>
                                                                <div className="comments-replay">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li className="children-2">
                                                                <div className="comments-box">
                                                                    <div className="comments-info d-flex">
                                                                        <div className="comments-avatar mr-20">
                                                                            <img src="/assets/img/member/member-img-02.png" alt="" />
                                                                        </div>
                                                                        <div className="avatar-name">
                                                                            <h5>Von Rails</h5>
                                                                            <span className="post-meta">April 18, 2022 </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comments-text ml-65">
                                                                        <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                                                                        <div className="comments-replay">
                                                                            <a href="#">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <div className="comments-box">
                                                            <div className="comments-info d-flex">
                                                                <div className="comments-avatar mr-20">
                                                                    <img src="/assets/img/member/member-img-04.png" alt="" />
                                                                </div>
                                                                <div className="avatar-name">
                                                                    <h5>Eleanor Fant</h5>
                                                                    <span className="post-meta">July 14, 2022</span>
                                                                </div>
                                                            </div>
                                                            <div className="comments-text ml-65">
                                                                <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
                                                                    blatant have it, standard A bit of
                                                                    how is your father my lady absolutely.</p>
                                                                <div className="comments-replay">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="children">
                                                        <div className="comments-box">
                                                            <div className="comments-info d-flex">
                                                                <div className="comments-avatar mr-20">
                                                                    <img src="/assets/img/member/member-img-01.png" alt="" />
                                                                </div>
                                                                <div className="avatar-name">
                                                                    <h5>Dominic</h5>
                                                                    <span className="post-meta">April 16, 2022 </span>
                                                                </div>
                                                            </div>
                                                            <div className="comments-text ml-65">
                                                                <p>David blatant have it, standard A bit of how is your father my lady
                                                                    absolutely.</p>
                                                                <div className="comments-replay">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="blog__comment">
                                                <h3>Leave a Comment</h3>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="blog__comment-input">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="blog__comment-input">
                                                                <input type="email" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="blog__comment-input">
                                                                <input type="text" placeholder="Website" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="blog__comment-input">
                                                                <textarea placeholder="Enter your comment ..."></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="blog__comment-agree d-flex align-items-center mb-20">
                                                                <input className="e-check-input" type="checkbox" id="e-agree" />
                                                                <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website
                                                                    in this browser for the next
                                                                    time I comment.</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="blog__comment-btn">
                                                                <button type="submit" className="edu-btn">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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