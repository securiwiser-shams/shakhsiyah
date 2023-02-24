import { Link } from 'gatsby';
import React, { useState } from 'react';
import useSticky from '../../hooks/useSticky';
import CategoryDropdown from './categoryDropdown';
import HeaderCart from './headerCart';
import HeaderMenu from './headerMenu';
import HeaderTop from './headerTop';
import MobileMenu from './mobileMenu';

const Header = () => {
    const { sticky } = useSticky();

    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <>
            <header>
                <HeaderTop />
                <div className={sticky ? "sticky header-area header-transparent sticky-header" : "header-area header-transparent sticky-header"}>
                    <div className="container-fluid">
                        <div className="header-main-wrapper">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-7 col-md-5 col-sm-9 col-9">
                                    <div className="header-left d-flex align-items-center">
                                        <div className="header-logo">
                                            <Link to="/"><img src="/assets/img/logo/logo-black.png" alt="logo" /></Link>
                                        </div>
                                        <div className="category-menu d-none d-xxl-block">
                                            <div className="Category-click">
                                                <figure className="cattext">
                                                    <svg className="icons" id="menu_1_" data-name="menu (1)"
                                                        xmlns="http://www.w3.org/2000/svg" width="18.087" height="18.087"
                                                        viewBox="0 0 18.087 18.087">
                                                        <path id="Path_25" data-name="Path 25"
                                                            d="M3.768,0H.754A.754.754,0,0,0,0,.754V3.768a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,3.768,0Z"
                                                            fill="#141517"></path>
                                                        <path id="Path_26" data-name="Path 26"
                                                            d="M3.768,9H.754A.754.754,0,0,0,0,9.754v3.015a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,3.768,9Z"
                                                            transform="translate(0 -2.217)" fill="#141517"></path>
                                                        <path id="Path_27" data-name="Path 27"
                                                            d="M3.768,18H.754A.754.754,0,0,0,0,18.754v3.015a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,3.768,18Z"
                                                            transform="translate(0 -4.434)" fill="#141517"></path>
                                                        <path id="Path_28" data-name="Path 28"
                                                            d="M12.768,0H9.754A.754.754,0,0,0,9,.754V3.768a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,12.768,0Z"
                                                            transform="translate(-2.217)" fill="#141517"></path>
                                                        <path id="Path_29" data-name="Path 29"
                                                            d="M12.768,9H9.754A.754.754,0,0,0,9,9.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,12.768,9Z"
                                                            transform="translate(-2.217 -2.217)" fill="#141517"></path>
                                                        <path id="Path_30" data-name="Path 30"
                                                            d="M12.768,18H9.754A.754.754,0,0,0,9,18.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,12.768,18Z"
                                                            transform="translate(-2.217 -4.434)" fill="#141517"></path>
                                                        <path id="Path_31" data-name="Path 31"
                                                            d="M21.768,0H18.754A.754.754,0,0,0,18,.754V3.768a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,21.768,0Z"
                                                            transform="translate(-4.434)" fill="#141517"></path>
                                                        <path id="Path_32" data-name="Path 32"
                                                            d="M21.768,9H18.754A.754.754,0,0,0,18,9.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,21.768,9Z"
                                                            transform="translate(-4.434 -2.217)" fill="#141517"></path>
                                                        <path id="Path_33" data-name="Path 33"
                                                            d="M21.768,18H18.754a.754.754,0,0,0-.754.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,21.768,18Z"
                                                            transform="translate(-4.434 -4.434)" fill="#141517"></path>
                                                    </svg>
                                                    <span className="text">Category</span></figure>
                                                <div className="dropdown-category">
                                                    <nav>
                                                        <CategoryDropdown />
                                                    </nav>
                                                </div>
                                            </div>
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
                                            <form action="#">
                                                <div className="search-icon p-relative">
                                                    <input type="text" placeholder="Search courses..." />
                                                    <button type="submit"><i className="fas fa-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="cart-wrapper mr-30">
                                            <button type='button' className="cart-toggle-btn" onClick={() => { setCartOpen(!cartOpen) }}>
                                                <div className="header__cart-icon p-relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.988" height="19.988"
                                                        viewBox="0 0 19.988 19.988">
                                                        <g id="trolley-cart" transform="translate(-1 -1)">
                                                            <path id="Path_36" data-name="Path 36"
                                                                d="M1.666,2.333H3.8L6.159,12.344a1.993,1.993,0,0,0,.171,3.98H17.656a.666.666,0,1,0,0-1.333H6.33a.666.666,0,0,1,0-1.333H17.578a1.992,1.992,0,0,0,1.945-1.541l1.412-6a2,2,0,0,0-1.946-2.456H5.486L4.98,1.514A.666.666,0,0,0,4.331,1H1.666a.666.666,0,0,0,0,1.333ZM18.989,5a.677.677,0,0,1,.649.819l-1.412,6a.662.662,0,0,1-.648.514H7.524L5.8,5Z"
                                                                transform="translate(0 0)" fill="#141517" />
                                                            <path id="Path_37" data-name="Path 37"
                                                                d="M20,27a2,2,0,1,0,2-2A2,2,0,0,0,20,27Zm2.665,0A.666.666,0,1,1,22,26.333.666.666,0,0,1,22.665,27Z"
                                                                transform="translate(-6.341 -8.01)" fill="#141517" />
                                                            <path id="Path_38" data-name="Path 38"
                                                                d="M9,27a2,2,0,1,0,2-2A2,2,0,0,0,9,27Zm2.665,0A.666.666,0,1,1,11,26.333.666.666,0,0,1,11.665,27Z"
                                                                transform="translate(-2.67 -8.01)" fill="#141517" />
                                                        </g>
                                                    </svg>
                                                    <span className="item-number">3</span>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="user-btn-inner p-relative d-none d-md-block">
                                            <div className="user-btn-wrapper">
                                                <div className="user-btn-content ">
                                                    <Link to='/login' className="user-btn-sign-in">Sign In</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <Link to='/registration' className="user-btn-sign-up edu-btn">Sign Up</Link>
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
            </header>
            
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>

            <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
        </>
    );
};

export default Header;