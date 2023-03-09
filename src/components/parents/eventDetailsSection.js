import { Link } from 'gatsby';
import React from 'react';
import EventDetailsMap from './eventDetailsMap';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';
const EventDetailsSection = () => {
    return (
        <div className="event-detalis-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="event-main-wrapper mb-30">
                            <div className="course-detelis-meta mb-30">
                                <div className="course-meta-wrapper border-line-meta">
                                    <div className="course-meta-img">
                                    </div>
                                </div>
                            </div>
                            <div className="event-details-thumb w-img mb-20">
                            </div>
                            <div className="event-contact-info">
                                <h3>SCHOOL CONTACT DETAILS</h3>
                            </div>
                            <div className="event-introduction">
                                <div className="introduction-info mb-40">
                                    <h4>Shakhsiyah School London:</h4>
                                    <p>Address: 1st Floor, 277 St Ann's Rd, London, N15 5RG <br/>
                                    Phone: 02088028651 <br/>
                                    Email: mail@isfnet.org.uk
                                    </p>
                                    <h4>Shakhsiyah School Slough:</h4>
                                    <p>Address: Cippenham Lodge, Cippenham Ln, Slough SL1 5AN <br/>
                                    Phone: 01753 518000 <br/>
                                    Email: mail-slough@isfnet.org.uk  
                                    </p>
                                    <h3>INSPECTION REPORTS</h3>
                                    <p>Full reports from our recent inspections can be accessed using the links below:</p>
                                    <h4>Slough Reports</h4>
                                    <underline><a href="https://drive.google.com/file/d/17HcmwFfmGhSw7W52IBfb0PAKWPbzCtsw/view?usp=sharing" target="_blank">Slough RCI Report - June 2022</a></underline><br/><br/>
                                    <underline><a href="https://drive.google.com/file/d/1pQMjqrpxDvNr3UbySW-EU8WKArfuXxFV/view?usp=sharing" target="_blank">Slough Full Inspection - October 2017</a></underline><br/><br/>
                                    <underline><a href="https://drive.google.com/file/d/1B5JKTiYKrrAXxAZ5zHXaMOI_u_FeXZN6/view?usp=sharing" target="_blank">Slough Emergency Inspection - December 2020</a></underline><br/><br/>
                                <h4>London Reports</h4>
                                <underline><a href="https://drive.google.com/file/d/1P8wrEg5fecbV8r3zPKP-vxyKRAry4JTh/view?usp=share_link" target="_blank">London RCI Report - November 2022</a></underline><br/><br/>
                                <underline><a href="https://drive.google.com/file/d/1YMvx-mv15nHvHacd37fie5z-3SEtqzt5/view?usp=sharing" target="_blank">London Full Inspection - June 2018</a></underline><br/><br/>
                                <underline><a href="https://drive.google.com/file/d/1ctnbWMhG__f8khGCCIu62F-y1yDjX5Fl/view?usp=sharing" target="_blank">London Inspection - August 2020</a></underline><br/>
                                </div>
                            </div>
                            <div className="even-point-tittle">
                            <h3>ACADEMIC PERFORMANCE</h3>
                            <p>We are very pleased with the work our staff have put in to give the children at Shakhsiyah Schools an 
                                amazing holistic tarbiyah. The children are a proof of the amazing work being done. If you would like 
                                to know about the school's academic performance in the current or previous academic year, please 
                                contact the school office via phone or email.</p>
                            <h3>COMPLAINTS PROCEDURE</h3>
                            <p>We strive to always work with parents for ongoing school improvement. We encourage parents to share any 
                                complaints or concerns with the school. Our School Complaints Procedure is available to view under the 
                                'Policies' section of the website. If you would like to know about the number of formal complaints 
                                received by the school in the current or previous academic year, please contact the school office via 
                                phone or email. </p>
                                <h3>SUPPORTING YOUR CHILD AT HOME</h3>
                            </div>
                            <h3>1. Parent Communication:</h3>
                            <div className="event-point-info">
                                <ul>
                                    <li>• Parents can use the parent communication (Reading Diary) to communicate any concerns or share any information about your child with your child’s teacher.</li>
                                    <li>• Parents also have the option to email the school administrator to share any information with your child’s teacher</li>
                                </ul>
                            </div>
                            <h3>2. Reading:</h3>
                            <p>Children will be provided reading books on a weekly basis. Parents are expected to spend 10-15 minutes daily listening 
                                to your child read. Parents should use this opportunity to talk to your child about the content of the story. 
                                This will enhance your child’s reading skills and also provide your child with greater depth of understanding of the book</p>
                            <h3>3. Homework and Book Bags:</h3>
                            <p>Homework is allocated on a weekly basis for the taught subjects. Parents should monitor the completion of homework. 
                                This is also an opportunity for parents to develop an insight into the weekly learning in class and support your 
                                child consolidate classroom learning at home.</p>
                                <p>Book bags should only contain the school homework books, reading books and the reading record. Stationary is provided 
                                by the school, therefore children are not required to bring in any stationary.</p>
                            <h3>4. Healthy Routines</h3>
                            <p><b>1. Food:</b> Parents are expected to provide a healthy lunch each day consisting of one main meal (e.g. pasta, sandwich, wrap, etc.), 
                                healthy snacks (e.g. fruits, yoghurt, cheese, etc.) and drinks. We encourage parents to provide fresh clean water rather than juice. 
                                This will ensure your child develops good healthy eating habits from a young age. Please also ensure the contents of your child’s 
                                lunch box is emptied daily. We recommend this is done with your child to support them develop good habits. Also, please ensure the 
                                lunchbox is washed/wiped and new food is prepared on a daily basis.</p>
                                <p>Food not allowed in school: Crisps, cakes, fizzy drinks, fried food, chips, etc. </p><br/>
                            <p><b>2. Sleep:</b> Research shows, children who have 8-10 hours of sleep each night perform better at school compared to those who don't. 
                                Please ensure your child has a set-time when they are in bed each night. We recommend children being sent to bed at 7.30 pm.</p>
                            <p><b>3. Hygiene:</b></p>
                            <ul>
                                    <li><b>• Clothing:</b> Children should come to school wearing clean school uniform and black school shoes. Children should also be changing their socks daily.</li>
                                    <li><b>• Wash:</b> Children should have a bath at least once or twice per week to maintain personal hygiene. Children should also clip their nails at least once per week. 
                                        In particular on Thursday’s after maghrib prayers in preparation for yawmul jammu’ah (Friday prayers). Nail polish is also not allowed.</li>
                                    <li><b>• Oral Hygiene:</b> Children should brush their teeth morning and evening each day. Please ensure your child’s toothbrush is suitable for their age and changed regularly.</li>
                                    <li><b>• Haircare:</b> Hair should be washed regularly and combed before coming to school.</li>
                                </ul><br/>
                                <p><b>4. Screen time:</b> Parents are reminded to limit screen time to 30 minutes daily on digital devices.</p>
                            <p>In addition, it is important that your child experiences story-telling from parents. As this will increase their exposure to new vocabulary, new plot lines and adventure. This will spur them on to write with interest as well. If possible, take your child to the local library regularly to develop their love for reading.</p>    
                            <h3>Shakhsiyah School, London - Map</h3>   
                            <EventDetailsMap />
                            <h3>Shakhsiyah School, Slough - Map</h3>   
                            <EventDetailsMap />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-8">
                        <EventDetailsSidebar />
                        <EventDetailsSidebar1 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsSection;