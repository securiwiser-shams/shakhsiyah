import { Link } from 'gatsby';
import React from 'react';
import TestimonialSliderThree from '../elements/slider/testimonialSliderThree';

const EventSection = () => {
    return (
        <div className="event-area pt-110 pb-90">
            <div className="event-shape-wrapper position-relative">
                <div className="event-shape">
                    <img src="/assets/img/shape/feedback-img.png" alt="img not found" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="section-title mb-45">
                            <h2>Current <span className="down-mark-line-2">Events</span></h2>
                        </div>
                        <div className="current-event-box mb-15">
                            <div className="current-event-date d-flex position-relative">
                                <div className="event-date-wrapper">
                                    <span className="event-date">29</span>
                                    <span className="event-month">Jan 21</span>
                                </div>
                                <div className="event-tour">
                                    <div className="event-box-text">
                                        <h3><Link to="/event-details">Education Autumn Tour</Link></h3>
                                        <span><i className="fal fa-clock"></i>12:30 AM</span>
                                        <span><i className="flaticon-place"></i>Zeoyan Stadium, London</span>
                                    </div>
                                    <Link to="/event-details" className="event-arrow"><i className="fal fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="current-event-box mb-15">
                            <div className="current-event-date d-flex position-relative">
                                <div className="event-date-wrapper">
                                    <span className="event-date">20</span>
                                    <span className="event-month">Mar 21</span>
                                </div>
                                <div className="event-tour">
                                    <div className="event-box-text">
                                        <h3><Link to="/event-details">Education Summer Tour</Link></h3>
                                        <span><i className="fal fa-clock"></i>10:30 AM</span>
                                        <span><i className="flaticon-place"></i>Zeoyan Stadium, London</span>
                                    </div>
                                    <Link to="/event-details" className="event-arrow"><i className="fal fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="current-event-box mb-30">
                            <div className="current-event-date d-flex position-relative">
                                <div className="event-date-wrapper">
                                    <span className="event-date">25</span>
                                    <span className="event-month">April 21</span>
                                </div>
                                <div className="event-tour">
                                    <div className="event-box-text">
                                        <h3><Link to="/event-details">Education Spring Tour</Link></h3>
                                        <span><i className="fal fa-clock"></i>09:30 AM</span>
                                        <span><i className="flaticon-place"></i>Zeoyan Stadium, London</span>
                                    </div>
                                    <Link to="/event-details" className="event-arrow"><i className="fal fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                        <TestimonialSliderThree />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;