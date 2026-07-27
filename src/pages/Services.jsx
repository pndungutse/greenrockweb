import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

/** Core offerings — related services combined where it reads cleaner. */
const serviceCards = [
    {
        title: 'Architectural Design',
        text: 'Facility planning and building design for data centers, warehouses, and industrial projects.',
    },
    {
        title: 'Structural Design Engineering',
        text: 'Foundations and framing sized for high-bay, heavy industrial, and mission-critical structures.',
    },
    {
        title: 'Mechanical Design Engineering',
        text: 'HVAC, plumbing, and process support systems engineered for performance and operating cost.',
    },
    {
        title: 'Electrical Design Engineering',
        text: 'Power distribution, lighting, and electrical systems designed for reliability and density.',
    },
    {
        title: 'Systems Design & Controls',
        text: 'Systems design engineering with instrumentation and control for coordinated facility performance.',
    },
    {
        title: 'CAD Design',
        text: 'Clear, coordinated drawings and models that keep design intent ready for construction.',
    },
    {
        title: 'Project Management & Procurement',
        text: 'One accountable lead for scope, schedule, and vendor coordination through delivery.',
    },
    {
        title: 'Feasibility & Risk Assessment',
        text: 'Capital estimating, early feasibility studies, and risk reviews that inform sound project decisions.',
    },
];

const Services = () => {
    return (
        <div>
            <div className="page-wrapper">

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
            </div>
        </div>
    </div>

    <section className="page-banner">
        <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/resource/Expertise3.jpg')})` }}></div>

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

    <section className="gr-disciplines">
        <div className="auto-container">
            <div className="gr-disciplines__intro">
                <span className="gr-disciplines__eyebrow">Our Expertise</span>
                <h2>Design, systems, and project delivery under one practice.</h2>
                <p>
                    Greenrock provides architectural, structural, mechanical, and electrical design engineering, plus systems and controls, CAD, management, estimating, procurement, and risk assessment for industrial facilities.
                </p>
            </div>

            <div className="gr-disciplines__grid gr-disciplines__grid--eight">
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

    <section className="gr-practice">
        <div className="auto-container">
            <div className="gr-practice__intro">
                <span className="gr-practice__eyebrow">How we deliver</span>
                <h2>Integrated practice areas</h2>
                <p>
                    From early feasibility through coordinated design and delivery support, our team keeps industrial projects clear, buildable, and accountable.
                </p>
            </div>

            <article className="gr-practice__row">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/ArchitectureServices.jpg')} alt="Architectural and structural design for industrial facilities" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">01</span>
                    <h3>Design Engineering</h3>
                    <p className="gr-practice__lead">Architecture, structure, mechanical, electrical, and CAD</p>
                    <p>
                        We design facilities as one coordinated package. Architectural layouts, structural systems, mechanical and electrical engineering, and CAD documentation stay aligned so drawings are clear for permitting and construction.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Architectural design and facility planning</li>
                        <li>Structural, mechanical, and electrical design engineering</li>
                        <li>CAD design and coordinated documentation</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>

            <article className="gr-practice__row gr-practice__row--reverse">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/Mechanical Engineering.jpeg')} alt="Systems design and instrumentation for industrial facilities" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">02</span>
                    <h3>Systems Design & Controls</h3>
                    <p className="gr-practice__lead">Systems engineering with instrumentation and control</p>
                    <p>
                        Complex industrial facilities need more than standalone building systems. We design integrated systems and instrumentation and control strategies that support reliable operations across power, process, and building functions.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Systems design engineering</li>
                        <li>Instrumentation and control</li>
                        <li>Cross-discipline coordination for plant and facility performance</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>

            <article className="gr-practice__row">
                <div className="gr-practice__media">
                    <img src={asset('/assets/images/resource/CivilEngineering.jpeg')} alt="Project management, estimating, procurement, and risk assessment" />
                </div>
                <div className="gr-practice__body">
                    <span className="gr-practice__index">03</span>
                    <h3>Project Delivery</h3>
                    <p className="gr-practice__lead">Management, estimating, procurement, and risk</p>
                    <p>
                        Beyond drawings, Greenrock supports decisions that shape cost and schedule. We help manage delivery, prepare feasibility and capital estimates, coordinate procurement, and assess risk so projects move forward with clearer expectations.
                    </p>
                    <ul className="gr-practice__list">
                        <li>Project management</li>
                        <li>Feasibility and capital estimating</li>
                        <li>Procurement support and risk assessment</li>
                    </ul>
                    <Link to="/contacts" className="gr-practice__link">Discuss a project</Link>
                </div>
            </article>
        </div>
    </section>

    <section className="enquiry-section">
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
                                    <option>Architectural Design</option>
                                    <option>Structural Design Engineering</option>
                                    <option>Mechanical Design Engineering</option>
                                    <option>Electrical Design Engineering</option>
                                    <option>Systems Design &amp; Controls</option>
                                    <option>CAD Design</option>
                                    <option>Project Management &amp; Procurement</option>
                                    <option>Feasibility &amp; Risk Assessment</option>
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
