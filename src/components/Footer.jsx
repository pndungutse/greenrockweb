import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer footer-style-three">

                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row clearfix">

                            <div className="footer-column col-lg-4 col-md-5 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo-box">
                                        <Link to="/" title="Greenrock Engineering and Design Services">
                                            <img
                                                src={asset('/assets/images/Logo_GreenRock.jpeg')}
                                                alt="Greenrock Engineering and Design Services"
                                                title="Greenrock Engineering and Design Services"
                                            />
                                        </Link>
                                    </div>
                                    <div className="about-text">
                                        Integrated architecture and engineering for data centers, warehouses, and heavy industrial facilities. Based in Phoenix, Arizona.
                                    </div>
                                    <div className="footer-social">
                                        <ul className="footer-social-two clearfix">
                                            <li><a href="#" aria-label="LinkedIn"><span className="fab fa-linkedin-in"></span></a></li>
                                            <li><a href="#" aria-label="Facebook"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#" aria-label="Instagram"><span className="fab fa-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="big-column col-lg-5 col-md-7 col-sm-12">
                                <div className="row clearfix">
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title">
                                                <h3>Quick Links</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link to="/about-us">About Greenrock</Link></li>
                                                    <li><Link to="/projects">Projects</Link></li>
                                                    <li><Link to="/faq">FAQs</Link></li>
                                                    <li><Link to="/services">Our Expertise</Link></li>
                                                    <li><Link to="/contacts">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title">
                                                <h3>Our Services</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link to="/services">Architecture</Link></li>
                                                    <li><Link to="/services">Civil Engineering</Link></li>
                                                    <li><Link to="/services">Structural Engineering</Link></li>
                                                    <li><Link to="/services">Electrical Engineering</Link></li>
                                                    <li><Link to="/services">Mechanical Engineering</Link></li>
                                                    <li><Link to="/services">Design Services</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-3 col-md-12 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="info">
                                        <div className="info-block">
                                            <strong>Office</strong>
                                            <div className="info-text">Phoenix, Arizona</div>
                                        </div>
                                        <div className="info-block">
                                            <strong>Phone</strong>
                                            <div className="info-text">
                                                <a href="tel:+19497714943">(949) 771-4943</a>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <strong>Email</strong>
                                            <div className="info-text">
                                                <a href="mailto:info@greenrockeng.com">info@greenrockeng.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner clearfix">
                            <div className="scroll-top-footer scroll-to-target" data-target="html"><span className="flaticon-arrows"></span></div>
                            <div className="copyright">(c) 2026 <Link to="/">GREENROCK</Link> Engineering and Design Services. All rights reserved.</div>
                            <div className="footer-nav">
                                <ul className="clearfix">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
