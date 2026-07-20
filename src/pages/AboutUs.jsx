import React from 'react';
import { Link } from 'react-router-dom';
import Facts from '../components/Facts';

const AboutUs = () => {
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
        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/background/banner-bg-1.jpg)" }}></div>

        <div className="auto-container">
            <div className="breadcrumb-box">
                <div className="auto-container">
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li className="active">About Us</li>
                    </ul>
                </div>
            </div>

            <h1>About Greenrock</h1>
        </div>

    </section>
    {/*End Page Banner Section */}

	{/*About Section*/}
    <section className="about-section-four">

        <div className="pattern-image-left"><img src="/assets/images/background/pattern-image-1.png" alt="" /></div>
        <div className="pattern-image-right"><img src="/assets/images/background/pattern-image-2.png" alt="" /></div>

        <div className="auto-container">
        	<div className="row clearfix">
            	{/*Title Column*/}
                <div className="title-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="inner">
                        <div className="sec-title">
                            <div className="upper-text">Who We Are <span className="icon flaticon-flash"></span></div>
                            <h2>Engineering That Answers To People, Performance And The Planet</h2>
                            <div className="subtitle">Engineering &amp; Design Consultancy</div>
                            <div className="bottom-dots clearfix">
                                <span className="dot line-dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Text Column*/}
                <div className="text-column col-lg-7 col-md-12 col-sm-12">
                    <div className="inner wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="text-content">
                            <p>Greenrock Engineering and Design Services was founded on a simple conviction: the best projects come from disciplines that design together. Our engineers, architects, and designers work as one team — resolving conflicts on paper instead of on site, and engineering out waste before it&rsquo;s built in.</p>
                            <p>We treat sustainability as a starting condition, not a certificate — and bring a client&rsquo;s-eye view to every engagement: responsive, direct, and accountable for outcomes, not just drawings.</p>
                        </div>
                        <div className="signature">The Greenrock Team</div>
                    </div>
                </div>
            </div>

            <div className="lower-content">
                <div className="row clearfix">
                    {/*Default Block*/}
                    <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="#"><img src="/assets/images/resource/featured-image-32.jpg" alt="" /></a>
                            </div>
                            <div className="lower-box">
                                <div className="count">01</div>
                                <h3><Link to="/services">Integrated Disciplines</Link></h3>
                                <div className="text">Architecture, civil, structural, electrical, mechanical, and design services under one roof</div>
                            </div>
                        </div>
                    </div>
                    {/*Default Block*/}
                    <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="300ms"  data-wow-duration="2000ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="#"><img src="/assets/images/resource/featured-image-33.jpg" alt="" /></a>
                            </div>
                            <div className="lower-box">
                                <div className="count">02</div>
                                <h3><Link to="/services">Mission-Critical Sectors</Link></h3>
                                <div className="text">Architecture, civil, structural, electrical, mechanical, and design services under one roof</div>
                            </div>
                        </div>
                    </div>
                    {/*Default Block*/}
                    <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="600ms"  data-wow-duration="2000ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <a href="#"><img src="/assets/images/resource/featured-image-34.jpg" alt="" /></a>
                            </div>
                            <div className="lower-box">
                                <div className="count">03</div>
                                <h3><Link to="/services">Sustainable By Design</Link></h3>
                                <div className="text">Architecture, civil, structural, electrical, mechanical, and design services under one roof</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    {/*Projects Section*/}
    <section className="projects-section-three">
        <div className="outer-container clearfix">

            {/*Text Column*/}
            <div className="text-column clearfix">
                <div className="bg-layer"></div>

                <div className="inner clearfix">
                    <div className="content wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="title">
                            <div className="sub-title"><span className="icon flaticon-flash"></span> Projects For World</div>
                            <h2>Work That Matters</h2>
                        </div>
                        <div className="text">Data centers, warehouses, healthcare, laboratories, and commercial facilities — complex projects where integrated engineering pays off.</div>

                        <div className="features">
                            <ul>
                                <li><span className="gap-icon icon-Wrench"></span> One Accountable Team, Concept To Closeout</li>
                                <li><span className="gap-icon icon-Starship2"></span> Designs That Lower Lifecycle Cost</li>
                                <li><span className="gap-icon icon-WorldGlobe"></span> Tailored To Each Client’s Goals And Schedule</li>
                            </ul>
                        </div>
                        <div className="links-box"><Link to="/contacts" className="theme-btn btn-style-one"><div className="btn-title"><span className="btn-txt">View All Works</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link></div>
                    </div>
                </div>
            </div>
            {/*Image Column*/}
            <div className="image-column clearfix">
                <div className="inner clearfix">
                    {/*Text Over Block*/}
                    <div className="text-over-block">
                        <div className="inner-box">
                            <div className="block-image-layer" style={{ backgroundImage: "url(/assets/images/background/bg-image-15.jpg)" }}></div>
                            <div className="title">
                                <span className="icon flaticon-solar-panel"></span>
                                <span className="txt">our Mission</span>
                            </div>
                            <div className="overlay">
                                <div className="over-inner">
                                    <div className="icon-box">
                                        <span className="icon flaticon-solar-panel"></span>
                                    </div>
                                    <h3><a href="#">our Mission</a></h3>
                                    <div className="text">Our mission is to help clients stay ahead of a changing built environment with engineering that answers to people, performance, and the planet. We deliver responsive, accountable solutions that improve outcomes—not just drawings.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Text Over Block*/}
                    <div className="text-over-block">
                        <div className="inner-box">
                            <div className="block-image-layer" style={{ backgroundImage: "url(/assets/images/background/bg-image-16.jpg)" }}></div>
                            <div className="title">
                                <span className="icon flaticon-trees"></span>
                                <span className="txt">innovation</span>
                            </div>
                            <div className="overlay">
                                <div className="over-inner">
                                    <div className="icon-box">
                                        <span className="icon flaticon-trees"></span>
                                    </div>
                                    <h3><a href="#">innovation</a></h3>
                                    <div className="text">Innovation begins with disciplines designing together. Our engineers, architects, and designers resolve conflicts early, engineer out waste before it is built in, and make sustainability a starting condition—not an afterthought.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*History Section*/}
    <section className="history-section default-theme">
        <div className="auto-container">
            <div className="sec-title centered">
                <div className="upper-text">Why Greenrock <span className="icon flaticon-flash"></span></div>
                <h2>Our Story</h2>
                <div className="subtitle">Engineering &amp; Design Consultancy</div>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="carousel-box">

                <div className="history-carousel strnix-carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "2" }, "800":{ "items" : "2" }, "1024":{ "items" : "3" }, "1200":{ "items" : "4" }}}'>
                    <div className="slide">
                        <div className="history-block">
                            <div className="date">2022</div>
                            <div className="round-dot"></div>
                            <div className="title">Greenrock Founded</div>
                            <div className="text">Greenrock was founded on a simple conviction: the best projects come from engineering and design disciplines working together.</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="history-block">
                            <div className="date">2023</div>
                            <div className="round-dot"></div>
                            <div className="title">Integrated Practice</div>
                            <div className="text">Architecture, civil, structural, electrical, mechanical engineering, and design services came together as one accountable team.</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="history-block">
                            <div className="date">2024</div>
                            <div className="round-dot"></div>
                            <div className="title">Sustainability First</div>
                            <div className="text">Sustainability became the starting condition for every project—from materials and systems to sites, energy use, and lifecycle cost.</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="history-block">
                            <div className="date">2025</div>
                            <div className="round-dot"></div>
                            <div className="title">Complex Sectors</div>
                            <div className="text">Our integrated approach supports data centers, logistics, industrial, healthcare, laboratory, and commercial facilities.</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="history-block">
                            <div className="date">2026</div>
                            <div className="round-dot"></div>
                            <div className="title">Building What Comes Next</div>
                            <div className="text">Today, we help clients move from vision to closeout with coordinated, future-ready solutions built for people, performance, and the planet.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    

    {/*Newsletter Section*/}
    <section className="newsletter-section">
        <div className="auto-container">
            {/*Big Icon*/}
            <div className="big-icon"><span className="flaticon-solar-panel"></span></div>

            <div className="row clearfix">
                <div className="title-column col-xl-4 col-lg-12 col-md-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="inner">
                        <h2>We’re Dedicated To <br />A Sustainable Built Environment</h2>
                    </div>
                </div>
                <div className="form-column col-xl-8 col-lg-12 col-md-12">
                    <div className="inner">
                        <div className="newsletter-form">
                            <form method="post" action="https://t.commonsupport.com/strnix/contact.html">
                                <div className="row clearfix">
                                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <input id="field-1" type="text" name="field-name" value="" placeholder="Your Name" required="" />
                                            <label htmlFor="field-1"><span className="far fa-user"></span></label>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <input id="field-2" type="text" name="field-name" value="" placeholder="Your Email" required="" />
                                            <label htmlFor="field-2"><span className="far fa-envelope-open"></span></label>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <button type="submit" className="theme-btn btn-style-one"><span className="btn-title"><span className="btn-txt">Get More Info</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*Team Section*/}
    <section className="team-section default-theme">

        <div className="auto-container">
            <div className="sec-title centered">
                <div className="upper-text">Why Greenrock <span className="icon flaticon-flash"></span></div>
                <h2>Expert Team Members</h2>
                <div className="subtitle">Engineering &amp; Design Consultancy</div>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="row clearfix">
                
                {/*Team Block*/}
                <div className="team-block col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0ms"  data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image"><a href="#"><img src="/assets/images/resource/team-image-1.jpg" alt="" /></a></div>

                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="#">Alain Ndeba</a></h3>
                            <div className="info">CEO  |  Founder</div>
                        </div>
                    </div>
                </div>

                {/*Team Block*/}
                <div className="team-block col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="200ms"  data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image"><a href="#"><img src="/assets/images/resource/team-image-2.jpg" alt="" /></a></div>
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="#">Alain Ndeba</a></h3>
                            <div className="info">Marketing Manager</div>
                        </div>
                    </div>
                </div>

                {/*Team Block*/}
                <div className="team-block col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="400ms"  data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image"><a href="#"><img src="/assets/images/resource/team-image-3.jpg" alt="" /></a></div>
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="#">Alain Ndeba</a></h3>
                            <div className="info">Senior Engineer</div>
                        </div>
                    </div>
                </div>

                {/*Team Block*/}
                <div className="team-block col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="600ms"  data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image"><a href="#"><img src="/assets/images/resource/team-image-4.jpg" alt="" /></a></div>
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="#">Alain Ndeba</a></h3>
                            <div className="info">Marketing Manager</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

    {/*Fun Facts Section*/}
    <Facts />
</div>
        </div>
    );
};

export default AboutUs;