import React from 'react';

const InstructorSkill = () => {
    return (
        <div className="course-bio-text pb-20">
            <h3>Skill</h3>
            <div className="student-reating-bar">
                <div className="reating-bar-wrapper">
                    <div className="rating-row mb-10">
                        <div className="instructor-rating-star">
                            <span>HTML5</span>
                        </div>
                        <div className="progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{ width: '98%' }}></div>
                            </div>
                        </div>
                        <div className="progress-tittle">
                            <span>98%</span>
                        </div>
                    </div>
                    <div className="rating-row mb-10">
                        <div className="instructor-rating-star">
                            <span>CSS3</span>
                        </div>
                        <div className="progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="progress-tittle">
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="rating-row mb-10">
                        <div className="instructor-rating-star">
                            <span>Javascript</span>
                        </div>
                        <div className="progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="progress-tittle">
                            <span>75%</span>
                        </div>
                    </div>
                    <div className="rating-row mb-10">
                        <div className="instructor-rating-star">
                            <span>React</span>
                        </div>
                        <div className="progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="progress-tittle">
                            <span>70%</span>
                        </div>
                    </div>
                    <div className="rating-row mb-10">
                        <div className="instructor-rating-star">
                            <span>Mongodb</span>
                        </div>
                        <div className="progress">
                            <div className="progress">
                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="progress-tittle">
                            <span>65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorSkill;