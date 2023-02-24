import { Link } from 'gatsby';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const WebinarDetailsSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <section className="course-detalis-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8">
                        <div className="course-detalis-wrapper mb-30">
                            <div className="course-webinar-video">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                <div className="course-video-thumb w-img">
                                    <img src="/assets/img/features/features1.jpg" alt="img not found" />
                                    <div className="sidber-video-btn">
                                        <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="course-heading mb-20">
                                <h2>WordPress Development Course for Plugins</h2>
                            </div>
                            <div className="course-description pb-30">
                                <p>This webinar has been designed by two professional Data Scientists so that we can
                                    share our knowledge and help you learn complex theory, algorithms, and coding
                                    libraries in a simple way. We will walk you step-by-step into the World of Machine
                                    Learning. With every tutorial, you will develop new skills and improve your
                                    understanding of this challenging yet lucrative sub-field of Data Science.</p>
                            </div>
                            <div className="course-learn-wrapper mb-40">
                                <div className="course-learn">
                                    <div className="course-leranm-tittle">
                                        <h4 className="mb-15">What you'll learn</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="course-leran-text f-left">
                                                <ul>
                                                    <li>Handle advanced techniques like Dimensionality Reduction</li>
                                                    <li>Handle specific topics like Reinforcement Learning best</li>
                                                    <li>Know which Machine Learning model to choose for each type of
                                                        problem</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="course-leran-text">
                                                <ul>
                                                    <li>Reinforcement learning upper
                                                        confidence bound Thompson sampling</li>
                                                    <li>Model Selection & Boosting fold cross
                                                        validation parameter</li>
                                                    <li>Use Machine Learning for personal
                                                        purpose of machine</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="webinar-speaker mb-10">
                                <h3 className="mb-25">Speakers</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="member-main-wrapper mb-30">
                                            <div className="member-body text-center">
                                                <div className="member-item">
                                                    <div className="member-thumb">
                                                        <Link to="/instructor-profile"><img src="/assets/img/member/member-img-01.png" alt="member-img" /></Link>
                                                    </div>
                                                    <div className="member-content">
                                                        <h4><Link to="/instructor-profile">Charls David</Link></h4>
                                                        <span>Data Scientist, Codexpand</span>
                                                    </div>
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
                                            <div className="member-meta">
                                                <div className="member-reating">
                                                    <i className="fas fa-star"></i>
                                                    <span>4.8 (54k+)</span>
                                                </div>
                                                <div className="member-course">
                                                    <i className="flaticon-computer"></i><Link to="/course"><span>05 Courses</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="member-main-wrapper mb-30">
                                            <div className="member-body text-center">
                                                <div className="member-item">
                                                    <div className="member-thumb">
                                                        <Link to="/instructor-profile"><img src="/assets/img/member/member-img-02.png" alt="member-img" /></Link>
                                                    </div>
                                                    <div className="member-content">
                                                        <h4><Link to="/instructor-profile">Nicholson Ocak</Link></h4>
                                                        <span>UI/UX Researcher </span>
                                                    </div>
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
                                            <div className="member-meta">
                                                <div className="member-reating">
                                                    <i className="fas fa-star"></i>
                                                    <span>4.8 (54k+)</span>
                                                </div>
                                                <div className="member-course">
                                                    <i className="flaticon-computer"></i><Link to="/course"><span>04 Courses</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="webinar-registration">
                                <h3 className="mb-25">Free Registration</h3>
                                <div className="webinar-registration-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="contact-from-input mb-20">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-from-input mb-20">
                                                    <input type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-from-input mb-20">
                                                    <input type="text" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-select">
                                                    <select className="mb-20">
                                                        <option defaultValue="Subject">Course</option>
                                                        <option defaultValue="Subject">Webinar</option>
                                                        <option defaultValue="Subject">Payment</option>
                                                        <option defaultValue="Subject">Information</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-from-input mb-20">
                                                    <textarea placeholder="Message" name="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="colxl-2 ">
                                                <div className="cont-btn mb-20">
                                                    <button type="submit" className="cont-btn">Registration</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                        <div className="course-video-widget">
                            <div className="course-widget-wrapper mb-30">
                                <div className="course-video-thumb w-img">
                                    <img src="/assets/img/course/course-video.png" alt="img not found" />
                                </div>
                                <div className="course-video-price">
                                    <span>Free</span>
                                </div>
                                <div className="course-video-body">
                                    <ul>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-filter"></i>
                                                <span>Level</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>Beginners</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-computer"></i>
                                                <span>Lectures</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>8 Lectures</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-clock"></i>
                                                <span>Duration</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>1h 30m 12s</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-menu-2"></i>
                                                <span>Category</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>Data Science</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-global"></i>
                                                <span>Laguage</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>English</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-bookmark-white"></i>
                                                <span>Access</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>Full Lifetime</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-award"></i>
                                                <span>Certificate</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>Yes </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-vide-icon">
                                                <i className="flaticon-list"></i>
                                                <span>Recourse</span>
                                            </div>
                                            <div className="video-corse-info">
                                                <span>5 Downloadable Files </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebinarDetailsSection;