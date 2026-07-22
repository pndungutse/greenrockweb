import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setupContactMap } from '../utils/strnixScripts';
import { asset } from '../utils/publicUrl';

const Contacts = () => {
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

                <section className="contact-section contact-page">
                    <div className="auto-container">

                        <div className="info-blocks">
                            <div className="row clearfix">
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <strong>Office</strong>
                                        <ul className="info">
                                            <li>Phoenix, Arizona</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <strong>Phone</strong>
                                        <ul className="info">
                                            <li><a href="tel:+19497714943">(949) 771-4943</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="2000ms">
                                    <div className="inner">
                                        <strong>Email</strong>
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
                                    <h2>Send a message</h2>
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
                                                <button type="submit" className="theme-btn btn-style-eight">
                                                    <div className="btn-title">
                                                        <span className="btn-txt">Send Message</span>
                                                        <span className="btn-icon"><span className="icon flaticon-arrows-11"></span></span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-9.jpg')})` }}>
                                <div className="info-box">
                                    <div className="subtitle">Phoenix, Arizona</div>
                                    <div className="phone">
                                        <a href="tel:+19497714943">(949) 771-4943</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map-section">
                    <div className="map-outer">
                        <div
                            className="map-canvas"
                            data-zoom="11"
                            data-lat="33.4484"
                            data-lng="-112.0740"
                            data-type="roadmap"
                            data-hue="#1f8a4c"
                            data-title="Greenrock Engineering"
                            data-icon-path={asset('/assets/images/icons/map-marker.png')}
                            data-content="Phoenix, Arizona<br /><a href='mailto:info@greenrockeng.com'>info@greenrockeng.com</a>"
                        >
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Contacts;
