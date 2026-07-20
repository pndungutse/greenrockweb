import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/publicUrl';

const Home = () => {
  // Owl / Fancybox / WOW re-init is handled globally in App (StrnixRouteEffects).
  return (
    <>
<div className="page-wrapper">

    {/* Main Header */}
   {/* <Header /> */}

    {/* End Main Header */}

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


    {/* Banner Section */}
    <section className="banner-section banner-three">
		<div className="banner-carousel strnix-carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
			{/* Slide Item */}
			<div className="slide-item">
				<div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/main-slider/6.jpg')})` }}></div>
                <div className="curve-layer"></div>

				<div className="auto-container">
					<div className="content-box">
                        <div className="content">
                            <div className="inner">
        						<h1>
                                    <span className="txt">Designing What Comes Next, Sustainably</span>
                                    <span className="bottom-dots clearfix">
                                        <span className="dot line-dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                </h1>
                                <div className="text">Greenrock unites architecture, civil, structural, electrical, and mechanical engineering with integrated design — delivering complex facilities that perform better and cost less to run.</div>
        						<div className="links-box"><Link to="/services" className="theme-btn btn-style-six"><div className="btn-title"><span className="btn-txt">Explore Our Expertise</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link></div>
                            </div>
                        </div>
					</div>  
				</div>
			</div>

			{/* Slide Item */}
            <div className="slide-item">
                <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/main-slider/15.avif')})` }}></div>
                <div className="curve-layer"></div>

                <div className="auto-container">
                    <div className="content-box">
                        <div className="content">
                            <div className="inner">
                                <h1>
                                    <span className="txt">Engineering That Answers To People, Performance &amp; The Planet</span>
                                    <span className="bottom-dots clearfix">
                                        <span className="dot line-dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                </h1>
                                <div className="text">Our engineers, architects, and designers work as one team — resolving conflicts on paper instead of on site, and engineering out waste before it&rsquo;s built in.</div>
                                <div className="links-box"><Link to="/services" className="theme-btn btn-style-six"><div className="btn-title"><span className="btn-txt">Explore Our Expertise</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link></div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            {/* Slide Item */}
            <div className="slide-item">
                <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/main-slider/8.jpg')})` }}></div>
                <div className="curve-layer"></div>

                <div className="auto-container">
                    <div className="content-box">
                        <div className="content">
                            <div className="inner">
                                <h1>
                                    <span className="txt">Green Isn&rsquo;t A Feature Of Our Work. It&rsquo;s The Foundation</span>
                                    <span className="bottom-dots clearfix">
                                        <span className="dot line-dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                </h1>
                                <div className="text">Sustainability shapes every decision we make — the materials we specify, the systems we size, and the sites we shape.</div>
                                <div className="links-box"><Link to="/services" className="theme-btn btn-style-six"><div className="btn-title"><span className="btn-txt">Explore Our Expertise</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link></div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

		</div>
    </section>
    {/*End Banner Section */}

	{/*About Section Two*/}
    <section className="about-section-two">
        <div className="upper-quote-box">
            <div className="inner clearfix">
                <div className="content wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="bg-layer"></div>
                    <div className="icon"><span className="flaticon-right-quote"></span></div>
                    <div className="text">The best projects come from disciplines that design together.</div>
                    <div className="info">The Greenrock Conviction</div>
                </div>
            </div>
        </div>
        <div className="auto-container">
            <div className="row clearfix">
                {/*Image Column*/}
                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="sec-title bio-theme wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="1500ms">
                            <div className="upper-text">Who We Are <span className="icon flaticon-flash"></span></div>
                            <h2>The built environment is changing. We help our clients stay ahead of it.</h2>
                            <div className="subtitle">Engineering &amp; Design Consultancy</div>
                            <div className="bottom-dots clearfix">
                                <span className="dot line-dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className="image-box wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="1500ms">
                            <figure className="image"><img src={asset('/assets/images/resource/ImageAlone.jpg')} alt="" /></figure>
                        </div>
                    </div>
                </div>
                {/*Text Column*/}
                <div className="text-column col-lg-7 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="text-content wow fadeInLeft" data-wow-delay="300ms"  data-wow-duration="1000ms">
                            <p>Greenrock Engineering and Design Services was founded on a simple conviction: the best projects come from disciplines that design together. Our engineers, architects, and designers work as one team — resolving conflicts on paper instead of on site, engineering out waste before it&rsquo;s built in, and treating sustainability as a starting condition, not a certificate.</p>
                            <p>We bring a client&rsquo;s-eye view to every engagement — responsive, direct, and accountable for outcomes, not just drawings.</p>
                        </div>
                        <div className="featured-list wow fadeInLeft" data-wow-delay="600ms"  data-wow-duration="2000ms">
                            <ul className="clearfix">
                                <li>
                                    <span className="icon flaticon-nuclear-plant-3"></span>
                                    <span className="txt">One integrated team from concept to closeout</span>
                                </li>
                                <li>
                                    <span className="icon flaticon-settings-2"></span>
                                    <span className="txt">Sustainability as a starting condition, not a certificate</span>
                                </li>
                                <li>
                                    <span className="icon flaticon-fuel-station"></span>
                                    <span className="txt">Accountable for outcomes, not just drawings</span>
                                </li>
                            </ul>
                        </div>
                        <div className="link-box wow fadeInLeft" data-wow-delay="500ms"  data-wow-duration="2000ms"><Link to="/contacts" className="theme-btn btn-style-seven"><div className="btn-title"><span className="btn-txt">Get More Info</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link></div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    {/*Services Section Three*/}
    <section className="services-section-three">
        <div className="bg-layer"></div>

        <div className="curve-layer">
            <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-7.jpg')})` }}></div>
        </div>

        <div className="auto-container">
            <div className="sec-title bio-theme">
                <div className="upper-text">Our Expertise <span className="icon flaticon-flash"></span></div>
                <h2>Our Expertise</h2>
                <div className="subtitle">OurDisciplines. One Integrated Practice.</div>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div className="row clearfix">
                {/*Service Block Four*/}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-chimney-1"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Architecture</Link></h3>
                                <div className="subtitle">Building Design</div>
                            </div>
                            <div className="text">Human-centered, energy-conscious building design — spaces that work beautifully for the people inside them and tread lightly on everything outside ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>

                {/*Service Block Four*/}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="500ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-oil"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Civil Engineering</Link></h3>
                                <div className="subtitle">Site &amp; Infrastructure</div>
                            </div>
                            <div className="text">Site development, grading, drainage, and infrastructure that manage water wisely, protect the land, and support resilient communities ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>


                {/* Service Block Four
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="1000ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-settings-2"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Design Services</Link></h3>
                                <div className="subtitle">Concept To Documentation</div>
                            </div>
                            <div className="text">Concept development, planning, and complete design documentation — turning project vision into clear, buildable, sustainable plans ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className="row clearfix">
                {/*Service Block Four*/}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-wellness-logo"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Structural Engineering</Link></h3>
                                <div className="subtitle">Structural Systems</div>
                            </div>
                            <div className="text">Safe, efficient structural systems that use material intelligently — cutting embodied carbon without compromising strength or code compliance ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>

                {/*Service Block Four*/}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="500ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-nuclear-2"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Electrical Engineering</Link></h3>
                                <div className="subtitle">Power &amp; Lighting</div>
                            </div>
                            <div className="text">Power distribution, lighting, and low-voltage systems engineered for efficiency — including renewable-ready designs that cut energy use and cost ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>

                {/*Service Block Four*/}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="1000ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="flaticon-system"></span>
                        </div>
                        <div className="lower-box">
                            <div className="title">
                                <h3><Link to="/services">Mechanical Engineering</Link></h3>
                                <div className="subtitle">HVAC &amp; Building Systems</div>
                            </div>
                            <div className="text">HVAC, plumbing, and building systems designed around comfort and conservation — lowering emissions and lifecycle cost from the first calculation ...</div>
                        </div>
                        <div className="link-box">
                            <Link to="/services"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </section>

    {/*Call To Action Two*/}
    <section className="call-to-action-two">
        <div className="bg-layer"></div>

        <div className="auto-container">
            <div className="row clearfix">
                <div className="title-column col-xl-8 col-lg-12 col-md-12">
                    <div className="inner wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <h2>One Accountable Team From Concept To Closeout — Engineered For Sustainability</h2>
                    </div>
                </div>
                <div className="links-column col-xl-4 col-lg-12 col-md-12">
                    <div className="inner wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="links-box">
                            <Link to="/about-us" className="theme-btn btn-style-seven"><div className="btn-title"><span className="btn-txt">Get More Info</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*Projects Section Two*/}
    <section className="projects-section-two">
        <div className="auto-container">
            <div className="row clearfix">
                {/*Title Column*/}
                <div className="title-column col-xl-3 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="sec-title bio-theme">
                            <div className="upper-text">Sectors We Serve <span className="icon flaticon-flash"></span></div>
                            <h2>Sectors We Serve</h2>
                            <div className="subtitle">Complex Facilities Are Where Integration Pays Off</div>
                            <div className="bottom-dots clearfix">
                                <span className="dot line-dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className="text">
                            Data centers, warehouses, and mission-critical properties demand every discipline working in lockstep — exactly how Greenrock is built.
                        </div>
                        <div className="link-box">
                            <Link to="/projects"><span className="txt">All Sectors</span> <span className="icon flaticon-arrows-11"></span></Link>
                        </div>
                    </div>
                </div>
                {/*Carousel Column*/}
                <div className="carousel-column col-xl-9 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="projects-carousel strnix-carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "center": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "2" }, "800":{ "items" : "2" }, "1200":{ "items" : "3" }, "1600":{ "items" : "3" }}}'>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/5.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/5.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Data Centers</Link></h3>
                                            <div className="cat">Mission-Critical</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/6.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/6.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Warehouses &amp; Distribution</Link></h3>
                                            <div className="cat">Logistics</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/7.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/7.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Industrial &amp; Manufacturing</Link></h3>
                                            <div className="cat">Industry</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/5.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/5.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Healthcare Facilities</Link></h3>
                                            <div className="cat">Health</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/6.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/6.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Laboratories &amp; R&amp;D</Link></h3>
                                            <div className="cat">Science</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Project Block*/}
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <img src={asset('/assets/images/gallery/7.jpg')} alt="" />
                                        </div>
                                        <div className="overlay">
                                            <div className="over-inner">
                                                <div className="zoom-btn">
                                                    <a href={asset('/assets/images/gallery/7.jpg')} className="lightbox-image" data-fancybox="project-gallery">
                                                        <span className="fa fa-search-plus"></span>
                                                    </a>
                                                </div>
                                                <div className="more-link">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption-box">
                                        <div className="caption-inner">
                                            <h3><Link to="/projects">Commercial &amp; Office</Link></h3>
                                            <div className="cat">Property</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>


    {/*Featured Section*/}
    <section className="featured-section">
        <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-8.jpg')})` }}></div>
        <div className="auto-container">
            <div className="content-box wow fadeInUp" data-wow-delay="0ms"  data-wow-duration="2000ms">
                <div className="row clearfix">
                    {/*Featured Block*/}
                    <div className="featured-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="title">
                                <h3>
                                    <span className="icon flaticon-fire"></span> 
                                    <span className="txt">Energy-Efficient Design</span>
                                </h3>
                            </div>
                            <div className="text">Envelopes, systems, and lighting engineered to minimize energy demand from day one.</div>
                            <div className="link-box">
                                <a href="#"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                    {/*Featured Block*/}
                    <div className="featured-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="title">
                                <h3>
                                    <span className="icon flaticon-oil-2"></span> 
                                    <span className="txt">Water &amp; Site Stewardship</span>
                                </h3>
                            </div>
                            <div className="text">Smart drainage, stormwater management, and site design that protect natural resources.</div>
                            <div className="link-box">
                                <a href="#"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                    {/*Featured Block*/}
                    <div className="featured-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="title">
                                <h3>
                                    <span className="icon flaticon-nature"></span> 
                                    <span className="txt">Future-Ready Compliance</span>
                                </h3>
                            </div>
                            <div className="text">Designs that meet today&rsquo;s codes and anticipate tomorrow&rsquo;s environmental standards.</div>
                            <div className="link-box">
                                <a href="#"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*Fun Facts Section*/}
    <section className="fun-facts-section bio-theme">
        <div className="bg-pattern-layer"></div>

        <div className="fact-counter">
            <div className="auto-container">

                <div className="row clearfix">
                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="6">0</span> Disciplines</div>
                            <div className="counter-title">Engineering &amp; Design, Integrated</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="1">0</span> Team</div>
                            <div className="counter-title">Accountable From Concept To Closeout</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="100">0</span>%</div>
                            <div className="counter-title">Of Projects With Sustainability Targets</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="2500" data-stop="100">0</span>%</div>
                            <div className="counter-title">Design, Documentation &amp; Delivery Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*Testimonial Section*/}
    <section className="testimonial-section-two">
        <div className="auto-container">
            <div className="sec-title centered bio-theme">
                <div className="upper-text">Who We Work With <span className="icon flaticon-flash"></span></div>
                <h2>Who We Work With</h2>
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
                            <div className="testi-info">
                                <div className="testi-thumb">
                                    <img src={asset('/assets/images/resource/author-thumb-5.jpg')} alt="" />
                                </div>
                                <div className="info"><span>General Contractors</span></div>
                                <div className="designation">Client Partners</div>
                            </div>
                            <div className="content">
                                <div className="text">We plan and design around your goals — with the responsiveness and urgency of a firm that treats your schedule as its own. Our integrated team resolves conflicts on paper instead of on site, keeping builds moving.</div>
                            </div>
                        </div>
                    </div>
                    {/*Slide*/}
                    <div className="slide-item">
                        <div className="inner">
                            <div className="testi-info">
                                <div className="testi-thumb">
                                    <img src={asset('/assets/images/resource/author-thumb-5.jpg')} alt="" />
                                </div>
                                <div className="info"><span>Developers</span></div>
                                <div className="designation">Client Partners</div>
                            </div>
                            <div className="content">
                                <div className="text">From concept to closeout, one accountable team delivers complete, code-compliant drawings and specifications — ready for permitting and construction the first time, protecting pro formas and timelines.</div>
                            </div>
                        </div>
                    </div>
                    {/*Slide*/}
                    <div className="slide-item">
                        <div className="inner">
                            <div className="testi-info">
                                <div className="testi-thumb">
                                    <img src={asset('/assets/images/resource/author-thumb-5.jpg')} alt="" />
                                </div>
                                <div className="info"><span>Government &amp; Public Agencies</span></div>
                                <div className="designation">Client Partners</div>
                            </div>
                            <div className="content">
                                <div className="text">Designs that meet today&rsquo;s codes and anticipate tomorrow&rsquo;s environmental standards — protecting public resources, lowering lifecycle cost, and delivering long-term asset value.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    {/*Contact Section*/}
    <section className="contact-section">
        <div className="map-image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/map-bg.jpg')})` }}></div>
        <div className="auto-container">
            <div className="content-box clearfix wow fadeInUp" data-wow-delay="0ms"  data-wow-duration="2000ms">
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
                        <form method="post" action="https://t.commonsupport.com/strnix/contact.html">
                            <div className="row clearfix">                                    
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="field-name" placeholder="Your Name" required="" />
                                </div>
                                
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="field-name" placeholder="Email" required="" />
                                </div>
        
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="field-name" placeholder="Subject" required="" />
                                </div>

                                <div className="col-md-12 col-sm-12 form-group">
                                    <textarea name="field-name" placeholder="Message"></textarea>
                                </div>
        
                                <div className="col-md-12 col-sm-12 form-group">
                                    <button type="submit" className="theme-btn btn-style-eight"><span className="btn-title"><span className="btn-txt">Send Request</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="image-layer" style={{ backgroundImage: `url(${asset('/assets/images/background/bg-image-9.jpg')})` }}>
                    <div className="info-box wow fadeInUp" data-wow-delay="1000ms"  data-wow-duration="1000ms">
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


    {/*News Section*/}
    <section className="news-section style-three">
        <div className="auto-container">
            <div className="sec-title centered bio-theme">
                <div className="upper-text">News &amp; Insights <span className="icon flaticon-flash"></span></div>
                <h2>News &amp; Insights</h2>
                <div className="subtitle">Ideas &amp; Insights From Our Team</div>
                <div className="bottom-dots clearfix">
                    <span className="dot line-dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="row clearfix">
                {/*News Block*/}
                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <a href="blog-single.html"><img src={asset('/assets/images/resource/blog-image-1.jpg')} alt="" /></a></figure>
                            <div className="post-date">
                                <span className="day">18</span><span className="month">Sep</span>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="blog-single.html">Why Integrated Design Cuts Cost Before Construction</a></h3>
                            <div className="meta-info">By <a href="#">Greenrock</a> &nbsp;|&nbsp; <a href="#">Engineering</a>, <a href="#">Design</a></div>
                            <div className="link-box">
                                <a href="blog-single.html"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*News Block*/}
                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="300ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <a href="blog-single.html"><img src={asset('/assets/images/resource/blog-image-2.jpg')} alt="" /></a></figure>
                            <div className="post-date">
                                <span className="day">10</span><span className="month">Sep</span>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="blog-single.html">Designing Data Centers For Efficiency And Uptime</a></h3>
                            <div className="meta-info">By <a href="#">Greenrock</a> &nbsp;|&nbsp; <a href="#">Engineering</a>, <a href="#">Design</a></div>
                            <div className="link-box">
                                <a href="blog-single.html"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*News Block*/}
                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="600ms"  data-wow-duration="2000ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <a href="blog-single.html"><img src={asset('/assets/images/resource/blog-image-3.jpg')} alt="" /></a></figure>
                            <div className="post-date">
                                <span className="day">31</span><span className="month">Aug</span>
                            </div>
                        </div>
                        <div className="lower-box">
                            <h3><a href="blog-single.html">Sustainability As A Starting Condition, Not A Certificate</a></h3>
                            <div className="meta-info">By <a href="#">Greenrock</a> &nbsp;|&nbsp; <a href="#">Engineering</a>, <a href="#">Design</a></div>
                            <div className="link-box">
                                <a href="blog-single.html"><span className="txt">Read More</span> <span className="icon flaticon-arrows-11"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>


    {/*Call To Action Three*/}
    <section className="call-to-action-three">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="title-column col-xl-7 col-lg-12 col-md-12">
                    <div className="inner wow fadeInLeft" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="subtitle">Start The Conversation</div>
                        <h2>Let&rsquo;s engineer your next project — the sustainable way</h2>
                    </div>
                </div>
                <div className="links-column col-xl-5 col-lg-12 col-md-12">
                    <div className="inner wow fadeInRight" data-wow-delay="0ms"  data-wow-duration="2000ms">
                        <div className="links-box">
                            <Link to="/contacts" className="theme-btn btn-style-seven"><div className="btn-title"><span className="btn-txt">Start A Project</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link>
                            <Link to="/contacts" className="theme-btn btn-style-eight"><div className="btn-title"><span className="btn-txt">Get a Quote</span><span className="btn-icon"><span className="icon flaticon-arrows-11"></span> </span></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Main Footer / Style Three*/}
    {/* <Footer /> */}

</div>
{/*End pagewrapper*/}
    </>
  );
};

export default Home;
