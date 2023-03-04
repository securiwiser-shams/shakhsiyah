import { Link } from 'gatsby';
import React, { useState } from 'react';
import useSticky from '../../hooks/useSticky';
import CategoryDropdown from './categoryDropdown';
import HeaderCart from './headerCart';
import HeaderMenu from './headerMenu';
import HeaderTop from './headerTop';
import MobileMenu from './mobileMenu';

const HeaderFour = () => {
    const { sticky } = useSticky();
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <HeaderTop />
            <div className="header-top-area d-none d-lg-block">
                <div className="container-fluid">
                    <div className="header-top-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-8">
                                <div className="header-top-icon">
                                    <a href="tel:0208 802 8651"><i className="fas fa-phone"></i>(London) 0208 802 8651</a>
                                    <a href="mailto:mail@isfnet.org.uk"><i className="fal fa-envelope"></i>mail@isfnet.org.uk</a>
                                    <i className="fal fa-map-marker-alt"></i><span>1st Floor, 277 St Ann's Rd, London, N15 5RG</span>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="header-top-login d-flex f-right">
                                    <div className="header-social">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={sticky ? "sticky header-area sticky-header" : "header-area sticky-header"}>
                <div className="container-fluid">
                    <div className="header-main-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-10 col-lg-7 col-md-5 col-sm-9 col-9">
                                <div className="header-left d-flex align-items-center">
                                    <div className="header-logo">
                                        <Link to="/"><img src="/assets/img/logo/logo-black.png" alt="logo" /></Link>
                                    </div>
                                    <div className="main-menu d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <HeaderMenu />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-3 col-3">
                                <div className="header-right d-flex align-items-center justify-content-end">
                                    <div className="header-search d-none d-xxl-block mr-30">
                                        
                                    
                                    </div>
                                    <div className="menu-bar d-xl-none ml-20">
                                        <button type='button' className="side-toggle" onClick={() => { setMenuOpen(!menuOpen) }}>
                                            <div className="bar-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>

            <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
        </header>
    );
};

export default HeaderFour;