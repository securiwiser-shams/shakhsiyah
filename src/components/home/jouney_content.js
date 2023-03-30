import React, { useState } from "react";

function Jouney_content(props) {
    return (
        <>
        <div className="adm-results-details">Your childs can be considered for entry at any of the points below.</div>
        <div className='adm-results-container'>
            <div className="adm-results-headers clearfix changeBgLeft">
                <div className="adm-result-entry active">FS1 (Nursery)</div><div className="adm-result-entry">FS2(Reception)</div><div className="adm-result-entry">Year 1</div><div className="adm-result-entry">Year 2</div><div className="adm-result-entry">Year 3</div><div className="adm-result-entry">Year 4</div><div className="adm-result-entry">Year 5</div><div className="adm-result-entry">Year 6</div><div className="adm-result-entry">Year 7</div><div className="adm-result-entry">Year 8</div></div>
            <div className="adm-result-panel showFirst">
                <div className="adm-result-entry-date">Your child would join us in <span>September  2027</span>
                </div>
                <ol className="adm-steps-list">
                    <li className="adm-step line">
                        <div className="adm-step-title">Expression Of Interest</div>
                        <div className="adm-step-text">
                            <div className="secondLvlCss">
                                <p>Those who wish to apply for a place outside of the 4+, 11+ and 6+ entry</p>
                                <p><a href="/userfiles/qgsmvc/Documents/02-Admissions/Registration%20Form_May%202021.pdf">registrar@shakhsiyahschools.uk</a> to discuss availability.</p>
                            </div>
                        </div>
                    </li>
                    <li className="adm-step line">
                        <div className="adm-step-title">Arrange A Visit</div>
                        <div className="adm-step-text">
                            <div className="secondLvlCss">
                                <p>We encourage prospective pupils and parents to book a private visit in order to learn more about the warmth and quality of life at Shakhsiyah. You can book a private visit by completing the form below.</p>
                                <p>
                                    <a className="downloadBtn" href="/admissions/visit-us/at-home-receptions" target="_self">BOOK A PRIVATE VISIT</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="adm-step line">
                        <div className="adm-step-title">Complete A Registration Form</div>
                        <div className="adm-step-text">
                            <div className="secondLvlCss">
                                <p>
                                    <a href="/userfiles/qgsmvc/Documents/02-Admissions/Registration%20Form_May%202021.pdf">Register your Child</a>
                                </p>
                                <p>Registration forms should be returned to reception at</p>
                                <p>
                                    <a href="/userfiles/qgsmvc/Documents/02-Admissions/Registration%20Form_May%202021.pdf">registrar@shakhsiyahschools.uk</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="adm-step">
                        <div className="adm-step-title">Assessment</div>
                        <div className="adm-step-text">
                            <div className="secondLvlCss">
                                <p>Once prospective parents and pupils have visited Shakhsiyah and submitted a registration form, the applicant will need to sit entrance papers in Maths and English. We will make arrangements regarding the time and date of the assessments on an individual basis.</p>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="adm-results-btns clearfix">
                    <a className="adm-email-btn">
                        <span>Email Steps</span>
                    </a>
                </div>
                <div className="sendAdmEmailToDivider">
                </div>
                <div className="sendAdmEmailTo">
                    <input tabIndex="2" className="admEmailTo" defaultValue="Enter your email" />
                    <div className="aef-sendButton">GO</div>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default Jouney_content;