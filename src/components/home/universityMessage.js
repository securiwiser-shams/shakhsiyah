import { Link } from 'gatsby';
import React from 'react';
import ScrollAnimation from "react-animate-on-scroll"

const UniversityMessage = () => {
    return (
        <div className="university-message-area pt-170 pb-105 background-message">
            <div className="container fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title mb-30">
                        <ScrollAnimation
                                 animateIn="fadeIn"
                                 animateOut="fadeOut"
                                  >
                            <h2 class="gold-color"> Welcome to Islamic <span className="down-mark-line-2">Shakhsiyah</span> School</h2>
                            </ScrollAnimation> 
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="message-profile-text">
                        <ScrollAnimation
                                 animateIn="fadeIn"
                                 animateOut="fadeOut"
                                  >
                        <h3 class="whiteTextOverride"> <b>Principles welcome</b></h3><br/>
                            <p class="whiteTextOverride"> Assalamu alaikum,</p>
                            <p class="whiteTextOverride"> I am delighted that you are considering Shakshsiyah for your daughter. </p>
                            <p class="whiteTextOverride"> The transition from Primary to Secondary is undoubtedly marked by a mixture of excitement and apprehension. 
                                It is our first priority to ensure students settle in quickly and feel at ease in their new school environment. 
                                We appreciate that students have different educational backgrounds and some may well be exposed to a subject 
                                for the first time. However, my team and I will support and encourage all of our students to ensure that they 
                                are not overwhelmed and achieve their full potential.</p>
                                </ScrollAnimation> 
                        </div>
                        <div className="message-meta"> 
                        <ScrollAnimation
                                 animateIn="fadeIn"
                                 animateOut="fadeOut"
                                  >   
                            <Link to="/instructor-profile">
                            <img class="circular-img" src="/assets/img/member/member-img-01.png" alt="meta-img" width="150" height="150" /></Link>
                            </ScrollAnimation> 
                            <div className="message-meta-link">
                                <Link to="/instructor-profile"><h3 class="whiteTextOverride"> Dr Farah Ahmed</h3></Link>
                                <p class="whiteTextOverride"> Chair of Trustees and Director of Education and Research</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                    <div className="message-profile-text"><br/><br/><br/><br/>
                    <ScrollAnimation
                                 animateIn="fadeIn" 
                                 animateOut="fadeOut"
                                  > 
                            <p class="whiteTextOverride">We have carefully designed a curriculum that aims to cater for the spiritual, intellectual and 
                                worldly needs of the student. To this end, we have placed a strong emphasis on the study of the 
                                Arabic language; the spiritual and worldly advantages of which are obvious. Moreover, the Arabic 
                                language is a wonderful vehicle for sharpening the intellectual powers and connecting the aspiring 
                                student to their Islamic heritage: it functions in much the same way as Greek and Latin did in the 
                                Liberal education once afforded children in this country. Accordingly, students will throughout the 
                                course of their time, be exposed to Arabic on a daily basis..</p>
                                </ScrollAnimation> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default UniversityMessage;