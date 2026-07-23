import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Home = () => {
  return (
    <>
      <div className="page-wrapper">

        <section className="banner-section banner-three">
          <div
            className="banner-carousel strnix-carousel owl-theme owl-carousel"
            data-options='{"loop": false, "margin": 0, "autoheight":true, "lazyload":true, "nav": false, "dots": false, "autoplay": false, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'
          >
            <div className="slide-item">
              <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/resource/Datacenter1.jpg')})` }}></div>
              <div className="curve-layer"></div>
              <div className="auto-container">
                <div className="content-box">
                  <div className="content">
                    <div className="inner">
                      <h1>
                        <span className="txt">Engineering for data centers, warehouses, and heavy industry</span>
                      </h1>
                      <div className="text">
                        Greenrock delivers integrated architecture and engineering for complex industrial facilities in Phoenix, Arizona and beyond.
                      </div>
                      <div className="links-box">
                        <Link to="/services" className="theme-btn btn-style-six">
                          <div className="btn-title">
                            <span className="btn-txt">Our Services</span>
                            <span className="btn-icon"><span className="icon flaticon-arrows-11"></span></span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-two">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="image-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="sec-title bio-theme wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="upper-text">Who We Are</div>
                    <h2>One team for complex industrial projects</h2>
                    <div className="bottom-dots clearfix">
                      <span className="dot line-dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <div className="image-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <figure className="image">
                      <img src={asset('/assets/images/resource/Warehouse.webp')} alt="Greenrock engineering team" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="text-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="text-content wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1000ms">
                    <p>
                      Greenrock Engineering and Design Services brings architecture, civil, structural, electrical, and mechanical engineering together under one practice. We focus on data centers, warehouses, distribution, and heavy industrial facilities where coordination across disciplines matters most. These projects demand tight integration of power, cooling, structure, and site design, and that is exactly how our team is built to work.
                    </p>
                    <p>
                      Based in Phoenix, Arizona, we work as a single accountable team from concept through documentation, so conflicts are resolved on paper before they reach the site. Clients gain one point of contact, clearer drawings, and fewer surprises during construction. Whether the scope is a new facility or a complex renovation, we stay involved through coordination and delivery support so the design intent holds up in the field.
                    </p>
                  </div>
                  <div className="link-box wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="2000ms">
                    <Link to="/about-us" className="theme-btn btn-style-seven">
                      <div className="btn-title">
                        <span className="btn-txt">About Greenrock</span>
                        <span className="btn-icon"><span className="icon flaticon-arrows-11"></span></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section-two gr-sectors">
          <div className="auto-container">
            <div className="sec-title bio-theme centered">
              <div className="upper-text">Sectors</div>
              <h2>Where we work</h2>
              <div className="subtitle">Heavy industrial and mission-critical facilities</div>
              <div className="bottom-dots clearfix">
                <span className="dot line-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="sector-card">
                  <span className="sector-label">Mission-critical</span>
                  <h3>Data Centers</h3>
                  <p>Power, cooling, structure, and site design coordinated for uptime, density, and constructability.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                <div className="sector-card">
                  <span className="sector-label">Logistics</span>
                  <h3>Warehouses and Distribution</h3>
                  <p>High-bay industrial shells, site logistics, and building systems sized for operations and growth.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="sector-card">
                  <span className="sector-label">Industry</span>
                  <h3>Heavy Industrial</h3>
                  <p>Manufacturing and process facilities that need durable structures and tightly integrated MEP.</p>
                </div>
              </div>
            </div>
            <div className="text-center" style={{ marginTop: 40 }}>
              <Link to="/services" className="theme-btn btn-style-seven">
                <div className="btn-title">
                  <span className="btn-txt">View Our Expertise</span>
                  <span className="btn-icon"><span className="icon flaticon-arrows-11"></span></span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="call-to-action-three">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="title-column col-xl-7 col-lg-12 col-md-12">
                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="2000ms">
                  <div className="subtitle">Phoenix, Arizona</div>
                  <h2>Ready to talk about your next facility?</h2>
                </div>
              </div>
              <div className="links-column col-xl-5 col-lg-12 col-md-12">
                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="2000ms">
                  <div className="links-box">
                    <Link to="/contacts" className="theme-btn btn-style-seven">
                      <div className="btn-title">
                        <span className="btn-txt">Get In Touch</span>
                        <span className="btn-icon"><span className="icon flaticon-arrows-11"></span></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
