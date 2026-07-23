import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ensureTemplateScripts } from '../utils/strnixScripts';
import { asset } from '../utils/publicUrl';

const faqItems = [
  {
    question: 'What services does Greenrock provide?',
    answer:
      'Greenrock provides architecture, civil engineering, structural engineering, electrical engineering, mechanical engineering, and integrated design services. Bringing these disciplines together helps us produce coordinated, buildable solutions from one accountable team.',
  },
  {
    question: 'Why use one integrated architecture and engineering team?',
    answer:
      'An integrated team identifies conflicts early, coordinates systems before construction, and keeps design decisions aligned with budget, schedule, performance, and sustainability goals. This reduces redesign, field changes, and avoidable project waste.',
  },
  {
    question: 'Which stages of a project can Greenrock support?',
    answer:
      'We can support projects from early planning and concept development through engineering, design documentation, coordination, permitting support, construction-phase assistance, and closeout. The exact scope is tailored to the needs of each project.',
  },
  {
    question: 'What types of facilities does Greenrock work on?',
    answer:
      'Our focus is data centers, warehouses and distribution facilities, and heavy industrial and manufacturing projects. We also support related commercial and specialty facilities when integrated engineering is required.',
  },
  {
    question: 'How is sustainability incorporated into the design?',
    answer:
      'Performance and operating cost are considered from the beginning, not added at the end. We evaluate site conditions, materials, structure, energy demand, HVAC and electrical systems, water use, and long-term reliability as part of an integrated design process.',
  },
  {
    question: 'Can Greenrock help with codes, permitting, and construction coordination?',
    answer:
      'Yes. Our team develops coordinated documents with applicable project requirements in mind, supports responses during review, and can remain involved during construction to clarify the design, review relevant submittals, and help protect design intent.',
  },
  {
    question: 'What information is helpful when requesting a proposal?',
    answer:
      'Share the project location, facility type, approximate size, current project phase, required disciplines, target schedule, available drawings or studies, and any known sustainability or performance goals. If some details are still unknown, we can help define the appropriate starting scope.',
  },
  {
    question: 'How do I start a project with Greenrock?',
    answer:
      'Contact us at info@greenrockeng.com or (949) 771-4943. We are based in Phoenix, Arizona. We will discuss your goals, constraints, schedule, and required disciplines, then recommend a coordinated scope and next steps.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // custom-script.js installs a jQuery accordion handler only on full refresh.
    // React owns this accordion so it behaves consistently after route changes.
    ensureTemplateScripts().then(() => {
      if (window.jQuery) {
        window.jQuery('.faq-section .accordion-box').off('click');
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  }, []);

  const toggleItem = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <>
      {/* Search Popup */}
      <div id="search-popup" className="search-popup">
        <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
        <div className="popup-inner">
          <div className="overlay-layer"></div>
          <div className="search-form">
            <form method="get" action="/">
              <div className="form-group">
                <fieldset>
                  <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                  <input type="submit" value="Search Now!" className="theme-btn" />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Page Banner Section */}
      <section className="page-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${asset('/assets/images/resource/FAQ.webp')})` }}
        ></div>
        <div className="auto-container">
          <div className="breadcrumb-box">
            <div className="auto-container">
              <ul className="bread-crumb clearfix">
                <li><Link to="/">Home</Link></li>
                <li className="active">FAQs</li>
              </ul>
            </div>
          </div>
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      {/* End Page Banner Section */}

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="auto-container">
          <div className="title-box">
            <div className="title"><span>Answers About Our Engineering And Design Services</span></div>
            <div className="send-email">
              Did not find your question? Email us at{' '}
              <a href="mailto:info@greenrockeng.com">info@greenrockeng.com</a>
            </div>
          </div>

          <div className="faq-container">
            <div className="accordion-box">
              {faqItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    className={`accordion block${isActive ? ' current active-block' : ''}`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className={`acc-btn${isActive ? ' active' : ''}`}
                      onClick={() => toggleItem(index)}
                      aria-expanded={isActive}
                    >
                      {item.question}
                      <span className="icon flaticon-cross"></span>
                    </button>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End FAQs Section */}
    </>
  );
};

export default FAQ;
