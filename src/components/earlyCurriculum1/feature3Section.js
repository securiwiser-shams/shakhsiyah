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
                                <h2><span className="down-mark-line">Qudwah</span> (Teaching by Example)</h2>
                            </div>
                            <div className="sitdent-choose-content">
                                <p>The principle of teachers leading by example by engaging in educational research and 
                                    professional development in a constant quest for ‘ilm, ihsan and taqwa (knowledge, excellence 
                                    and awareness of Allah). </p>
                            </div>
                            <div className="student-choose-list">
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>One of the methods applied in Islamic education is by Qudwah
                                     because is a basic method of educating and a child learns by sees and imitates. </li>
                                    <li><i className="fas fa-check-circle"></i>The method of education using Qudwah taught by the 
                                    Prophet in Surah al-ahzab 21 includes courage, courage to go forward, patience and struggle.</li>
                                    <li><i className="fas fa-check-circle"></i>It is hoped that Shakhsiyah teachers educate children 
                                    with the qudwah al-hasanah method, so that they can become the best examples in words, deeds, and under any circumstances. </li>
                                </ul>
                            </div>
                            <div className="student-btn">
                                <Link to="/mission-statement" className="edu-sec-btn">More about us</Link>
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
                                <img src="/assets/img/student-choose/student4.svg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChooseSection;