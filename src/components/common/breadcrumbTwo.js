import { Link } from 'gatsby';
import React from 'react';

const BreadcrumbTwo = ({ breadcrumbTitleTwo, breadcrumbSubTitleTwo }) => {
    return (
        <div className="banner-area faq position-relative">
            <div className="banner-img">
                <img src="/assets/img/banner/banner.png" alt="img not found" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="course-title-breadcrumb breadcrumb-top">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item white-color"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item white-color"><Link to="/faq-page">{breadcrumbSubTitleTwo}</Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-xl-8">
                        <div className="banner-tiitle-wrapper text-center">
                            <div className="banner-tittle">
                                <h2>{breadcrumbTitleTwo}</h2>
                            </div>
                            <div className="banner-search-box">
                                <form action="#">
                                    <div className="slider-faq-search">
                                        <input type="text" placeholder="Search courses..." />
                                        <button type="submit"><i className="fal fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbTwo;