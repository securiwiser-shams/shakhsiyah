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
                                <Link to="/"><img src="/assets/img/logo/logo-black.png" alt="Logo" /></Link>
                            </div>
                            <div className="col-3 text-end"><button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="mm-menu mb-30 d-block d-xl-none">
                        <ul>
                            <li className={home ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                                <ul className={home ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/">Home Style 1</Link></li>
                                    <li><Link to="/homeTwo">Home Style 2</Link></li>
                                    <li><Link to="/homeThree">Home Style 3</Link></li>
                                </ul>
                            </li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('courses'); }}>Courses</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/course">Course 1</Link></li>
                                    <li><Link to="/courseTwo">Course 2</Link></li>
                                    <li><Link to="/courseThree">Course 3</Link></li>
                                    <li><Link to="/courseFour">Course 4</Link></li>
                                    <li><Link to="/course-details">Course Details</Link></li>
                                    <li><Link to="/webinars">Webinars</Link></li>
                                    <li><Link to="/webinar-details">Webinar Details</Link></li>
                                </ul>
                            </li>
                            <li className={project ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('project'); }}>Shop</a>
                                <ul className={project ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/shop-details">Shop Details</Link></li>
                                    <li><Link to="/wishlist">wishlist</Link></li>
                                    <li><Link to="/cart">cart</Link></li>
                                    <li><Link to="/checkout">checkout</Link></li>
                                </ul>
                            </li>
                            <li className={instructor ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('instructor'); }}>Instructor</a>
                                <ul className={instructor ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/instructor">instructor</Link></li>
                                    <li><Link to="/instructor-profile">instructor profile</Link></li>
                                    <li><Link to="/student-profile">Student profile</Link></li>
                                    <li><Link to="/become-instructor">become instructor</Link></li>
                                </ul>
                            </li>
                            <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className={zoom ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('zoom'); }}>zoom class</a>
                                <ul className={zoom ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/zoom-class">zoom class</Link></li>
                                    <li><Link to="/zoom-class-details">zoom class details</Link></li>
                                </ul>
                            </li>
                            <li className={events ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('events'); }}>Event</a>
                                <ul className={events ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/event">Event</Link></li>
                                    <li><Link to="/event-details">Event Details</Link></li>
                                </ul>
                            </li>
                            <li className={faqs ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('faqs'); }}>Faq Page</a>
                                <ul className={faqs ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/faq-page">FAQ page</Link></li>
                                    <li><Link to="/faq-details">FAQ details</Link></li>
                                </ul>
                            </li>
                            <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/membership">membership plan</Link></li>
                                    <li><Link to="/login">Sign In</Link></li>
                                    <li><Link to="/registration">Sign Up</Link></li>
                                    <li><Link to="/404">404-page</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
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
                            <a href="#"><i className="fas fa-phone"></i>(555) 674 890 556</a>
                            <a href="#"><i className="fal fa-envelope"></i>info@example.com</a>
                            <i className="fal fa-map-marker-alt"></i><span>3rd Avenue, San Francisco</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;