import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Header = () => {
    const { pathname } = useLocation();
    const isCurrent = (path) => pathname === path;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const closeMobile = () => {
        setMobileOpen(false);
        setAboutOpen(false);
    };

    // Keep body scroll locked while the drawer is open
    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', mobileOpen);
        return () => document.body.classList.remove('mobile-menu-visible');
    }, [mobileOpen]);

    // Close drawer on route change
    useEffect(() => {
        closeMobile();
    }, [pathname]);

    // Escape key closes drawer
    useEffect(() => {
        if (!mobileOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') closeMobile();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [mobileOpen]);

    const aboutActive = isCurrent('/about-us') || isCurrent('/faq');

    return (
        <div>
            <header className="main-header header-style-three">

                <div className="header-main-box">
                    <div className="header-lower">
                        <div className="auto-container">
                            <div className="nav-box gr-nav">
                                <div className="gr-nav__brand">
                                    <Link to="/" title="Greenrock Engineering and Design Services" className="gr-nav__logo">
                                        <img
                                            src={asset('/assets/images/Logo_GreenRock-on-dark.png')}
                                            alt="Greenrock Engineering and Design Services"
                                            title="Greenrock Engineering and Design Services"
                                        />
                                    </Link>
                                </div>

                                <div className="nav-outer">
                                    <button
                                        type="button"
                                        className="mobile-nav-toggler"
                                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                        aria-expanded={mobileOpen}
                                        aria-controls="gr-mobile-drawer"
                                        onClick={() => setMobileOpen(true)}
                                    >
                                        <span className="icon flaticon-menu-1" aria-hidden="true"></span>
                                    </button>

                                    <nav className="main-menu navbar-expand-md navbar-light" aria-label="Primary">
                                        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className={isCurrent('/') ? 'current' : ''}>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className={`dropdown${aboutActive ? ' current' : ''}`}>
                                                    <Link to="/about-us">About</Link>
                                                    <ul>
                                                        <li className={isCurrent('/about-us') ? 'current' : ''}>
                                                            <Link to="/about-us">About Us</Link>
                                                        </li>
                                                        <li className={isCurrent('/faq') ? 'current' : ''}>
                                                            <Link to="/faq">FAQs</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={isCurrent('/services') ? 'current' : ''}>
                                                    <Link to="/services">Services</Link>
                                                </li>
                                                <li className={isCurrent('/contacts') ? 'current' : ''}>
                                                    <Link to="/contacts">Contact</Link>
                                                </li>
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
                                <img src={asset('/assets/images/Logo_GreenRock.png')} alt="Greenrock" title="Greenrock" />
                            </Link>
                        </div>
                        <div className="pull-right">
                            <button
                                type="button"
                                className="mobile-nav-toggler"
                                aria-label="Open menu"
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen(true)}
                            >
                                <span className="icon flaticon-menu-1" aria-hidden="true"></span>
                            </button>
                            <nav className="main-menu clearfix" aria-hidden="true"></nav>
                        </div>
                    </div>
                </div>

                <div
                    id="gr-mobile-drawer"
                    className={`mobile-menu${mobileOpen ? ' gr-mobile-open' : ''}`}
                    aria-hidden={!mobileOpen}
                >
                    <div
                        className="menu-backdrop"
                        role="presentation"
                        onClick={closeMobile}
                    ></div>
                    <button
                        type="button"
                        className="close-btn"
                        aria-label="Close menu"
                        onClick={closeMobile}
                    >
                        <span className="icon flaticon-cancel" aria-hidden="true"></span>
                    </button>
                    <nav className="menu-box" aria-label="Mobile">
                        <div className="nav-logo">
                            <Link to="/" onClick={closeMobile}>
                                <img src={asset('/assets/images/Logo_GreenRock.png')} alt="Greenrock" title="Greenrock" />
                            </Link>
                        </div>
                        <div className="menu-outer">
                            <ul className="navigation">
                                <li className={isCurrent('/') ? 'current' : ''}>
                                    <Link to="/" onClick={closeMobile}>Home</Link>
                                </li>
                                <li className={`dropdown${aboutActive ? ' current' : ''}${aboutOpen ? ' open' : ''}`}>
                                    <Link to="/about-us" onClick={closeMobile}>About</Link>
                                    <button
                                        type="button"
                                        className={`dropdown-btn${aboutOpen ? ' open' : ''}`}
                                        aria-label="Toggle About submenu"
                                        aria-expanded={aboutOpen}
                                        onClick={() => setAboutOpen((v) => !v)}
                                    >
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                    </button>
                                    <ul style={{ display: aboutOpen ? 'block' : 'none' }}>
                                        <li className={isCurrent('/about-us') ? 'current' : ''}>
                                            <Link to="/about-us" onClick={closeMobile}>About Us</Link>
                                        </li>
                                        <li className={isCurrent('/faq') ? 'current' : ''}>
                                            <Link to="/faq" onClick={closeMobile}>FAQs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={isCurrent('/services') ? 'current' : ''}>
                                    <Link to="/services" onClick={closeMobile}>Services</Link>
                                </li>
                                <li className={isCurrent('/contacts') ? 'current' : ''}>
                                    <Link to="/contacts" onClick={closeMobile}>Contact</Link>
                                </li>
                            </ul>
                        </div>
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
