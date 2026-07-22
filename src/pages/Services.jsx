import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const serviceCards = [
    {
        title: 'Architecture',
        icon: 'flaticon-settings',
        image: asset('/assets/images/resource/featured-image-18.jpg'),
        text: 'Industrial and mission-critical building design for data centers, warehouses, and process facilities.',
        delay: '0ms',
    },
    {
        title: 'Civil Engineering',
        icon: 'flaticon-honeycomb',
        image: asset('/assets/images/resource/featured-image-19.jpg'),
        text: 'Site development, grading, drainage, and infrastructure for large industrial campuses.',
        delay: '300ms',
    },
    {
        title: 'Structural Engineering',
        icon: 'flaticon-settings-2',
        image: asset('/assets/images/resource/featured-image-20.jpg'),
        text: 'Efficient structural systems for high-bay warehouses, heavy industrial plants, and critical facilities.',
        delay: '600ms',
    },
    {
        title: 'Electrical Engineering',
        icon: 'flaticon-water-drop',
        image: asset('/assets/images/resource/featured-image-21.jpg'),
        text: 'Power distribution, lighting, and low-voltage systems engineered for reliability and operating cost.',
        delay: '0ms',
    },
    {
        title: 'Mechanical Engineering',
        icon: 'flaticon-save',
        image: asset('/assets/images/resource/featured-image-22.jpg'),
        text: 'HVAC, plumbing, and process support systems sized for industrial and data center performance.',
        delay: '300ms',
    },
    {
        title: 'Design Services',
        icon: 'flaticon-chimney-1',
        image: asset('/assets/images/resource/featured-image-23.jpg'),
        text: 'Concept development, planning, and documentation that turn project goals into clear, buildable plans.',
        delay: '600ms',
    },
];

const Services = () => {
    return (
        <div>
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
        <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/banner-bg-2.jpg')})` }}></div>

        <div className="auto-container">
            <div className="breadcrumb-box">
                <div className="auto-container">
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li className="active">What We Do</li>
                    </ul>
                </div>
            </div>

            <h1>Our Expertise</h1>
        </div>

    </section>
    {/*End Page Banner Section */}

	<section className="services-section-four default-theme">

        <div className="auto-container">
            <div className="upper-content">
                <div className="sec-title centered">
                    <h2>Six disciplines. One integrated practice.</h2>
                    <div className="subtitle">Architecture and engineering for industrial facilities</div>
                    <div className="bottom-dots clearfix">
                        <span className="dot line-dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="text">Greenrock unites architecture, civil, structural, electrical, and mechanical engineering with integrated design for data centers, warehouses, and heavy industrial projects.</div>
            </div>

            <div className="row clearfix">
                {serviceCards.map((service) => (
                    <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay={service.delay}
                        data-wow-duration="2000ms"
                        key={service.title}
                    >
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={service.image} alt={service.title} /></figure>
                                <div className="hover-box">
                                    <div className="hover-inner">
                                        <div className="content">
                                            <div className="text">{service.text}</div>
                                            <div className="link-box">
                                                <Link to="/contacts"><span className="txt">Get Started</span> <span className="icon flaticon-arrows-11"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="title-box">
                                <div className="title-inner">
                                    <div className="icon"><span className={service.icon}></span></div>
                                    <h3><Link to="/contacts">{service.title}</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bottom-text wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                <div className="text">Based in Phoenix, Arizona. Call or email us at <span className="phone"><a href="tel:+19497714943">(949) 771-4943</a></span></div>
            </div>

        </div>
    </section>

    {/*Services Section*/}
    <section className="services-section-one">
        <div className="auto-container">

            <div className="services">
                {/*Service-Block*/}
                <div className="service-block">
                    <div className="row clearfix">
                        {/*Image Column*/}
                        <div className="image-column col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner">
                                <div className="image"><img src={asset('/assets/images/resource/featured-image-3.jpg')} alt="" /></div>
                                <div className="icon-box"><span className="flaticon-power-7"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Architecture and Design Services</span></h2>
                                        <div className="sub-text">Industrial and mission-critical building design</div>
                                    </div>
                                    <div className="text">Concept development, planning, and documentation for data centers, warehouses, and industrial facilities that need clear, buildable drawings.</div>
                                    <div className="link-box">
                                        <Link to="/contacts"><span className="txt">Get Started</span> <span className="icon flaticon-arrows-11"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Service-Block*/}
                <div className="service-block">
                    <div className="row clearfix">
                        {/*Image Column*/}
                        <div className="image-column col-lg-5 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner">
                                <div className="image"><img src={asset('/assets/images/resource/featured-image-4.jpg')} alt="" /></div>
                                <div className="icon-box"><span className="flaticon-power-2"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Civil and Structural Engineering</span></h2>
                                        <div className="sub-text">Sites and structures for industrial campuses</div>
                                    </div>
                                    <div className="text">Site development, grading, drainage, and structural systems sized for high-bay warehouses, heavy industrial plants, and mission-critical facilities.</div>
                                    <div className="link-box">
                                        <Link to="/contacts"><span className="txt">Get Started</span> <span className="icon flaticon-arrows-11"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Service-Block*/}
                <div className="service-block">
                    <div className="row clearfix">
                        {/*Image Column*/}
                        <div className="image-column col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner">
                                <div className="image"><img src={asset('/assets/images/resource/featured-image-5.jpg')} alt="" /></div>
                                <div className="icon-box"><span className="flaticon-energy-1"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Electrical and Mechanical Engineering</span></h2>
                                        <div className="sub-text">Power, cooling, and building systems</div>
                                    </div>
                                    <div className="text">Power distribution, lighting, HVAC, and plumbing engineered for reliability, density, and operating cost on industrial and data center projects.</div>
                                    <div className="link-box">
                                        <Link to="/contacts"><span className="txt">Get Started</span> <span className="icon flaticon-arrows-11"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*Enquiry Section*/}
    <section className="enquiry-section">
        {/* <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-2.jpg')})` }}></div> */}
        <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/ImageBackground2.avif')})` }}></div>

        <div className="auto-container">
            <div className="sec-title light-title centered wow fadeInDown" data-wow-delay="0ms"  data-wow-duration="1000ms">
                <div className="upper-text">Who We Are <span className="icon flaticon-flash"></span></div>
                <h2>Get Free Consultation</h2>
                <div className="subtitle">Engineering &amp; Design Consultancy</div>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="content-box wow fadeInUp" data-wow-delay="0ms"  data-wow-duration="2000ms">
                <div className="default-form contact-form">
                    <form method="post" action="https://t.commonsupport.com/strnix/contact.html">
                        <div className="row clearfix">                                    
                            <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                <input type="text" name="field-name" placeholder="Your Name" required="" />
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                <input type="email" name="field-name" placeholder="Email" required="" />
                            </div>
    
                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                <input type="text" name="field-name" placeholder="Phone" required="" />
                            </div>

                            <div className="col-md-12 col-sm-12 form-group">
                                <select className="custom-select-box" name="field-name">
                                    <option>Subject / Discuss About Service</option>
                                    <option>Installation</option>
                                    <option>Maintenance</option>
                                    <option>Replacement</option>
                                </select>
                            </div>
    
                            <div className="col-md-12 col-sm-12 form-group">
                                <button type="submit" className="theme-btn btn-style-one"><span className="btn-title"><span className="btn-txt">Send Request</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></span></button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="lower-text">
                    <div className="sub-title">
                        <span className="txt">Or call us directly</span>
                    </div>
                    <div className="info">Phoenix, Arizona · <a href="tel:+19497714943">(949) 771-4943</a></div>
                </div>
            </div>

        </div>
    </section>

</div>
        </div>
    );
};

export default Services;