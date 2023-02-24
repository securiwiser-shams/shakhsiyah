import { Link } from 'gatsby';
import React from 'react';

const CategoryDropdown = () => {
    return (
        <>
            <ul>
                <li className="item-has-children"><Link to="/course">Development</Link>
                    <ul className="category-submenu">
                        <li><Link to="/course">All Development</Link></li>
                        <li><Link to="/course">Mobile App</Link></li>
                        <li><Link to="/course">Web Development</Link></li>
                        <li><Link to="/course">Development tools</Link></li>
                        <li><Link to="/course">Database</Link></li>
                        <li><Link to="/course">Programming language</Link></li>
                    </ul>
                </li>
                <li className="item-has-children"><Link to="/course">Art and Design</Link>
                    <ul className="category-submenu">
                        <li><Link to="/course">Web Design</Link></li>
                        <li><Link to="/course">Graphic Design</Link></li>
                        <li><Link to="/course">Design tools</Link></li>
                        <li><Link to="/course">All Art</Link></li>
                        <li><Link to="/course">Marketing</Link></li>
                    </ul>
                </li>
                <li className="item-has-children"><Link to="/course">Business</Link>
                    <ul className="category-submenu">
                        <li><Link to="/course">All Business</Link></li>
                        <li><Link to="/course">Communications</Link></li>
                        <li><Link to="/course">Finance</Link></li>
                        <li><Link to="/course">Management</Link></li>
                        <li><Link to="/course">Sales</Link></li>
                    </ul>
                </li>
                <li className="item-has-children"><Link to="/course">Life Style</Link>
                    <ul className="category-submenu">
                        <li><Link to="/course">Life Style</Link></li>
                        <li><Link to="/course">Mental Health</Link></li>
                        <li><Link to="/course">Dieting</Link></li>
                        <li><Link to="/course">All Art</Link></li>
                        <li><Link to="/course">Nutrition</Link></li>
                    </ul>
                </li>
                <li className="item-has-children"><Link to="/course">Health and Fitness</Link>
                    <ul className="category-submenu">
                        <li><Link to="/course">All Health and Fitness</Link></li>
                        <li><Link to="/course">Beauty and Makeup</Link></li>
                        <li><Link to="/course">Food and Beverages</Link></li>
                        <li><Link to="/course">Good Food</Link></li>
                    </ul>
                </li>
                <li><Link to="/course">Data Science</Link></li>
                <li><Link to="/course">Marketing</Link></li>
                <li><Link to="/course">Photography</Link></li>
            </ul>
        </>
    );
};

export default CategoryDropdown;