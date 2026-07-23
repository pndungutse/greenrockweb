import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Header = () => {
    const { pathname } = useLocation();
    const isCurrent = (path) => pathname === path;

    return (
        <div>
            <header className="main-header header-style-three">

                <div className="header-main-box">
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                <div className="logo-box">
                                    <div className="logo">
                                        <Link to="/" title="Greenrock Engineering and Design Services">
                                            <img
                                                src={asset('/assets/images/greenrock-logo.png')}
                                                alt="Greenrock Engineering and Design Services"
                                                title="Greenrock Engineering and Design Services"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-lower">
                        <div className="auto-container">
                            <div className="nav-box clearfix">
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className={isCurrent('/') ? 'current' : ''}><Link to="/">Home</Link></li>
                                                <li className={`dropdown${isCurrent('/about-us') || isCurrent('/faq') ? ' current' : ''}`}>
                                                    <Link to="/about-us">About</Link>
                                                    <ul>
                                                        <li><Link to="/about-us">About Us</Link></li>
                                                        <li className={isCurrent('/faq') ? 'current' : ''}><Link to="/faq">FAQs</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={isCurrent('/services') ? 'current' : ''}><Link to="/services">Services</Link></li>
                                                <li className={isCurrent('/contacts') ? 'current' : ''}><Link to="/contacts">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                <div className="social">
                                    <ul className="social-links clearfix">
                                        <li><a href="#" aria-label="LinkedIn"><span className="fab fa-linkedin-in"></span></a></li>
                                        <li><a href="#" aria-label="Facebook"><span className="fab fa-facebook-f"></span></a></li>
                                        <li><a href="#" aria-label="Instagram"><span className="fab fa-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        <div className="logo pull-left">
                            <Link to="/" title="Greenrock">
                                <img src={asset('/assets/images/greenrock-logo-sm.png')} alt="Greenrock" title="Greenrock" />
                            </Link>
                        </div>
                        <div className="pull-right">
                            <nav className="main-menu clearfix"></nav>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-cancel"></span></div>
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <Link to="/">
                                <img src={asset('/assets/images/greenrock-logo.png')} alt="Greenrock" title="Greenrock" />
                            </Link>
                        </div>
                        <div className="menu-outer"></div>
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#" aria-label="LinkedIn"><span className="fab fa-linkedin-in"></span></a></li>
                                <li><a href="#" aria-label="Facebook"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#" aria-label="Instagram"><span className="fab fa-instagram"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
