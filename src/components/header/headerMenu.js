import { Link } from 'gatsby';
import React from 'react';

const HeaderMenu = () => {
    return (
        <ul>
            <li className="menu-item-has-children"><Link to="#">About Us</Link>
                <ul className="sub-menu">
                    <li><Link to="/">Principles</Link></li>
                    <li><Link to="/">Mission Statement</Link></li>
                    <li className="menu-item-has-children"><Link to="#">Team</Link>
                        <ul className="sub-menu">
                            <li><Link to="/trustees">Trustees</Link></li>
                            <li><Link to="/senior-team">Senior Leadership Team</Link></li>
                            <li><Link to="/safeguarding-team">Safeguarding Team</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Policies</Link></li>
                    <li><Link to="#">Vacancies</Link></li>
                    <li><Link to="#">Information for Parent</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children"><Link to="/course">Course</Link>
                <ul className="sub-menu">
                    <li><Link to="/course">Course 1</Link></li>
                    <li><Link to="/courseTwo">Course 2</Link></li>
                    <li><Link to="/courseThree">Course 3</Link></li>
                    <li><Link to="/courseFour">Course 4</Link></li>
                    <li><Link to="/course-details">Course Details</Link></li>
                    <li><Link to="/webinars">Webinars</Link></li>
                    <li><Link to="/webinar-details">Webinar Details</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children"><Link to="/shop">Shop</Link>
                <ul className="sub-menu">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop-details">Shop Details</Link></li>
                    <li><Link to="/wishlist">wishlist</Link></li>
                    <li><Link to="/cart">cart</Link></li>
                    <li><Link to="/checkout">checkout</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children"><a href="#!">Pages</a>
                <ul className="sub-menu">
                    <li><Link to="/about">About</Link></li>
                    <li className="menu-item-has-children"><Link to="/instructor">Team</Link>
                        <ul className="sub-menu">
                            <li><Link to="/instructor">Trustees</Link></li>
                            <li><Link to="/senior-team">Senior Leadership Team</Link></li>
                            <li><Link to="/safeguarding-team">Safeguarding Team</Link></li>
                            <li><Link to="/instructor-profile">instructor profile</Link></li>
                            <li><Link to="/student-profile">Student profile</Link></li>
                            <li><Link to="/become-instructor">become instructor</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link to="/zoom-class">zoom class</Link>
                        <ul className="sub-menu">
                            <li><Link to="/zoom-class">zoom class</Link></li>
                            <li><Link to="/zoom-class-details">zoom class details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link to="/blog">Blog</Link>
                        <ul className="sub-menu">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/blog-details">blog details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link to="/event">Event</Link>
                        <ul className="sub-menu">
                            <li><Link to="/event">Event</Link></li>
                            <li><Link to="/event-details">Event Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link to="/faq-page">FAQ page</Link>
                        <ul className="sub-menu">
                            <li><Link to="/faq-page">FAQ page</Link></li>
                            <li><Link to="/faq-details">FAQ details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/membership">membership plan</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/registration">Sign Up</Link></li>
                    <li><Link to="/404">404-page</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </li>
        </ul>
    );
};

export default HeaderMenu;