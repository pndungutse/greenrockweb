import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Header = () => {
    const { pathname } = useLocation();
    const isCurrent = (path) => pathname === path;

    return (
        <div>
            <header className="main-header header-style-three">

                {/* Header Upper */}
                <div className="header-main-box">
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><Link to="/" title="Greenrock Engineering and Design Services"><img src={asset('/assets/images/logo-3.png')} alt="Greenrock Engineering and Design Services" title="Greenrock Engineering and Design Services" /></Link></div>
                                </div>
                                <div className="right-info clearfix">
                                    {/*Info*/}
                                    <div className="info clearfix">
                                        {/*Info Block*/}
                                        <div className="info-block">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <img src={asset('/assets/images/icons/icon-call-1.png')} alt="" />
                                                </span>
                                            </div>
                                            <strong><a href="tel:(949)-771-4943">(949) 771-4943</a></strong>
                                            <div className="info-text">
                                                Call Us — Open To Bids &amp; RFPs
                                            </div>
                                        </div>
                                        {/*Info Block*/}
                                        <div className="info-block">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <img src={asset('/assets/images/icons/icon-mail-1.png')} alt="" />
                                                </span>
                                            </div>
                                            <strong><a href="mailto:info@greenrockeng.com">info@greenrockeng.com</a></strong>
                                            <div className="info-text">Get a Free Consultation</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="header-lower">
                        <div className="auto-container">
                            {/*Nav Box*/}
                            <div className="nav-box clearfix">
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>

                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className={isCurrent('/') ? 'current' : ''}><Link to="/">Home</Link></li>
                                                <li className={`dropdown${isCurrent('/about-us') || isCurrent('/faq') ? ' current' : ''}`}><Link to="/about-us">About Us</Link>
                                                    <ul>
                                                        <li><Link to="/about-us">About Us</Link></li>
                                                        <li className={isCurrent('/faq') ? 'current' : ''}><Link to="/faq">FAQs</Link></li>
                                                        <li><Link to="/services">Dedicated Projects</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`dropdown${isCurrent('/services') ? ' current' : ''}`}><Link to="/services">Services</Link>

                                                    {/* <ul>
                                                        <li><Link to="/services">All Services</Link></li>
                                                        <li><a href="installation-service.html">Architecture</a></li>
                                                        <li><a href="maintenance-service.html">Civil Engineering</a></li>
                                                        <li><a href="replacement-service.html">Structural Engineering</a></li>
                                                        <li><a href="commercial-service.html">Electrical Engineering</a></li>
                                                        <li><a href="residential-service.html">Mechanical Engineering</a></li>
                                                        <li><a href="thermal-service.html">Design Services</a></li>
                                                    </ul> */}
                                                </li>
                                                <li className={isCurrent('/projects') ? 'current' : ''}><Link to="/projects">Projects</Link></li>
                                                <li className={`dropdown${isCurrent('/news') ? ' current' : ''}`}><Link to="/news">News</Link>
                                                    <ul>
                                                        <li><a href="blog-grid.html">Blog Grid Style</a></li>
                                                        <li><a href="blog.html">Blog with Sidebar</a></li>
                                                        <li><a href="blog-single.html">Blog Post Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className={isCurrent('/contacts') ? 'current' : ''}><Link to="/contacts">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                {/*Search Btn*/}
                                <div className="search-btn">
                                    <button type="button" className="theme-btn search-toggler"><span className="fa fa-search"></span></button>
                                </div>

                                {/*Social*/}
                                <div className="social">
                                    <ul className="social-links clearfix">
                                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}

                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        {/*Logo*/}
                        <div className="logo pull-left">
                            <Link to="/" title=""><img src={asset('/assets/images/sticky-logo.png')} alt="" title="" /></Link>
                        </div>
                        {/*Right Col*/}
                        <div className="pull-right">
                            {/* Main Menu */}
                            <nav className="main-menu clearfix">
                                {/*Keep This Empty / Menu will come through Javascript*/}
                            </nav>{/* Main Menu End*/}
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}

                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-cancel"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo"><Link to="/"><img src={asset('/assets/images/nav-logo.png')} alt="" title="" /></Link></div>
                        <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                        {/*Social Links*/}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>{/* End Mobile Menu */}
            </header>
            {/* End Main Header */}
        </div>
    );
};

export default Header;