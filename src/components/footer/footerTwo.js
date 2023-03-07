import { Link } from 'gatsby';
import React from 'react';

const FooterTwo = () => {
    return (
        <footer>
            <div className="university-footer-area pt-100 pb-60">
                <div className="footer">
                    <div className="container">
                        <div className="footer-main">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="university-footer-widget uf-w1 mb-40">
                                        <div className="footer-widget-head">
                                            <div className="footer-logo mb-30">
                                                <Link to="/"><img src="/assets/img/logo/logo.svg" alt="img not found" /></Link>
                                            </div>
                                        </div>
                                        <div className="university-footer-widget-body">
                                            <p className="mb-30">Great lesson ideas and lesson plans for ESL teachers! Educators
                                                can customize lessons as best plans to knowledge.</p>
                                            <div className="university-footer-icon">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="university-footer-widget uf-w2 mb-40">
                                        <div className="university-footer-widget-head mb-35">
                                            <h4 className="university-footer-widget-title">Online Platform</h4>
                                        </div>
                                        <div className="university-footer-widget-body">
                                            <div className="university-footer-link">
                                                <ul>
                                                    <li><Link to="/course">Proper Guidelines</Link></li>
                                                    <li><Link to="/course">Digital Library</Link></li>
                                                    <li><Link to="/course">Compare Us</Link></li>
                                                    <li><Link to="/become-instructor">Become Instructor</Link></li>
                                                    <li><Link to="/become-instructor">Build Career</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="university-footer-widget uf-w3 mb-40">
                                        <div className="university-footer-widget-head mb-35">
                                            <h4 className="university-footer-widget-title">Browse Courses</h4>
                                        </div>
                                        <div className="university-footer-widget-body">
                                            <div className="university-footer-link">
                                                <ul>
                                                    <li><Link to="/course">Development</Link></li>
                                                    <li><Link to="/course">Business</Link></li>
                                                    <li><Link to="/course">Health and Fitness</Link></li>
                                                    <li><Link to="/course">Life Styles</Link></li>
                                                    <li><Link to="/course">Photography</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="university-footer-widget uf-w4 mb-40">
                                        <div className="footer-widget-head mb-35">
                                            <h4 className="footer-widget-title">Newsletter</h4>
                                        </div>
                                        <div className="university-footer-widget-body">
                                            <div className="university-footer-subscribe">
                                                <form action="#">
                                                    <div className="university-footer-subscribe position-relative mb-35">
                                                        <div className="field po">
                                                            <input type="email" placeholder="Enter email" />
                                                        </div>
                                                        <button type="submit">
                                                            <i className="fas fa-paper-plane"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <h3>Download App</h3>
                                            <div className="app-store">
                                                <a href="#" target="_blank"><img src="/assets/img/bg/appstore-1.png" alt="img not found" /></a>
                                                <a href="#" target="_blank"><img src="/assets/img/bg/appstore-2.png" alt="img not found" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="university-sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-5">
                            <div className="sub-footer-text">
                                <span>© Copyrighted and Designed by <a href="https://themeforest.net/user/bdevs">BDevs</a></span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-7">
                            <div className="sub-footer-link">
                                <ul>
                                    <li><Link to="/contact">Privacy Policy</Link></li>
                                    <li><Link to="/contact">Terms and Condition</Link></li>
                                    <li><Link to="/contact">Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;