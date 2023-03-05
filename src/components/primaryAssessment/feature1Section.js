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
                                <h2>Objectives of Shakhsiyah Schools <span className="down-mark-line">Assessment</span> Policy</h2>
                            </div>
                            <div className="student-choose-list">
                                <ul>
                                    <li><i className="fas fa-check-circle"></i> Observe children as they act and interact in their play, everyday activities and 
                                    planned activities, and learn from parents about what the child does at home (observation). </li>
                                    <li><i className="fas fa-check-circle"></i> To recognise achievement in all aspects of the child’s life across our holistic curricula </li>
                                    <li><i className="fas fa-check-circle"></i> To raise achievement for all children by using assessment to build on the child’s strengths and 
                                    to recognise individual needs </li>
                                    <li><i className="fas fa-check-circle"></i> To ensure that there is a common agreement about the purposes and methods of planning and 
                                    assessment, and about how and what is to be recorded </li>
                                    <li><i className="fas fa-check-circle"></i> To ensure assessment is carried out continuously to inform and shape planning and teaching </li>
                                    <li><i className="fas fa-check-circle"></i> To inform planning through consistent marking and provide feedback so that children’s work is 
                                    valued and children know what the next steps are to make progress </li>
                                    <li><i className="fas fa-check-circle"></i> To work collaboratively with for parents/ carers, children and others </li>
                                    <li><i className="fas fa-check-circle"></i> To provide a framework within which the school can evaluate curriculum delivery and children’s progress </li>
                                    <li><i className="fas fa-check-circle"></i> To aid review of resources for equipment and the planning of INSET/CPD </li>
                                </ul>
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
                                <img src="/assets/img/student-choose/assessment-student1.svg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChooseSection;