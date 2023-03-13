import { Link } from 'gatsby';
import React, { useState } from 'react';
import useSticky from '../../hooks/useSticky';
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
                <div className="container-fluid p-0 header-main-wrapper-background">
                    <div className="header-top-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-8">
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="header-top-login d-flex f-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={sticky ? "sticky header-area sticky-header" : "header-area sticky-header"}>
                <div className="container-fluid p-0 header-main-wrapper-background">
                    <div className="header-main-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-7 col-md-5 col-sm-9 col-9">
                                <div className="header-left d-flex align-items-center">
                                    <div className="header-logo">
                                        <Link to="/"><img src="/assets/img/logo/logo.svg" alt="logo" width="211" height="71"  /></Link>
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
                                    {/*<div className="d-none d-md-block "header-right d-flex align-items-center justify-content-end">
                                            <Link to='/admissions' className="user-btn-sign-up edu-btn">Apply</Link>
                                        </div>*/}
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