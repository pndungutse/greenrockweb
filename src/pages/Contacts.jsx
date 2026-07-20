import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setupContactMap } from '../utils/strnixScripts';
import { asset } from '../utils/publicUrl';

const Contacts = () => {
    // Google Maps + map-script.js are not part of the home script stack.
    // map-script also only runs on window.onload, so re-init on every visit.
    useEffect(() => {
        let cancelled = false;

        setupContactMap().catch((err) => {
            if (!cancelled) {
                // eslint-disable-next-line no-console
                console.error(err);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            <div className="page-wrapper">

                {/*Search Popup*/}
                <div id="search-popup" className="search-popup">
                    <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
                    <div className="popup-inner">
                        <div className="overlay-layer"></div>
                        <div className="search-form">
                            <form method="post" action="https://t.commonsupport.com/strnix/index.html">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" className="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>

                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul className="recent-searches">
                                <li><a href="#">Finance</a></li>
                                <li><a href="#">Idea</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Growth</a></li>
                                <li><a href="#">Plan</a></li>
                            </ul>

                        </div>

                    </div>
                </div>


                {/* Page Banner Section */}
                <section className="page-banner">
                    <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/banner-bg-1.jpg')})` }}></div>

                    <div className="auto-container">
                        <div className="breadcrumb-box">
                            <div className="auto-container">
                                <ul className="bread-crumb clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>

                        <h1>Get In Touch</h1>
                    </div>

                </section>
                {/*End Page Banner Section */}

                {/*Contact Section*/}
                <section className="contact-section contact-page">
                    <div className="auto-container">

                        <div className="info-blocks">
                            <div className="row clearfix">
                                {/*Info Block*/}
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <div className="icon"><img src={asset('/assets/images/icons/icon-message-1.png')} alt="" /></div>
                                        <strong>Visit The Office</strong>
                                        <ul className="info">
                                            <li>greenrockeng.com</li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Info Block*/}
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <div className="icon"><img src={asset('/assets/images/icons/icon-call-1.png')} alt="" /></div>
                                        <strong>Phone Inquiry</strong>
                                        <ul className="info">
                                            <li><a href="tel:(949)-771-4943">(949) 771-4943</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Info Block*/}
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <div className="icon"><img src={asset('/assets/images/icons/icon-mail-1.png')} alt="" /></div>
                                        <strong>Send Email</strong>
                                        <ul className="info">
                                            <li><a href="mailto:info@greenrockeng.com">info@greenrockeng.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-box clearfix wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2000ms">
                            <div className="form-box clearfix">
                                <div className="sec-title light-title">
                                    <h2>Don’t Hesitate To <br />Contact Us</h2>
                                    <div className="bottom-dots clearfix">
                                        <span className="dot line-dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className="default-form contact-form">
                                    <form method="post" action="https://t.commonsupport.com/strnix/sendemail.php" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Your Name" required="" />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required="" />
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="subject" placeholder="Subject" required="" />
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <button type="submit" className="theme-btn btn-style-eight"><div className="btn-title"><span className="btn-txt">Send Request</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-9.jpg')})` }}>
                                <div className="info-box">
                                    <div className="subtitle">Call Us 24/7 For Support</div>
                                    <div className="phone">
                                        <span className="icon">
                                            <img src={asset('/assets/images/icons/icon-call-1.png')} alt="" />
                                        </span>
                                        <a href="tel:(949)-771-4943">(949) 771-4943</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Map Section*/}
                <section className="map-section">
                    {/*Map Outer*/}
                    <div className="map-outer">
                        <div className="map-canvas"
                            data-zoom="12"
                            data-lat="-37.817085"
                            data-lng="144.955631"
                            data-type="roadmap"
                            data-hue="#ffc400"
                            data-title="Envato"
                            data-icon-path="/assets/images/icons/map-marker.png"
                            data-content="greenrockeng.com<br /><a href='mailto:info@greenrockeng.com'>info@greenrockeng.com</a>">
                        </div>
                    </div>
                </section>
                {/*End Map Section*/}

            </div>
            {/*End pagewrapper*/}
        </>
    );
};

export default Contacts;
