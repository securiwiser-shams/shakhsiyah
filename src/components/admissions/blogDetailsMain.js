import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';


const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/admissions-slider.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>Admissions</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>Admissions</span></li>
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
                                            <h1 className="mb-20">Information for <span className="down-mark-line">Prospective</span> Parents</h1>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <div className="blog-meta">
                                                    <div className="blog-user">
                                                        <i className="flaticon-avatar"></i>
                                                        <span>{blogItem.name}</span>
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <p>Parents must fill in an application form for their child to be added to the school’s waiting 
                                                        list. If the child already attends another school, a copy of the latest school report 
                                                        will be required during the admission procedure. </p>
                                                    <blockquote>
                                                        <p>Shakhsiyah Schools endeavour to nurture the natural disposition (fitrah) of each 
                                                            individual child in order to develop his/her personal character (shakhsiyah) into a 
                                                            well rounded, confident Muslim who has sincerity in intention and steadfastness in 
                                                            action.</p>
                                                        <p className="mb-0"><cite>Dr Farah Ahmed</cite></p>
                                                    </blockquote>
                                                    <p>Parents will then be invited to an interview and assessment of their child. This is also an 
                                                        opportunity for parents to see the school and the facilities available. If the interview and 
                                                        assessment are successful, the child may be offered a place as soon it becomes available. Parents
                                                        will then be provided with the following printable documents: </p>
                                                    
                                                        <underline><a href="https://drive.google.com/file/d/1jfTj8vY7Ab1Y5rC1-sVoqQkTRCvzKVSg/view?usp=share_link" target="_blank">Holistic Curriculum In Shakhsiyah Schools</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1eM9AiAyiCGgYQJtNOjoyluItln_UAnLo/view?usp=sharing" target="_blank">Parents’ Contract</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1kTfXHp2xRNo0SmsL-GqTiJWfJ5XCO6Lz/view?usp=sharing" target="_blank">Registration Form (New Admissions Only)</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/11z1waRQ_eglcyrbJuU0rQF-pzA7iq7vO/view?usp=sharing" target="_blank">Child Information Form (Current Pupils Only)</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1p8hPCnXU1Rvimj5HoZ1FPS-6pRssTQqI/view?usp=sharing" target="_blank">General Consent Form</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1yKRFvzgIC9gUV_CpURhK6QSfDkKMwHN4/view?usp=sharing" target="_blank">Term Dates 2022-2023</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1f5gVLuHgOxWnJCdhsBBmVu9Qyb0hjcem/view?usp=sharing" target="_blank">Academic Year Planner 2022-2023</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1bYrQhJGQmjj-sh20wS8j0vX6gv8waweV/view?usp=sharing" target="_blank">Attendance Policy</a></underline><br/><br/>
                                                        <underline><a href="https://drive.google.com/file/d/1Ks6_MSGBtFxkf9vf3ELGB_mUmy9ZLItn/view?usp=sharing" target="_blank">Uniform Information</a></underline>
                                                        <underline><a href="/policies" target="_blank">Complaints Procedure & Admissions Policy </a></underline><br/><br/>
                                                        </div>
                                                        <h1 className="down-mark-line">Fees</h1>
                                                        <p>Our fee policy is updated at the start of each new academic year. Further information relating to our fee payment policy, 
                                                            structure and available funding can be found below. </p>
                                                    
                                                        <p><a href="https://drive.google.com/file/d/1hmuZJU3yvoX8xmxODs0ZQJXeo6wd5STa/view?usp=sharing" target="_blank">Fee Regulations</a></p>
                                                        <p><a href="https://drive.google.com/file/d/1qCylfFY_bsEZAkpUYxZaNns1fCrSw9Kb/view?usp=sharing" target="_blank">Annual Fee Payment Agreement</a></p>
                                
                                                        <h1 className="mb-20">Visit Us/Book an <span className="down-mark-line">Appointment</span></h1>
                                                        <p>We host a number of Open Days throughout the school year. You can also request an appointment by emailing our school 
                                                            administrators: <a href="mailto:mail@isfnet.org.uk ">mail@isfnet.org.uk </a> or <a href="mailto:mail-slough@isfnet.org.uk ">mail-slough@isfnet.org.uk</a></p>
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