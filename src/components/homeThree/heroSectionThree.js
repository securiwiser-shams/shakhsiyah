import { Link } from 'gatsby';
import React from 'react';

const HeroSectionThree = () => {
    return (
        <div className="hero-area-3 hero-height-3" style={{ backgroundImage: "url(/assets/img/slider/hero-3.jpg)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 text-center">
                        <div className="hero-university-text">
                            <span>Education WordPress theme</span>
                            <h2>Build Your Dream with Eduman</h2>
                        </div>
                        <div className="university-btn">
                            <Link to="/about" className="edu-five-btn">How to apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionThree;