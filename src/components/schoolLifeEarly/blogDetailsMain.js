import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';


const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <div className="hero-arera course-item-height" style={{ background: "url(/assets/img/slider/early-school-life.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-course-1-text">
                                <h2>Early Years School Life</h2>
                            </div>
                            <div className="course-title-breadcrumb">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><span>Early Years School Life</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="blog-main-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                                            <div className="blog-thumb ">
                                            <h1 className="mb-20">School <span className="down-mark-line">Life</span></h1>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <div className="blog-meta">
                                                    <div className="blog-user">
                                                    </div>
                                                </div>
                                                <h2 className="mb-20">Annual <span className="down-mark-line">Presentation</span></h2>
                                                <div className="blog-content">
                                                    <p>Every year, every child in our school performs at the children’s presentation. They prepare, rehearse and amaze the audience 
                                                        with their public speaking skills, confidence and creativity. Themes in the past have ranged from ‘Our World, Our Future’, 
                                                        ‘Journey through the Seerah of the Prophet Muhammad (saw)’, ‘Qur’an, Our Beating Heart’ and ‘We are One Ummah.'</p>
                                                        <p>Our Early Years demonstrate acute self-awareness that is nurtured in the classroom. Performing in front of an audience 
                                                            of upto 500 people, our young students proudly showcase speech and language development through articulation in Arabic 
                                                            and English, as well as physical orientation through on stage movement and co-ordination.</p>
                                                        <p><img src="/assets/img/course/life1.svg" alt="img" /></p> 
                                                        <h3 className="mb-20"><span className="down-mark-line">Educational </span> Visits and Visitors</h3>
                                                        <p><img src="/assets/img/course/life2.svg" alt="img" /></p> 
                                                        <p>Educational visits are a crucial part of learning interwoven into our creative curriculum. Some of our annual visits are 
                                                            listed below. This is supplemented by frequent visitors to the school for children to interact with and learn from.</p>
                                                        <h4>Freightliners Farm (London)</h4>
                                                        <p>The Freightliners Farm in Islington offers a variety of educational workshops for our children in Early Years. They learn 
                                                            through workshops about different farm animals and their relationships with humans. Children love the opportunity to pet 
                                                            the animals and get involved in feeding activities. They are also introduced to new vocabulary linked to nature and farm 
                                                            life as they are encouraged to look at signage throughout the farm.</p>
                                                        <h4>Legoland Windsor Resort (London and Slough)</h4>
                                                        <p>All the children visit Legoland at the end of each year, where they participate in many exciting and interesting activities. 
                                                            This is a much anticipated event, particularly as the children in Slough and London meet each other and enjoy lunch together.</p>
                                                        <h4>Walks around Windsor (Slough)</h4>
                                                        <p>Children in the Early Years classes visit key landmarks in the Royal Town of Windsor including going on a tour around Windsor Castle, 
                                                            Windsor Parish and a walk through Windsor High Street. The children see the famous historical site of Windsor castle and its 
                                                            surrounding areas and think about what the town must have looked like centuries ago.</p>
                                                        <h4>Woburn Safari Park (London)</h4>
                                                        <p>Children enjoy visiting Woburn Safari park in Milton Keynes as they are able to see many wildlife animals up close. The children 
                                                            also take part in interactive sessions in the Enrichment centre with live videos and animals for the children to learn about. 
                                                            The children learn about species that are under threat in the wild, and think about ways in which they can help conserve these 
                                                            beautiful species.</p>
                                                        <h4>Look Out Discovery Centre (Slough)</h4>
                                                        <p>Children in our Early Years look forward to visiting the LookOut Discovery centre in Bracknell, Berkshire every year, where they 
                                                            investigate science and nature. This trip aids their experiential learning of Knowledge and Understanding of the World in their 
                                                            classrooms.</p>
                                                        <h4>Odd Farm Trip (Slough)</h4>
                                                        <p>Every year, children in the Early Years enjoy learning about farm animals and the role of the farming providing care, food and 
                                                            shelter for these farm animals in their trip to Odds Farm near High Wycombe, Buckinghamshire. This trip supports the children’s 
                                                            learning by seeing, smelling and hearing farm animals for the first time as they learn about the lifecycles of lambs, see cows 
                                                            being milked and get to go on tractor and trailer rides.</p>
                                                       
                                                        </div>
                                                </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default BlogDetailsMain;