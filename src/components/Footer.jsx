import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer footer-style-three">

                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row clearfix">

                            {/*Column*/}
                            <div className="footer-column col-lg-4 col-md-5 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo-box">
                                        <Link to="/" title="Greenrock Engineering and Design Services"><img src="/assets/images/footer-logo-3.png" alt="Greenrock Engineering and Design Services" title="Greenrock Engineering and Design Services" /></Link>
                                    </div>
                                    <div className="about-text">Sustainable engineering and design consulting — architecture, civil, structural, electrical, mechanical, and design services under one roof.</div>
                                    <div className="footer-social">
                                        <ul className="footer-social-two clearfix">
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                            <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                            <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*Column*/}
                            <div className="big-column col-lg-5 col-md-7 col-sm-12">
                                <div className="row clearfix">
                                    {/*Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title">
                                                <h3>Quick Links</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link to="/about-us">About Greenrock</Link></li>
                                                    <li><a href="blog.html">News &amp; Insights</a></li>
                                                    <li><Link to="/projects">Projects</Link></li>
                                                    <li><Link to="/faq">FAQs</Link></li>
                                                    <li><Link to="/services">Our Expertise</Link></li>
                                                    <li><Link to="/contacts">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title">
                                                <h3>Our Services</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><a href="installation-service.html">Architecture</a></li>
                                                    <li><a href="maintenance-service.html">Civil Engineering</a></li>
                                                    <li><a href="replacement-service.html">Structural Engineering</a></li>
                                                    <li><a href="commercial-service.html">Electrical Engineering</a></li>
                                                    <li><a href="residential-service.html">Mechanical Engineering</a></li>
                                                    <li><a href="thermal-service.html">Design Services</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Column*/}
                            <div className="footer-column col-lg-3 col-md-12 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="info">
                                        {/*Info Block*/}
                                        <div className="info-block">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <img src="/assets/images/icons/icon-message-1.png" alt="" />
                                                </span>
                                            </div>
                                            <strong>Visit The Office</strong>
                                            <div className="info-text">greenrockeng.com</div>
                                        </div>
                                        {/*Info Block*/}
                                        <div className="info-block">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <img src="/assets/images/icons/icon-call-1.png" alt="" />
                                                </span>
                                            </div>
                                            <strong>Phone Inquiry</strong>
                                            <div className="info-text">
                                                <a href="tel:(949)-771-4943">(949) 771-4943</a>
                                            </div>
                                        </div>
                                        {/*Info Block*/}
                                        <div className="info-block">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <img src="/assets/images/icons/icon-mail-1.png" alt="" />
                                                </span>
                                            </div>
                                            <strong>Send Email</strong>
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

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">

                        <div className="inner clearfix">
                            {/*Scroll to top*/}
                            <div className="scroll-top-footer scroll-to-target" data-target="html"><span className="flaticon-arrows"></span></div>
                            {/*Copyright*/}
                            <div className="copyright">(c) 2026 <Link to="/">GREENROCK</Link> Engineering and Design Services. All rights reserved.</div>
                            <div className="footer-nav">
                                <ul className="clearfix">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
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