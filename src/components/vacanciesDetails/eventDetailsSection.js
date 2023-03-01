import { Link } from 'gatsby';
import React from 'react';
import EventDetailsMap from './eventDetailsMap';
import EventDetailsSidebar from './eventDetailsSidebar';

const EventDetailsSection = () => {
    return (
        <div className="event-detalis-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="event-main-wrapper mb-30">
                            <div className="course-detelis-meta mb-30">
                            </div>
                            <div className="event-details-thumb w-img mb-20">
                            </div>
                            <div className="event-contact-info">
                                <h3>Job Description: Operations Manager</h3><br/>
                            </div>
                            <div className="event-introduction">
                                <div className="introduction-info mb-40">
                                    <h4>Terms of Employment:</h4>
                                    <p><b>Position:</b> Operations Manager <br/>
                                    <b>Reporting to:</b> London and Slough (Will be based in either and travel to other site as required)<br/>
                                    <b>Location:</b> Executive Head Teacher (EHT)<br/>
                                    <b>Hours:</b> Full-time<br/>
                                    <b>Start date:</b> August 2022<br/>
                                    <b>Qualifications:</b> Qualifications: minimum degree in business, finance, management, HR or similar subject 
                                    Subject to DBS checks and references<br/>
                                    <b>Hours:</b> 8.00am – 4.00pm<br/>
                                    <b>Probation period:</b> 2 years<br/></p>
                                    <h4>Main purpose of job:</h4>
                                    <p>To embed the Principles of Shakhsiyah Education into the organisation and actively model and promote the 
                                        values and ethos of ISF. <br/><br/>
                                        To support EHT with financial management. To be responsible for leadership and oversight of personnel 
                                        management, site and premises management, IT, communications, marketing, fundraising and general administration. 
                                        training and development of non-teaching support staff; recruiting, inducting, line managing and mentoring staff 
                                        as required to support ongoing professional development. Review, develop and streamline effective systems and 
                                        procedures and provide relevant training to staff. <br/><br/>
                                        As a member of the Management team, be responsible for: creating and delivering a shared school strategic vision; 
                                        building capacity across the workforce; improving organisation structures and functions so the organisation and schools 
                                        remains fit for purpose; building and sustaining effective relationships and communications strategies; working with 
                                        the wider community.. To generate and co-ordinate new income streams which are supportive of the ethos of the school.  
                                    </p>
                                </div>
                            </div>
                            <h4>Child welfare:</h4>
                            <p>The health, safety and well being of every child are of paramount concern. Every member of ISF staff is You will be personally 
                                responsible for promoting and safeguarding the welfare of all children.</p>
                                <h4>Main duties:</h4>
                            <p>Finance and Accounts</p>
                            <div className="event-point-info">
                                <ul>
                                    <li>• To implement the financial decisions of the EHT and Governing Body.</li>
                                    <li>• To line manage the Accounts Officer and liaise with ISF’s Accountants and Auditors.</li>
                                </ul>
                            </div><br/>   
                            <h3>Shakhsiyah School, London - Map</h3>   
                            <EventDetailsMap /> <br/>
                            <h3>Shakhsiyah School, Slough - Map</h3>   
                            <EventDetailsMap />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-8">
                        <EventDetailsSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsSection;