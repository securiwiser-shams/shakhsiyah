import { Link } from 'gatsby';
import React from 'react';

const HeaderMenu = () => {
    return (
        <div id="lazy-load-container">
            <ul>
            <li className="menu-item-has-children"><Link to="/principle">About Us</Link>
                    <ul className="sub-menu">
                        <li><Link to="/principles">Principles</Link></li>
                        <li><Link to="/mission-statement">Mission Statement</Link></li>
                        <li className="menu-item-has-children"><Link to="#">Team</Link>
                            <ul className="sub-menu">
                                <li><Link to="/trustees">Trustees</Link></li>
                                <li><Link to="/senior-team">Senior Leadership Team</Link></li>
                                <li><Link to="/safeguarding-team">Safeguarding Team</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/policies">Policies</Link></li>
                        <li><Link to="/vacancies">Vacancies</Link></li>
                        <li><Link to="/parents">Information for Parent</Link></li>
                    </ul>
                </li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li className="menu-item-has-children"><Link to="/early-curriculum">Early Years</Link>
                    <ul className="sub-menu">
                        <li><Link to="/early-curriculum">Curriculum</Link></li>
                        <li><Link to="/early-assessment">Assessment</Link></li>
                        <li><Link to="/school-life-early">School Life</Link></li>
                        <li><Link to="#">Term Dates</Link></li>
                        <li><Link to="#">Calendar</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link to="/primary-curriculum">Primary School</Link>
                    <ul className="sub-menu">
                        <li><Link to="/primary-curriculum">Curriculum</Link></li>
                        <li><Link to="/primary-assessment">Assessment</Link></li>
                        <li><Link to="/school-life-primary">School Life</Link></li>
                        <li><Link to="#">Term Dates</Link></li>
                        <li><Link to="#">Calendar</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link to="/secondary-curriculum">Secondary School</Link>
                    <ul className="sub-menu">
                        <li><Link to="/secondary-curriculum">Curriculum</Link></li>
                        <li><Link to="#">Assessment</Link></li>
                        <li><Link to="/school-life-secondary">School Life</Link></li>
                        <li><Link to="#">Term Dates</Link></li>
                        <li><Link to="#">Calendar</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link to="/family-halaqah">ISF Community</Link>
                    <ul className="sub-menu">
                        <li><Link to="/family-halaqah">Family Halaqah</Link></li>
                        <li><Link to="/webinars">Webinars</Link></li>
                        <li className="menu-item-has-children"><Link to="#">Events</Link>
                            <ul className="sub-menu">
                                <li><Link to="/event">Upcoming Events</Link></li>
                                <li><Link to="/event-details">Tour De Shakhsiyah</Link></li>
                                </ul>
                                </li>
                                <li><Link to="/announcements">Announcements</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default HeaderMenu;