import { Link } from 'gatsby';
import React from 'react';
import Pagination from '../common/pagination';
import ShopSidebar from './shopSidebar';

const CourseContentFour = () => {
    return (
        <div className="course-content-area pb-90">
            <div className="container">
                <div className="row mb-10">
                <h1 className="mb-20">Secondary School <span className="down-mark-line">Curriculum</span></h1>
                <p>Our Early Years ethos is that learning is through providing a stimulating adult 
                                                        supported environment for young children to develop their shakhsiyah, thinking, 
                                                        self awareness and physical development. We are continuously developing new and 
                                                        exciting ways of encouraging personal development in all areas of learning in a 
                                                        safe and stimulating environment.</p>
                                                     <p>In addition to our themes, teachers cater for the particular interests and 
                                                            choices of individual children in their care. This happens by observing each 
                                                            child’s play regularly and planning and resourcing the environment accordingly 
                                                            to enhance that child’s interest. This ensures that the classroom environment 
                                                            incorporates the learning and development of all the children. These observations 
                                                            cover all areas of learning.</p><br/><br/><br/><br/><br/>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <ShopSidebar />
                    </div>
                    
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/halaqah.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Halaqah</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                                <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/quran.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Qur'an and Qur'anic Arabic</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/thematic.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Thematic Curriculum</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/english.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>English</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/maths.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Mathematics</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/knowledge.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Knowledge and Understanding of the World</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/creative.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Creative Development</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="academic-box mb-30">
                                    <div className="academic-thumb">
                                        <img src="/assets/img/course/physical.svg" alt="img not found" />
                                    </div>
                                    <div className="academic-content">
                                        <div className="academic-content-header">
                                            <Link to="/curriculum-details"><h3>Physical Development</h3></Link>
                                        </div>
                                        <div className="academic-body">
                                            <div className="academic-tutor d-flex align-items-center">
                                            <img src="/assets/img/course/farah-svg.svg" alt="img not found" />
                                                <Link to="/instructor-profile">SECONDARY SCHOOL</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="academic-footer">
                                            <div className="coursee-clock">
                                                <i className="flaticon-clock"></i><span>11-16 Years</span>
                                            </div>
                                            <Link to="/curriculum-details" className="edo-course-sec-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContentFour;