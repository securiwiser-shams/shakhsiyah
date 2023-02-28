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
                                <h2>Shakhsiyah (Personalised <span className="down-mark-line">Character</span> Education)</h2>
                            </div>
                            <div className="sitdent-choose-content">
                                <p>The principle of developing each child’s unique personal character through dynamic 
                                    parent-teacher-learner relationships generated through human-scale personalised Shakhsiyah Education.</p>
                            </div>
                            <div className="student-choose-list">
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>This Islamic character will have high aspirations because of its 
                                    faith and certainty and belief in the promise of Allah, and because it realises the honour attained by being 
                                    a Muslim and a follower of the Prophets. </li>
                                    <li><i className="fas fa-check-circle"></i>Achieving good character is done by educating people and teaching them 
                                    sound beliefs and how to purify their souls in word and deed, on the basis of Islamic principles and the 
                                    teachings of the Qur’an and Sunnah.</li>
                                    <li><i className="fas fa-check-circle"></i>The Islamic character is one that is sound and upright; in terms of 
                                    its principles, fundamentals and etiquette it is based on submission and adherence to the teachings of Islam, 
                                    in obedience to Allah and His Messenger.</li>
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