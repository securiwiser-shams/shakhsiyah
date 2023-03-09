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
                                <h2><span className="down-mark-line"> Minhaj al-Dirasi</span> (Shakhsiyah Holistic Curriculum)</h2>
                            </div>
                            <div className="sitdent-choose-content">
                                <p>The principle of a holistic, integrated, thematic curriculum with the Halaqah curriculum at its core.</p>
                            </div>
                            <div className="student-choose-list">
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>Shakhsiyah Schools endeavour to nurture the natural disposition (fitrah) of 
                                    each individual child in order to develop his/her personal character (shakhsiyah) into a well rounded, confident Muslim 
                                    who has sincerity in intention and steadfastness in action. </li>
                                    <li><i className="fas fa-check-circle"></i>We work in partnership with parents to develop each child’s personal character 
                                    enabling them to achieve their full potential in all aspects of life including academic success.</li>
                                    <li><i className="fas fa-check-circle"></i>Shakhsiyah Schools aim to develop leaders who play an active part in their diverse 
                                    local and global communities, serving both the Muslim community and humanity.</li>
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
                                <img src="/assets/img/student-choose/student7.svg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChooseSection;