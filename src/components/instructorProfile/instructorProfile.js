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
                            <img className="mb-20" class="circular-img" src="/assets/img/course/farahahmed.png" alt="instructors-img" />
                            <div className="course-details-tittle mb-30">
                                <h3>Dr Farah Ahmed</h3>
                                <span className="d-block mb-15">Chair of Trustees and Director of Education and Research</span>
                                <ul>
                                    <li><a href="mailto:info@example.com" target="_blank"><i className="fal fa-envelope"></i> mail@isfnet.org.uk</a></li>
                                    <li><a href="tel:987547587587" target="_blank"><i className="far fa-phone-alt"></i> 0208 802 8651</a></li>
                                    <li><a href="#" target="_blank"><i className="far fa-map-marker-alt"></i> London, N15 5RG</a></li>
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
                                <p>Farah Ahmed is Leverhulme Early Career Research Fellow at the Faculty of Education, University of Cambridge. She co-convenes the Intercultural 
                                    and Conflict-transformation Dialogue’ strand of the Cambridge Educational Dialogue Research group. Her current project is: Rethinking Islamic 
                                    education for British Muslim children: a philosophical investigation of dialogue in Islamic educational theory and an empirical study trialling 
                                    dialogic pedagogy in UK madrasahs (supplementary schools). Farah has published widely on Islamic education and has worked for nineteen years on 
                                    research driven curriculum development and teacher education for Muslim teachers.</p>
                            </div>
                            <InstructorExperience />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;