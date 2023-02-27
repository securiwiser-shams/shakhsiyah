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
                                <h2>{blogItem.title}</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>{blogItem.title}</span></li>
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
                                            <h1 className="mb-20">Shakhsiyah Schools seek to ensure that parents have access to the right information about School <span className="down-mark-line">policies</span> at all times.</h1>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <div className="blog-meta">
                                                    <div className="blog-user">
                                                        <i className="flaticon-avatar"></i>
                                                        <span>{blogItem.name}</span>
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <p>Our foremost priority is the welfare, health and
                                                        safety of all children in our care. All members of Islamic Shakhsiyah Foundation  
                                                        will need to abide by these policies at all times. Please click on the links below for 
                                                        important policy information summarized for Parents. Further details are also available 
                                                        on request from the School Administrator. </p>
                                                    <blockquote>
                                                        <p>Shakhsiyah Schools endeavour to nurture the natural disposition (fitrah) of each 
                                                            individual child in order to develop his/her personal character (shakhsiyah) into a 
                                                            well rounded, confident Muslim who has sincerity in intention and steadfastness in 
                                                            action.</p>
                                                        <p className="mb-0"><cite>Dr Farah Ahmed</cite></p>
                                                    </blockquote>
                                                    
                                                        <p><a href="https://drive.google.com/file/d/1JREMDzsMSiYzDLktQhluNRoD75mubPzo/view?usp=share_link" target="_blank">Admissions Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/16rnM-JY-mfXxNYY_5h_ZOdgKbGHnPhjx/view?usp=sharing" target="_blank">Anti-Bullying Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1setyeLGogIhNLlLoshcq9uzIxPJKqAx-/view?usp=sharing" target="_blank">Attendance and Punctuality Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1-ulxEcCrjLX-MFigM-amzbCCZqFpd7Mo/view?usp=sharing" target="_blank">Behaviour, Discipline and Exclusion Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1DByaq6qjkL22ABCkTZREF3XwVNqpWUrs/view?usp=share_link" target="_blank">Complaints Procedure</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1vRrGSfsPx-ueDqioltEJzKUNzXH9Z5qG/view?usp=sharing" target="_blank">EAL Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/16G6TuD7H1h2z70mxV0dZ8tb_8mBwyLDY/view?usp=sharing" target="_blank">Equality Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/19GPLkxLS122K2u5lWJPsSxKmhFRz8lpR/view?usp=sharing" target="_blank">General Data Protection Regulations Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1Yw3WI_qYVeLkUffV6xhNlWoNkojJLrrY/view?usp=sharing" target="_blank">Privacy Policy for Parents</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1bGYGyf4Ur_vvcCUOTwq7TyzxHTeEg6xh/view?usp=sharing" target="_blank">Health and Safety Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1gu9epqazqoA03q7IPJ63w-hSFmA3ZM-L/view?usp=sharing" target="_blank">Health and Safety Policy - Addendum Coronavirus</a></p>
                                                        <p><a href="hhttps://drive.google.com/file/d/1_Hhpyg5yBZbr4-MyrSe_fdHwuCQrGfvG/view?usp=sharing" target="_blank">Safeguarding and Child Protection Policy - Addendum Coronavirus</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1e2J1zsurs6V8EvfxqyE8oWQ30U0jwLqc/view?usp=sharing" target="_blank">Fire Safety Policy Slough Branch</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1I7KE4hfx13hkCnK4Nr2aFYb8abOAdPTy/view?usp=sharing" target="_blank">Fire Safety Policy London Branch</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1PG8RUU-orXGEqOaACRQPn2ZrZimm6kgv/view?usp=sharing" target="_blank">Healthy Food Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1ze1ygFz-nokbrRRXqgjYYxYUIxpSBfmz/view?usp=sharing" target="_blank">Medicines Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1zUUDEeIEKEmdVvRiT7KoReqr-j-Vgq_j/view?usp=sharing" target="_blank">First Aid Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1hQuxc1Nv5kUIBjLboe0qr5qHT5279DMq/view?usp=sharing" target="_blank">Relationships and intimacy Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1CKazdAP9kGle4KLawjAPAjPYLPkXAhs-/view?usp=share_link" target="_blank">E- Safety, Mobile Phone and Camera Policy (EYFS, Primary and Secondary)</a></p>
                                                        <p><a href="https://drive.google.com/file/d/12QW4ntrNDmHNzjzWOYq5qe9HbW2bVBul/view?usp=sharing" target="_blank">SEN Policy</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1eprl3d-y9je1BDkGfS0BSxvGoZuJgbly/view?usp=sharing" target="_blank">Guide for Parents and Teachers: Online Safety for Children</a></p>

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