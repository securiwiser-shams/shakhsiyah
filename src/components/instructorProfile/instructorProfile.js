import React from 'react';
import Pagination from '../common/pagination';
import InstructorCourse from './instructorCourse';
import InstructorExperience from './instructorExperience';
import InstructorSkill from './instructorSkill';

const InstructorProfile = () => {
    return (
        <div className="course-details-area pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="course-instructors-img mb-30">
                            <img className="mb-20" src="/assets/img/course/course-instructors.png" alt="instructors-img" />
                            <div className="course-details-tittle mb-30">
                                <h3>David Allberto</h3>
                                <span className="d-block mb-15">Software Developer</span>
                                <ul>
                                    <li><a href="mailto:info@example.com" target="_blank"><i className="fal fa-envelope"></i> info@example.com</a></li>
                                    <li><a href="tel:987547587587" target="_blank"><i className="far fa-phone-alt"></i> (987) 547587587</a></li>
                                    <li><a href="#" target="_blank"><i className="far fa-map-marker-alt"></i> North Helenavile, FV77 8WS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-9">
                        <div className="course-details-wrapper">
                            <div className="course-details-meta">
                                <div className="total-course">
                                    <span>Total Courses</span>
                                    <label>22</label>
                                </div>
                                <div className="student course">
                                    <span>Students</span>
                                    <label>5,230</label>
                                </div>
                                <div className="review-course">
                                    <span>Review</span>
                                    <div className="review-course-inner d-flex">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                        <p>4.9 (540)</p>
                                    </div>
                                </div>
                                <div className="course-details-action">
                                    <div className="course-follow">
                                        <span className="d-block">Follow</span>
                                        <div className="member-social">
                                            <ul>
                                                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-bio-text pt-45 pb-20">
                                <h3>Biography</h3>
                                <p>David Allberto is a Software Developer and Instructor having enjoyed his courses to date. He
                                    is the creator of Codexpand, a place of learning and growth to help people move into and be
                                    successful within the Helping Industry. One of Graham's key driving forces is to remove the
                                    barriers to the Helping Industry by producing high quality, accredited courses at affordable
                                    prices.</p>
                            </div>
                            <InstructorSkill />
                            <InstructorExperience />
                            <InstructorCourse />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;