import { Link } from 'gatsby';
import React from 'react';

const BecomeInstructorSection = () => {
    return (
        <div className="become-intructor-area pt-110 pb-120">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-md-8">
                        <div className="become-intructor-text">
                            <h2>Join Our Team</h2>
                            <p>We offer a number of opportunities to work at our organisation in an Islamic environment.</p>
                            <Link to="/vacancies" className="edu-btn">Apply Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructorSection;