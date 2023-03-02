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
                            <h2><span className="down-mark-line">Halaqah</span></h2>
                            </div>
                            <div className="sitdent-choose-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="student-choose-list">
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li><i className="fas fa-check-circle"></i>The most sacred acts are spoiled because of the mixed intentions behind them, while 
                                    the simplest acts gain in value on account of the purely good intentions behind them.</li>
                                    <li><i className="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                </ul>
                            </div>
                            <div className="student-btn">
                                <Link to="/mission-statement" className="edu-sec-btn">More about Halaqah</Link>
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
                                <img src="/assets/img/student-choose/student3.svg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChooseSection;