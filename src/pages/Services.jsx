import React from 'react';
import { Link } from 'react-router-dom';

const serviceCards = [
    {
        title: 'Architecture',
        icon: 'flaticon-settings',
        image: '/assets/images/resource/featured-image-18.jpg',
        text: 'Human-centered, energy-conscious building design — spaces that perform for people and tread lightly on the environment.',
        delay: '0ms',
    },
    {
        title: 'Civil Engineering',
        icon: 'flaticon-honeycomb',
        image: '/assets/images/resource/featured-image-19.jpg',
        text: 'Site development, grading, drainage, and infrastructure that manage water wisely and support resilient communities.',
        delay: '300ms',
    },
    {
        title: 'Structural Engineering',
        icon: 'flaticon-solar-energy-4',
        image: '/assets/images/resource/featured-image-20.jpg',
        text: 'Safe, efficient structural systems that use material intelligently — cutting embodied carbon without compromising strength.',
        delay: '600ms',
    },
    {
        title: 'Electrical Engineering',
        icon: 'flaticon-water-drop',
        image: '/assets/images/resource/featured-image-21.jpg',
        text: 'Power distribution, lighting, and low-voltage systems engineered for efficiency, resilience, and lower operating cost.',
        delay: '0ms',
    },
    {
        title: 'Mechanical Engineering',
        icon: 'flaticon-save',
        image: '/assets/images/resource/featured-image-22.jpg',
        text: 'HVAC, plumbing, and building systems designed around comfort and conservation — lowering emissions and lifecycle cost.',
        delay: '300ms',
    },
    {
        title: 'Design Services',
        icon: 'flaticon-chimney-1',
        image: '/assets/images/resource/featured-image-23.jpg',
        text: 'Concept development, planning, and complete documentation that turn project vision into clear, buildable, sustainable plans.',
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
        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/background/banner-bg-2.jpg)" }}></div>

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
                    <div className="subtitle">And Engineering &amp; Design Consultancy Worldwide</div>
                    <div className="bottom-dots clearfix">
                        <span className="dot line-dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="text">Greenrock unites architecture, civil, structural, electrical, and mechanical engineering with integrated design — delivering coordinated facilities that perform better and cost less to run.</div>
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

            <div className="bottom-text wow fadeInUp" data-wow-delay="500ms"  data-wow-duration="2000ms">
                <div className="text">We’re Renewable Energy Generation Compant - Need Emergency Help? <br />Call or email us 24/7 support team at <span className="phone"><a href="tel:+1-949-771-4943">(949) 771-4943</a></span></div>
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
                                <div className="image"><img src="/assets/images/resource/featured-image-3.jpg" alt="" /></div>
                                <div className="icon-box"><span className="flaticon-power-7"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Architecture &amp; Design Services</span></h2>
                                        <div className="sub-text">Human-centered, energy-conscious building design</div>
                                    </div>
                                    <div className="text">Spaces that work beautifully for the people inside them and tread lightly on everything outside — backed by concept development, planning, and complete design documentation that turns vision into clear, buildable, sustainable plans.</div>
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
                                <div className="image"><img src="/assets/images/resource/featured-image-4.jpg" alt="" /></div>
                                <div className="icon-box"><span className="flaticon-power-2"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Civil &amp; Structural Engineering</span></h2>
                                        <div className="sub-text">Resilient sites and efficient structures</div>
                                    </div>
                                    <div className="text">Site development, grading, drainage, and infrastructure that manage water wisely — paired with safe, efficient structural systems that use material intelligently, cutting embodied carbon without compromising strength or code compliance.</div>
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
                                <div className="image"><img src="/assets/images/resource/featured-image-5.jpg" alt="" /></div>
                                <div className="icon-box"><span className="flaticon-energy-1"></span></div>
                            </div>
                        </div>
                        {/*Text Column*/}
                        <div className="text-column col-lg-7 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                            <div className="inner clearfix">
                                <div className="content">
                                    <div className="title">
                                        <h2><span>Electrical &amp; Mechanical Engineering</span></h2>
                                        <div className="sub-text">Efficient power, lighting, and building systems</div>
                                    </div>
                                    <div className="text">Power distribution, lighting, and low-voltage systems engineered for efficiency, plus HVAC, plumbing, and building systems designed around comfort and conservation — lowering emissions and lifecycle cost from the first calculation.</div>
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
        {/* <div className="image-layer" style={{ backgroundImage: "url(/assets/images/background/bg-image-2.jpg)" }}></div> */}
        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/background/ImageBackground2.avif)" }}></div>

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
                        <span className="txt">Or if you need quick assistance</span>
                    </div>
                    <div className="info">Call Us 24/7 For Customer Support At <span className="icon"></span> <a href="tel:(949)-771-4943">(949) 771-4943</a></div>
                </div>
            </div>

        </div>
    </section>
    

    {/*Testimonial Section*/}
    <section className="testimonial-section-three alternate">
        <div className="auto-container">
            <div className="sec-title centered">
                <div className="subtitle">Engineering &amp; Design Consultancy</div>
                <h2>What Clients Saying</h2>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="content-box">
                <div className="history-carousel strnix-carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "1" }, "800":{ "items" : "1" }, "1024":{ "items" : "1" }}}'>
                    {/*Slide*/}
                    <div className="slide-item">
                        <div className="inner">
                            <div className="testi-thumb">
                                <img src="/assets/images/resource/author-thumb-6.jpg" alt="" />
                                <span className="quote-icon left flaticon-blocks-with-angled-cuts"></span>
                                <span className="quote-icon right flaticon-straight-quotes"></span>
                            </div>
                            <div className="content">
                                <div className="text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comod duis aute irure  dolor reprehenderit velit esse cillum dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat cupidatat non proident sunt in culpa enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip.</div>
                            </div>
                            <div className="info"><span>Camron White</span></div>
                        </div>
                    </div>
                    {/*Slide*/}
                    <div className="slide-item">
                        <div className="inner">
                            <div className="testi-thumb">
                                <img src="/assets/images/resource/author-thumb-6.jpg" alt="" />
                                <span className="quote-icon left flaticon-blocks-with-angled-cuts"></span>
                                <span className="quote-icon right flaticon-straight-quotes"></span>
                            </div>
                            <div className="content">
                                <div className="text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comod duis aute irure  dolor reprehenderit velit esse cillum dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat cupidatat non proident sunt in culpa enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip.</div>
                                <div className="info"><span>Camron White</span></div>
                            </div>
                        </div>
                    </div>
                    {/*Slide*/}
                    <div className="slide-item">
                        <div className="inner">
                            <div className="testi-thumb">
                                <img src="/assets/images/resource/author-thumb-6.jpg" alt="" />
                                <span className="quote-icon left flaticon-blocks-with-angled-cuts"></span>
                                <span className="quote-icon right flaticon-straight-quotes"></span>
                            </div>
                            <div className="content">
                                <div className="text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comod duis aute irure  dolor reprehenderit velit esse cillum dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat cupidatat non proident sunt in culpa enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip.</div>
                                <div className="info"><span>Camron White</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/*Sponsors*/}
        <div className="sponsors-outer">
            <div className="auto-container">
                {/*Sponsors Carousel*/}
                <div className="sponsors-carousel strnix-carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 40, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "3" } , "800":{ "items" : "3" }, "1024":{ "items" : "4" }, "1200":{ "items" : "5" }}}'>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/1-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/2-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/3-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/4-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/5-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/1-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/2-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/3-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/4-a.png" alt="" /></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/5-a.png" alt="" /></a></figure></div>
                </div>
            </div>
        </div>

    </section>
</div>
        </div>
    );
};

export default Services;