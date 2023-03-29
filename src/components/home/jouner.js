import React, { useState } from "react";
import RangoNumerico from './range';
import arrow_gold from '../../../static/assets/img/arrow/arrow_gold.svg'



const JounerSection = () => {
    const fechaActual = new Date();
    const yearActual = fechaActual.getFullYear();
    const yearMenos7 = yearActual - 17;
    const [isDisabled, setIsDisabled] = useState(false);
  
    function handleDisableClick() {
      setIsDisabled(!isDisabled);
    }
    return (
        <>
            <div className='jouney_container'>
                <div className='jouney_content'>
                    <h1>Start Your Journey</h1>
                    <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                    <form>
                        <RangoNumerico rango={[1, 31]} date="DD" />
                        <RangoNumerico rango={[1, 12]} date="MM" />
                        <RangoNumerico rango={[yearActual, yearMenos7]} date="YY" />
                        <div className='button_arrow' onClick={handleDisableClick}>
                            <img src={arrow_gold} />
                        </div>
                    </form>
                </div>
            </div>
            <div className={`adm-async-form-two ${isDisabled ? "disable" : ""}`} >
                <div className='adm-results-slide-out'>
                    <div className="close-adm-results" onClick={handleDisableClick}></div>
                    <div className="adm-results-details">Your daughter can be considered for entry at any of the points below.</div>
                    <div className='adm-results-container'>
                        <div className="adm-results-headers clearfix changeBgLeft"><div className="adm-result-entry active">Preliminary (Year 0)</div><div className="adm-result-entry">Transition (Year 1)</div><div className="adm-result-entry">IB (Year 2)</div><div className="adm-result-entry">IA (Year 3)</div><div className="adm-result-entry">IIB (Year 4)</div><div className="adm-result-entry">IIA (Year 5)</div><div className="adm-result-entry">III Form (Year 6)</div><div className="adm-result-entry">Remove (Year 7)</div><div className="adm-result-entry">Lower IV (Year 8)</div><div className="adm-result-entry">Form IV (Year 9)</div><div className="adm-result-entry">V Form (Year 10)</div><div className="adm-result-entry">VI Form (Year 12)</div></div>
                        <div className="adm-result-panel showFirst"><div className="adm-result-entry-date">Your daughter would join us in <span>September  2027</span></div><ol className="adm-steps-list"><li className="adm-step line"><div className="adm-step-title">Arrange a Visit</div><div className="adm-step-text"><div className="secondLvlCss"><p>Join us at one of our virtual At-home Receptions, where you will discover more about Queen’s Gate’s vibrant, warm atmosphere. There will be a chance to meet our Principal and the Director of the Junior School alongside our Head Girl and other members of staff, who will answer your questions.</p>

                            <p><a className="downloadBtn" href="/admissions/visit-us/at-home-receptions" target="_self">Book an At-home Reception</a></p>
                        </div></div></li><li className="adm-step line"><div className="adm-step-title">Complete a Registration Form</div><div className="adm-step-text"><div className="secondLvlCss"><p>Prospective parents for 4+ entry are encouraged to register at least a year in advance so that we are able to contact them about dates and procedures for their year of entry, but we do accept applications up until the November prior to entry.&nbsp;</p>

                            <p><a href="/userfiles/qgsmvc/Documents/02-Admissions/Registration%20Form_May%202021.pdf">Register your Daughter</a></p>

                            <p>Registration forms should be returned to Mrs Roberts-Beresford at <a href="mailto:registrar@queensgate.org.uk">registrar@queensgate.org.uk</a>.</p>
                        </div></div></li><li className="adm-step line"><div className="adm-step-title">Try a 4+ Taster Afternoon</div><div className="adm-step-text"><div className="secondLvlCss"><p><em>During Autumn Term 2020, we are unable to run these events. </em></p>

                            <p>Please refer to our At-home Receptions for further information on visiting Queen's Gate.</p>
                        </div></div></li><li className="adm-step"><div className="adm-step-title">Meet the Director and the Teachers</div><div className="adm-step-text"><div className="secondLvlCss"><p>For 4+ entry, parents are invited to meet with the Director of the Junior School to discuss their application.&nbsp; Pupils will then visit the classroom to spend time with our teachers.&nbsp;</p>
                        </div>
                        </div>
                            </li>
                        </ol>
                            <div className="adm-results-btns clearfix">
                                <a href="/" className="adm-print-btn">
                                    <span>Print Steps</span>
                                </a>
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
                </div>
            </div>
        </>
    );
};

export default JounerSection;