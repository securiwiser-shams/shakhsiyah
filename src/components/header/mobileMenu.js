import { Link } from 'gatsby';
import React, { useState } from 'react';

const MobileMenu = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [pages, setPages] = useState(false)
      const [project, setProject] = useState(false)
      const [blog, setBlog] = useState(false)
      const [instructor, setInstructor] = useState(false)
      const [faqs, setFaqs] = useState(false)
      const [zoom, setZoom] = useState(false)
      const [events, setEvents] = useState(false)

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(false)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setPages(false)
          setProject(false)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setProject(false)
          setPages(!pages)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'project'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(!project)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'blog'){
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(false)
            setEvents(false)
        }
        else if( menu == 'instructor'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(!instructor)
            setFaqs(false)
            setZoom(false)
            setEvents(false)
          }
          else if( menu == 'zoom'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(!zoom)
            setEvents(false)
          }
          else if( menu == 'events'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(false)
            setEvents(!events)
          }
          else if( menu == 'faqs'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(!faqs)
            setZoom(false)
            setEvents(false)
          }
      }; 


    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <div className="side-info-content">
                    <div className="offset-widget offset-logo mb-40">
                        <div className="row align-items-center">
                            <div className="col-9">
                                <Link to="/"><img src="/assets/img/logo/logo.svg" alt="Logo" /></Link>
                            </div>
                            <div className="col-3 text-end"><button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="mm-menu mb-30 d-block d-xl-none">
                        <ul>
                            <li className={home ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('home'); }}>About Us</a>
                                <ul className={home ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/principles">Principles</Link></li>
                                    <li><Link to="/mission-statement">Mission Statement</Link></li>
                                    <li><Link to="/trustees">Trustees</Link></li>
                                    <li><Link to="/senior-team">Senior Leadership Team</Link></li>
                                    <li><Link to="/safeguarding-team">Safegaurding Team</Link></li>
                                    <li><Link to="/policies">Policies</Link></li>
                                    <li><Link to="/vacancies">Vacancies</Link></li>
                                    <li><Link to="/parents">Information for Parent</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('courses'); }}>Admissions</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/admissions">Admissions</Link></li>
                                </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Early Years</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/early-curriculum">Curriculum</Link></li>
                                    <li><Link to="/early-assessment">Assessment</Link></li>
                                    <li><Link to="/school-life-early">School Life</Link></li>
                                    <li><Link to="#">Term Dates</Link></li>
                                    <li><Link to="#">Calendar</Link></li>
                                    </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Primary School</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/primary-curriculum">Curriculum</Link></li>
                                    <li><Link to="/primary-assessment">Assessment</Link></li>
                                    <li><Link to="/school-life-primary">School Life</Link></li>
                                    <li><Link to="#">Term Dates</Link></li>
                                    <li><Link to="#">Calendar</Link></li>
                                    </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Secondary School</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/secondary-curriculum">Curriculum</Link></li>
                                    <li><Link to="#">Assessment</Link></li>
                                    <li><Link to="/school-life-secondary">School Life</Link></li>
                                    <li><Link to="#">Term Dates</Link></li>
                                    <li><Link to="#">Calendar</Link></li>
                                </ul>
                            </li>
                            <li className={instructor ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('instructor'); }}>Community</a>
                                <ul className={instructor ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/family-halaqah">Family Halaqah</Link></li>
                                    <li><Link to="/webinars">Webinar</Link></li>
                                    <li><Link to="/event">Events</Link></li>
                                    <li><Link to="/announcements">Announcements</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="offset-widget offset_searchbar mb-30">
                        <div className="menu-search position-relative ">
                            <form action="#" className="filter-search-input">
                                <input type="text" placeholder="Search keyword" />
                                <button><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="offset-widget offset_menu-top mb-20">
                        <div className="header-menu-top-icon mb-20">
                            <p>London Branch</p>
                            <a href="#"><i className="fas fa-phone"></i>02088028651</a>
                            <a href="#"><i className="fal fa-envelope"></i>mail@isfnet.org.uk</a>
                            <i className="fal fa-map-marker-alt"></i><span>1st Floor, 277 St Ann's Rd, London, N15 5RG</span><br/><br/>
                            <p>Slough Branch</p>
                            <a href="#"><i className="fas fa-phone"></i>01753 518000</a>
                            <a href="#"><i className="fal fa-envelope"></i>mail-slough@isfnet.org.uk</a>
                            <i className="fal fa-map-marker-alt"></i><span>Cippenham Lodge, Cippenham Ln, Slough SL1 5AN</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;