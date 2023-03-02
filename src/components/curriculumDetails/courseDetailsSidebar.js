import { Link } from 'gatsby';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const CourseDetailsSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <div className="course-video-widget">
            <div className="course-widget-wrapper mb-30">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='_fTGkFSJvNQ' onClose={() => { openVideoModal(); }} />
                <div className="course-video-thumb w-img">
                    <img src="/assets/img/course/video-image.png" alt="img not found" />
                    <div className="sidber-video-btn">
                        <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                    </div>
                </div>
                <div className="course-video-price">
                    <span>Halaqah</span>
                </div>
                <div className="course-video-body">
                    <ul>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-filter"></i>
                                <span>Level</span>
                            </div>
                            <div className="video-corse-info">
                                <span>Early Years</span>
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
                                <span>Dawah</span>
                            </div>
                        </li>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-global"></i>
                                <span>Language</span>
                            </div>
                            <div className="video-corse-info">
                                <span>English & Arabic</span>
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
                <div className="video-wishlist">
                    <Link to="/admissions" className="video-cart-btn"><i className="fal fa-shopping-cart"></i>Apply</Link>
                </div>
                    </div>
                </div>
    );
};

export default CourseDetailsSidebar;