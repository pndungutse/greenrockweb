import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const serviceCards = [
    {
        title: 'Architecture',
        text: 'Industrial and mission-critical building design for data centers, warehouses, and process facilities.',
    },
    {
        title: 'Civil Engineering',
        text: 'Site development, grading, drainage, and infrastructure for large industrial campuses.',
    },
    {
        title: 'Structural Engineering',
        text: 'Efficient structural systems for high-bay warehouses, heavy industrial plants, and critical facilities.',
    },
    {
        title: 'Electrical Engineering',
        text: 'Power distribution, lighting, and low-voltage systems engineered for reliability and operating cost.',
    },
    {
        title: 'Mechanical Engineering',
        text: 'HVAC, plumbing, and process support systems sized for industrial and data center performance.',
    },
    {
        title: 'Design Services',
        text: 'Concept development, planning, and documentation that turn project goals into clear, buildable plans.',
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

    <section className="gr-disciplines">
        <div className="auto-container">
            <div className="gr-disciplines__intro">
                <span className="gr-disciplines__eyebrow">Our Expertise</span>
                <h2>Six disciplines. One integrated practice.</h2>
                <p>
                    Greenrock unites architecture, civil, structural, electrical, and mechanical engineering with integrated design for data centers, warehouses, and heavy industrial projects.
                </p>
            </div>

            <div className="gr-disciplines__grid">
                {serviceCards.map((service, index) => (
                    <article className="gr-disciplines__card" key={service.title}>
                        <span className="gr-disciplines__num">{String(index + 1).padStart(2, '0')}</span>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                        <Link to="/contacts" className="gr-disciplines__link">Learn more</Link>
                    </article>
                ))}
            </div>

            <div className="gr-disciplines__footer">
                Based in Phoenix, Arizona. Call or email us at{' '}
                <a href="tel:+19497714943">(949) 771-4943</a>
            </div>
        </div>
    </section>

    {/* Practice areas — clean alternating layout */}
    <section className="gr-practice">
        <div className="auto-container">
            <div className="gr-practice__intro">
                <span className="gr-practice__eyebrow">How we deliver</span>
                <h2>Integrated practice areas</h2>
                <p>
                    From concept through documentation, our disciplines work as one team on data centers, warehouses, and heavy industrial facilities.
                </p>
            </div>

            <article className="gr-practice__row">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/ArchitectureServices.jpg')} alt="Architecture and design for industrial facilities" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">01</span>
                    <h3>Architecture and Design</h3>
                    <p className="gr-practice__lead">Industrial and mission-critical building design</p>
                    <p>
                        Concept development, planning, and clear documentation for data centers, warehouses, and industrial facilities. We focus on buildable drawings that support schedule, cost, and operations from day one.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Facility planning and space programming</li>
                        <li>Design documentation for permitting and construction</li>
                        <li>Coordination with engineering disciplines</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>

            <article className="gr-practice__row gr-practice__row--reverse">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/CivilEngineering.jpeg')} alt="Civil and structural engineering for industrial campuses" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">02</span>
                    <h3>Civil and Structural Engineering</h3>
                    <p className="gr-practice__lead">Sites and structures for industrial campuses</p>
                    <p>
                        Site development, grading, drainage, and structural systems sized for high-bay warehouses, heavy industrial plants, and mission-critical facilities where reliability and constructability matter.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Site grading, utilities, and stormwater</li>
                        <li>Foundations and structural framing</li>
                        <li>Heavy industrial and high-bay structures</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>

            <article className="gr-practice__row">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/Mechanical Engineering.jpeg')} alt="Electrical and mechanical systems for industrial facilities" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">03</span>
                    <h3>Electrical and Mechanical Engineering</h3>
                    <p className="gr-practice__lead">Power, cooling, and building systems</p>
                    <p>
                        Power distribution, lighting, HVAC, and plumbing engineered for reliability, density, and operating cost on industrial and data center projects. Systems are coordinated early to reduce field conflicts.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Power distribution and lighting design</li>
                        <li>HVAC and process cooling support</li>
                        <li>Plumbing and building systems coordination</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>
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