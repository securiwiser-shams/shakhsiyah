import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';


const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/policies-slider.png)" }}>
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
                                                    
                                                    <u><a href="https://drive.google.com/file/d/1JREMDzsMSiYzDLktQhluNRoD75mubPzo/view?usp=share_link" target="_blank">Admissions Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/16rnM-JY-mfXxNYY_5h_ZOdgKbGHnPhjx/view?usp=sharing" target="_blank">Anti-Bullying Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1setyeLGogIhNLlLoshcq9uzIxPJKqAx-/view?usp=sharing" target="_blank">Attendance and Punctuality Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1-ulxEcCrjLX-MFigM-amzbCCZqFpd7Mo/view?usp=sharing" target="_blank">Behaviour, Discipline and Exclusion Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1DByaq6qjkL22ABCkTZREF3XwVNqpWUrs/view?usp=share_link" target="_blank">Complaints Procedure</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1vRrGSfsPx-ueDqioltEJzKUNzXH9Z5qG/view?usp=sharing" target="_blank">EAL Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/16G6TuD7H1h2z70mxV0dZ8tb_8mBwyLDY/view?usp=sharing" target="_blank">Equality Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/19GPLkxLS122K2u5lWJPsSxKmhFRz8lpR/view?usp=sharing" target="_blank">General Data Protection Regulations Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1Yw3WI_qYVeLkUffV6xhNlWoNkojJLrrY/view?usp=sharing" target="_blank">Privacy Policy for Parents</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1bGYGyf4Ur_vvcCUOTwq7TyzxHTeEg6xh/view?usp=sharing" target="_blank">Health and Safety Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1gu9epqazqoA03q7IPJ63w-hSFmA3ZM-L/view?usp=sharing" target="_blank">Health and Safety Policy - Addendum Coronavirus</a></u><br/><br/>
                                                        <u><a href="hhttps://drive.google.com/file/d/1_Hhpyg5yBZbr4-MyrSe_fdHwuCQrGfvG/view?usp=sharing" target="_blank">Safeguarding and Child Protection Policy - Addendum Coronavirus</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1e2J1zsurs6V8EvfxqyE8oWQ30U0jwLqc/view?usp=sharing" target="_blank">Fire Safety Policy Slough Branch</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1I7KE4hfx13hkCnK4Nr2aFYb8abOAdPTy/view?usp=sharing" target="_blank">Fire Safety Policy London Branch</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1PG8RUU-orXGEqOaACRQPn2ZrZimm6kgv/view?usp=sharing" target="_blank">Healthy Food Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1ze1ygFz-nokbrRRXqgjYYxYUIxpSBfmz/view?usp=sharing" target="_blank">Medicines Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1zUUDEeIEKEmdVvRiT7KoReqr-j-Vgq_j/view?usp=sharing" target="_blank">First Aid Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1hQuxc1Nv5kUIBjLboe0qr5qHT5279DMq/view?usp=sharing" target="_blank">Relationships and intimacy Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1CKazdAP9kGle4KLawjAPAjPYLPkXAhs-/view?usp=share_link" target="_blank">E- Safety, Mobile Phone and Camera Policy (EYFS, Primary and Secondary)</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/12QW4ntrNDmHNzjzWOYq5qe9HbW2bVBul/view?usp=sharing" target="_blank">SEN Policy</a></u><br/><br/>
                                                        <u><a href="https://drive.google.com/file/d/1eprl3d-y9je1BDkGfS0BSxvGoZuJgbly/view?usp=sharing" target="_blank">Guide for Parents and Teachers: Online Safety for Children</a></u><br/><br/>
                                                        </div>
                                                </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-8">
                        <EventDetailsSidebar />
                        <EventDetailsSidebar1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsMain;