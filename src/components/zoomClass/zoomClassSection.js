import { Link } from 'gatsby';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ZoomClassSection = () => {
    const [value, onChange] = useState(new Date());
    return (
        <section className="zoom-class-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="zoom-class-main-wrapper mb-30">
                            <div className="zoom-class-thumb w-img">
                                <img src="/assets/img/zoom/zoom-live-01.jpg" alt="zoom-thumb" />
                            </div>
                            <div className="zoom-class-item">
                                <div className="zooom-class-tittle">
                                    <h3><Link to="/zoom-class-details">Startup Business Management Live Class</Link></h3>
                                </div>
                                <div className="xzoom-class-detalis">
                                    <div className="class-list-date d-flex align-items-center">
                                        <i className="flaticon-calendar"></i><span>Date : 10 Jan 2022</span>
                                    </div>
                                    <div className="class-list-length d-flex align-items-center">
                                        <i className="flaticon-video-marketing"></i><span>Length : 3h 20m</span>
                                    </div>
                                    <div className="class-list-time d-flex align-items-center">
                                        <i className="flaticon-wall-clock"></i><span>Schedule : 10 AM - 12 PM</span>
                                    </div>
                                    <div className="class-metting">
                                        <span>Meeting ID:<a href="#">587dre42op02486d302</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-class-main-wrapper mb-30">
                            <div className="zoom-class-thumb w-img">
                                <img src="/assets/img/zoom/zoom-live-02.jpg" alt="zoom-thumb" />
                            </div>
                            <div className="zoom-class-item">
                                <div className="zooom-class-tittle">
                                    <h3><Link to="/zoom-class-details">WordPress Theme Development Live Class</Link></h3>
                                </div>
                                <div className="xzoom-class-detalis">
                                    <div className="class-list-date d-flex align-items-center">
                                        <i className="flaticon-calendar"></i><span>Date : 11 Jan 2022</span>
                                    </div>
                                    <div className="class-list-length d-flex align-items-center">
                                        <i className="flaticon-video-marketing"></i><span>Length : 3h 20m</span>
                                    </div>
                                    <div className="class-list-time d-flex align-items-center">
                                        <i className="flaticon-wall-clock"></i><span>Schedule : 9 AM - 12:45 PM</span>
                                    </div>
                                    <div className="class-metting">
                                        <span>Meeting ID:<a href="#">587dre42op02486uhg02</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-class-main-wrapper mb-30">
                            <div className="zoom-class-thumb w-img">
                                <img src="/assets/img/zoom/zoom-live-03.jpg" alt="zoom-thumb" />
                            </div>
                            <div className="zoom-class-item">
                                <div className="zooom-class-tittle">
                                    <h3><Link to="/zoom-class-details">Write Better Emails: Tactics for Smarter Team Live Classs</Link></h3>
                                </div>
                                <div className="xzoom-class-detalis">
                                    <div className="class-list-date d-flex align-items-center">
                                        <i className="flaticon-calendar"></i><span>Date : 11 Jan 2022</span>
                                    </div>
                                    <div className="class-list-length d-flex align-items-center">
                                        <i className="flaticon-video-marketing"></i><span>Length : 2h 20m</span>
                                    </div>
                                    <div className="class-list-time d-flex align-items-center">
                                        <i className="flaticon-wall-clock"></i><span>Schedule : 11 AM - 12:45 PM</span>
                                    </div>
                                    <div className="class-metting">
                                        <span>Meeting ID:<a href="#">587dre254op02486d302</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-class-main-wrapper mb-30">
                            <div className="zoom-class-thumb w-img">
                                <img src="/assets/img/zoom/zoom-live-04.jpg" alt="zoom-thumb" />
                            </div>
                            <div className="zoom-class-item">
                                <div className="zooom-class-tittle">
                                    <h3><Link to="/zoom-class-details">Self Entrepreneurship Essentials Live Class</Link></h3>
                                </div>
                                <div className="xzoom-class-detalis">
                                    <div className="class-list-date d-flex align-items-center">
                                        <i className="flaticon-calendar"></i><span>Date : 20 Jan 2022</span>
                                    </div>
                                    <div className="class-list-length d-flex align-items-center">
                                        <i className="flaticon-video-marketing"></i><span>Length : 1h 20m</span>
                                    </div>
                                    <div className="class-list-time d-flex align-items-center">
                                        <i className="flaticon-wall-clock"></i><span>Schedule : 8 AM - 10:45 PM</span>
                                    </div>
                                    <div className="class-metting">
                                        <span>Meeting ID:<a href="#">587dre42op01486d302</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-class-main-wrapper mb-30">
                            <div className="zoom-class-thumb w-img">
                                <img src="/assets/img/zoom/zoom-live-05.jpg" alt="zoom-thumb" />
                            </div>
                            <div className="zoom-class-item">
                                <div className="zooom-class-tittle">
                                    <h3><Link to="/zoom-class-details">Python and Django Full Stack Bootcamp Live Class</Link></h3>
                                </div>
                                <div className="xzoom-class-detalis">
                                    <div className="class-list-date d-flex align-items-center">
                                        <i className="flaticon-calendar"></i><span>Date : 15 Jan 2022</span>
                                    </div>
                                    <div className="class-list-length d-flex align-items-center">
                                        <i className="flaticon-video-marketing"></i><span>Length : 1h 20m</span>
                                    </div>
                                    <div className="class-list-time d-flex align-items-center">
                                        <i className="flaticon-wall-clock"></i><span>Schedule : 11 AM - 12:45 PM</span>
                                    </div>
                                    <div className="class-metting">
                                        <span>Meeting ID:<a href="#">587dre42oe02486d302</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8">
                        <div className="sidebar-widget-wrapper">
                            <div className="sidebar-widget mb-30">
                                <div className="sidebar-widget-inner">
                                    <div className="sidebar-widget-head mb-25">
                                        <h3>Find Class</h3>
                                    </div>
                                    <div className="sidebar-content">
                                        <div className="myCalendar edu-calender">
                                            <Calendar onChange={onChange} defaultValue={value} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZoomClassSection;