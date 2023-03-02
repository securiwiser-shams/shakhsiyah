import { Link } from 'gatsby';
import React, { useState } from 'react';
import CourseCurriculam from './courseCurriculam';
import CourseDetailsInstructor from './courseDetailsInstructor';
import CourseDetailsSidebar from './courseDetailsSidebar';
import CourseProgressbar from './courseProgressbar';

const CourseDetailsSection = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <section className="course-detalis-area pb-90">
            <div className="container">
                <div className="row">
                    <div className=" col-xxl-8 col-xl-8">
                        <div className="course-detalis-wrapper mb-30">
                            <div className="course-heading mb-20">
                            <h1 className="mb-20"><span className="down-mark-line">Halaqah</span></h1>
                                <div className="course-star">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <ul>
                                        <li><i className="fal fa-star"></i></li>
                                    </ul>
                                    <span>(254 reviews)</span>
                                </div>
                            </div>
                            <div className="course-detelis-meta">
                                <div className="course-meta-wrapper border-line-meta">
                                    <div className="course-meta-img">
                                        <Link to="/instructor-profile"><img src="/assets/img/course/farah.svg" alt="course-meta" /></Link>
                                    </div>
                                    <div className="course-meta-text">
                                        <span>Created by</span>
                                        <h6><Link to="/instructor-profile">Dr Farah Ahmed</Link></h6>
                                    </div>
                                </div>
                                <div className="course-Enroll border-line-meta">
                                    <p>Total Enrolled</p>
                                    <span>5,420</span>
                                </div>
                                <div className="course-update border-line-meta">
                                    <p>Last Update</p>
                                    <span>01 January 2022 </span>
                                </div>
                                <div className="course-category">
                                    <p>Level</p>
                                    <span><Link to="/course">Early Years</Link></span>
                                </div>
                            </div>
                            <div className="course-description pt-45 pb-30">
                                <div className="course-Description">
                                    <h4>Description</h4>
                                </div>
                                <p>The Halaqah Curriculum is derived from our Principle of Halaqah. At its heart, is the intention 
                                    to develop and nurture our children to be thinking reflective committed Muslims who consciously 
                                    choose to embrace the Islamic way of life and embody ‘Shakhsiyah Islamiyah’. The Halaqah incorporates
                                     elements of Citizenship, PSHE, History and Religious Education. All children take part in Halaqah
                                      daily; the sessions are child-centred and sometimes child-led. Halaqah is designed to enable children 
                                      to learn about Islam in the context of living as Muslims in British society, contributing positively 
                                      to society and facing the challenges of the contemporary world. The traditional Islamic practice of
                                       Halaqah is oral, reflective, dialogic and transformative.</p>
                                       <h3 className="mb-20"><span className="down-mark-line">Islam</span></h3>
                                       <p>Children learn about Aqeedah, Qur’an and Sunnah, Seerah, Ibadah, Ahkaam Shariah, Seeking Knowledge, 
                                        Hifdh, Adaab and Akhlaaq, Taadib un Nafs and Tazkiyat ul Qalb. </p>
                                        <h3 className="mb-20"><span className="down-mark-line">History</span></h3>
                                        <div className="course-requirements-text">
                                    <ul>
                                        <li>• Through Halaqah, children experience a rich tapestry of Islamic, local, British 
                                            and global History in line with the themes outlined in our  holistic curriculum; 
                                            This is taught within an enquiry based, collaborative, learning environment that 
                                            encourages pupils to become resourceful in their approach, to ask perceptive questions, 
                                            think critically, weigh evidence, sift arguments and develop perspective and judgement. </li><br/>
                                        <li>• Children develop an understanding of key historical concepts such as continuity and change, 
                                            cause and consequence, similarity, difference and significance and use these in their own personal
                                             historical enquiries.</li><br/>
                                        <li>• Children develop historical skills such as how to frame a historical question, how to justify a 
                                            historical claim, bias in historical sources and other forms of evidence and how sources and other forms
                                             of evidence are used by historians.</li><br/>
                                        <li>• Children are provided with opportunities to deal with a range of stimulating resources including visitors 
                                            to the school, visits to local and national museums and public institutions, as well as written and oral sources, 
                                            including an increasing number found on the internet.  </li><br/>
                                            <h3 className="mb-20"><span className="down-mark-line">Religious</span> Education</h3>
                                        <div className="course-requirements-text"></div>
                                        <li>• Religious Education is not taught as a separate subject in its own right. Rather Religious Education (relating to 
                                            religions other than Islam) can be found in the Tarbiyah: Contextualising Islam section of the Halaqah Curriculum 
                                            which includes a section on ‘Other Religions, Beliefs and Cultures’.</li><br/>
                                        <li>• Children are introduced to other religions through various free flow activities in the Early Years.</li><br/>
                                        <li>• The Abrahamic faiths are taught simultaneously to the Qur’anic Narrative about Prophet’s Musa and ‘Isa (alayhi 
                                            salatu wasalam). In this way children appreciate the closeness of the belief systems as well as the substantial 
                                            differences between the three faiths.</li><br/>
                                        <li>• Children are also introduced to the idea of people of no faith and understand that some people deny the existence of God.</li><br/>
                                        <li>• Children are encouraged to explore the common values between people of all faiths and none.</li><br/>
                                        <h3 className="mb-20"><span className="down-mark-line">Personal </span> Social Health and Economic Education</h3>
                                        <div className="course-requirements-text"></div>
                                        <li>• PSHE is not taught as a separate subject in its own right. Rather strands of PSHE education can be identified in the T’alim: 
                                            Developing the ‘Aqliyah and Taadib: Disciplining the Nafs and Inspiring the Qalb section of the Halaqah. </li><br/>
                                        <li>• Halaqah is a core aspect of children’s personal and social development in the Early Years; this is supplemented by teacher observation 
                                            and interaction through free flow activities.</li><br/>
                                        <li>• Halaqah does much more that traditional PSHE as it is foundationally about developing Shakhsiyah (character)</li><br/>
                                        <li>• Through Halaqah, children learn about themselves, their relationships with family, friends and communities, their physical health and 
                                            their emotional development. Children also learn about money, trade, consumerism, marketing and advertising.</li><br/>
                                        <li>• Through Halaqah, learn how to assess risk and keep safe, at home, in school, on the road, and on the internet.</li><br/>
                                        <h3 className="mb-20"><span className="down-mark-line">Citizenship </span> (including British Values)</h3>
                                        <div className="course-requirements-text"></div>
                                        <li>• As with PSHE, Citizenship and ‘British Values’ are not taught as a separate subject in Halaqah or as a standalone section. Rather they 
                                            can be found in the Tarbiyah: Contextualising Islam section of the Halaqah Curriculum which covers, Muslims in Britain, Other Religions, 
                                            Beliefs and Cultures and History.</li><br/>
                                        <li>• Since 2014 Schools in England are required to ‘actively promote’ fundamental British values. Shakhsiyah schools perceive British values 
                                            as overlapping with Islamic values. We therefore meet the requirement to promote them in a number of ways including through Halaqah.</li><br/>
                                        <li>• Citizenship: Children learn about their heritage and roles as members of their local communities, British citizens, European citizens, members 
                                            of the Muslim Ummah and of humanity at large. Children participate in community events and contribute to the life of their local community. 
                                            Children learn about and visit important local and national public institutions such as their local library and Parliament. They engage with visitors 
                                            from a range of organisations and institutions such as Policemen, Firemen and local Councillors.</li><br/>
                                        <li>• Individual Liberty: Children learn about the importance of understanding their own capacity to be free agents, exercising freewill and the responsibility 
                                            and accountability that goes with this. They learn about the importance of recognising and respecting the liberty of others to make individual 
                                            choices. Children learn about the importance of freedom of speech and how to respectfully disagree with others.</li><br/>
                                        <li>• Mutual Respect of Others: Children learn that all human beings are worthy of respect and that respect is essential in the character and behaviour of a Muslim. 
                                            They explore difficult issues such as how to respect someone you don’t agree with or someone who is disrespecting you. Children learn that they should never 
                                            discriminate against anyone or treat anyone with disrespect for any reason. They learn that they should insist others treat them with respect and be 
                                            confident in themselves.</li><br/>
                                        <li>• Other Faiths and Beliefs:  Children learn specifically about other faiths and beliefs in specific themes. Children are taught about the importance of respecting 
                                            other faiths, beliefs and cultures and living in harmony with all. For details please see above under Religious education. Children visit various places and 
                                            institutions including places of worship and engage with visitors from other faiths, beliefs and cultures.</li><br/>
                                        <li>• The Rule of Law: Children learn about why it is important to have rules and laws. They understand that rules and laws should apply equally and justly to everyone. 
                                            They understand that different rules and laws apply in different circumstances, for example at home, in school, at a football match. They learn about the rules 
                                            and laws that Muslims follow. They also learn that all people living in Britain are subject to British law and Muslims in Britain abide by British law.</li><br/>
                                        <li>• Democracy: Children learn about the principles of a democratic society and about British democracy and institutions of government. They learn about democratic 
                                            principles such as people electing their rulers and holding them to account. They learn about how democratic principles are shared by Muslims and how the historical 
                                            interaction between Muslims and Europe included discussions about the ideas of democracy and government. They learn about the importance of participating in the 
                                            political process and the different ways they can do so.</li><br/>
                                <div className="course-Description">
                                    <h4>Conclusion</h4>
                                </div>
                                <p>A Halaqah with the children of Red class, helping children to learn about diversity and celebrate differences.</p>
                                <p>The session gave children the opportunity to talk about themselves and others positively and respectfully. They looked at 
                                    all the ways in which people are different, such as hair types, families, likes and dislikes.</p>
                                <p>A story book, ready interactively by the teacher, also highlighted diversity and taught the children why this is important 
                                    to society. It is important to our organization's ethos to make children more aware of their identity and develop a sense
                                    of selfhood in relation to Islam. </p>       
                                    </ul>
                                </div>

                            </div>
                            <div className="course-learn-wrapper">
                                <div className="course-learn">
                                    <div className="course-leranm-tittle">
                                        <h4 className="mb-15">What you'll learn</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="course-leran-text f-left">
                                                <ul>
                                                    <li>Handle advanced techniques like Dimensionality Reduction</li>
                                                    <li>Handle specific topics like Reinforcement Learning best</li>
                                                    <li>Know which Machine Learning model to choose for each type of
                                                        problem</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="course-leran-text">
                                                <ul>
                                                    <li>Reinforcement learning upper
                                                        confidence bound Thompson sampling</li>
                                                    <li>Model Selection and Boosting fold cross
                                                        validation parameter</li>
                                                    <li>Use Machine Learning for personal
                                                        purpose of machine</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-requirements pt-45">
                                <h4>Requirements</h4>
                                <div className="course-requirements-text">
                                    <ul>
                                        <li>• High School Mathematics Level</li>
                                        <li>• Basic Python Knowledge Required</li>
                                        <li>• Broadband Internet</li>
                                    </ul>
                                </div>
                            </div>
                            <CourseCurriculam />
                            <CourseDetailsInstructor />
                            <div className="student-feedback pt-45 ">
                                <h3>Student Feedback</h3>
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="reating-point mb-30">
                                            <div className="rating-point-wrapper text-center">
                                                <h2>4.7</h2>
                                                <div className="rating-star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span>5785 Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9">
                                        <CourseProgressbar />
                                    </div>
                                </div>
                            </div>
                            <div className="course-detalis-reviews pt-15">
                                <div className="course-detalis-reviews-tittle">
                                    <h3>Reviews</h3>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><img src="/assets/img/course/course-reviews-1.png" alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Sotapdi Kunda</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>55 min ago</span>
                                        </div>
                                        <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                            solutions.
                                            This course does start from the beginning with very little knowledge and
                                            gives a
                                            great overview of common tools used for data science and progresses into
                                            more
                                            complex concepts and ideas.</p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><img src="/assets/img/course/course-reviews-2.png" alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Samantha</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>45 min ago</span>
                                        </div>
                                        <p>The course is good at explaining very basic intuition of the concepts. It
                                            will get
                                            you scratching the surface so to say. where this course is unique is the
                                            implementation methods are so well defined Thank you to the team !.</p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><img src="/assets/img/course/course-reviews-3.png" alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Michell Mariya</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>30 min ago</span>
                                        </div>
                                        <p>This course is amazing..!
                                            I started this course as a beginner and learnt a lot. Instructors are great.
                                            Query
                                            handling can be improved.Overall very happy with the course.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="course-review-btn">
                                    <span id="show-review-box" className="edu-btn" onClick={handleToggle}>Write a Review</span>
                                    <div id="review-box" className={`review-comment mt-45 ${isActive ? "danger" : "d-block"}`}>
                                        <div className="comment-title mb-20">
                                            <p>Your email address will not be published. Required fields are marked *
                                            </p>
                                        </div>
                                        <div className="comment-rating mb-20">
                                            <span>Overall ratings</span>
                                            <ul>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="comment-input-box mb-15">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        <textarea placeholder="Your review"
                                                            className="comment-input comment-textarea mb-20"></textarea>
                                                    </div>
                                                    <div className="col-xxl-6">
                                                        <div className="comment-input mb-20">
                                                            <input type="text" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6">
                                                        <div className="comment-input mb-20">
                                                            <input type="email" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="comment-submit">
                                                            <button type="submit" className="edu-btn">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                        <CourseDetailsSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsSection;