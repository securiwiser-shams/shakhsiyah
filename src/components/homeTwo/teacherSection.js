import { Link } from 'gatsby';
import React from 'react';

const TeacherSection = () => {
    return (
        <section className="teacher-area position-relative pt-120 fix">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-img position-relative">
                            <img className="teacher-main-img" src="/assets/img/teacher/teacher.png" alt="img not found" />
                            <img className="teacher-shape" src="/assets/img/teacher/teacher-shape-01.png"
                                alt="img not found" />
                            <img className="teacher-shape-02" src="/assets/img/teacher/teacher-shape-02.png"
                                alt="img not found" />
                            <img className="teacher-shape-03" src="/assets/img/teacher/teacher-shape-03.png"
                                alt="img not found" />
                            <img className="teacher-shape-04" src="/assets/img/teacher/teacher-shape-04.png"
                                alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-content mr-20">
                            <div className="section-title mb-30">
                                <h2>Become an Instructor
                                    And <span className="down-mark-line-2">Teach</span> Online</h2>
                            </div>
                            <p>Helping employees gain skills and providing career development often take a back seat to
                                business priorities but workplace.</p>
                            <Link to="/instructor" className="edu-btn btn-transparent mt-25">Join us now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;