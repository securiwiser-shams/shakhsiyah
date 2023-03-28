import { Link } from 'gatsby';
import React from 'react';

const Breadcrumb = ({ breadcrumbTitle, breadcrumbSubTitle }) => {
    return (
        <div className="hero-arera course-item-height" style={{ backgroundImage: "url(/assets/img/slider/parent-slider.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-course-1-text"> 
                            <h2>Term Dates</h2>
                        </div>
                        <div className="course-title-breadcrumb">
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><span>Term Dates</span></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;