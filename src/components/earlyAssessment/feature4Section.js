import { Link } from 'gatsby';
import React from 'react';

const StudentChooseSection = ({choose_area_class}) => {
    return (
        <div className={`student-choose-area fix ${choose_area_class ? choose_area_class : 'pt-10 pb-110'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="student-wrapper">
                            <div className="section-title mb-30">
                                <h2><span className="down-mark-line">Development</span></h2>
                            </div>
                            <div className="sitdent-choose-content">
                                <p>Consider ways to support the child to strengthen and deepen their current learning and development, reflecting on guidance. </p>
                                <p>Where appropriate, use the development statements to identify possible areas in which to challenge and extend the child’s current learning and development (planning). </p>

                            </div>
                            <div className="student-choose-list">
                               </div>
                            <div className="student-btn">
                                <Link to="/principles" className="edu-sec-btn">More about our principles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <div className="student-wrapper position-relative">
                            <div className="shap-01"></div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="student-choose-wrapper position-relative">
                            <div className="shap-02">
                            </div>
                            <div className="shap-03">
                                <img src="/assets/img/shape/student-shape-03.png" alt="img not found" />
                            </div>
                            <div className="shap-04">
                                <img src="/assets/img/shape/student-shape-04.png" alt="img not found" />
                            </div>
                            <div className="shap-05">
                                <img src="/assets/img/shape/student-shape-05.png" alt="img not found" />
                            </div>
                            <div className="shap-06">
                                <img src="/assets/img/shape/student-shape-06.png" alt="img not found" />
                            </div>
                            <div className="shap-07">
                                <img src="/assets/img/shape/student-shape-07.png" alt="img not found" />
                            </div>
                            <div className="student-choose-thumb">
                                <img src="/assets/img/student-choose/assessment-student4.svg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChooseSection;