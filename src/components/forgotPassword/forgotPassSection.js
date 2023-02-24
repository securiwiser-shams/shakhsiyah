import { Link } from 'gatsby';
import React from 'react';

const ForgotPassSection = () => {
    return (
        <div className="signin-page-area pt-120 pb-120">
            <div className="signin-page-area-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="signup-box text-center">
                                            <div className="signup-text">
                                                <h3>Forgot Password</h3>
                                            </div>
                                            <div className="signup-thumb">
                                                <img src="/assets/img/sing-up/sign-up.png" alt="img not found" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="signup-form-wrapper">
                                            <p className='mb-25'>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
                                            <div className="signup-wrapper">
                                                <input type="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="sign-button mb-20">
                                                <button type='submit' className="sign-btn">Send</button>
                                            </div>
                                            <div className="registered wrapper">
                                                <div className="not-register">
                                                    <span>Back to?</span><span><Link to="/login">Login</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassSection;