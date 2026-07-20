import React, { useEffect } from 'react';
import { setupStrnixCounters } from '../utils/strnixScripts';

const Facts = () => {
    useEffect(() => {
        setupStrnixCounters().catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
        });
    }, []);

    return (
        <div>
            <section className="fun-facts-section default-style">
        <div className="bg-pattern-layer"></div>

        <div className="fact-counter">
            <div className="auto-container">

                <div className="row clearfix">
                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="2">0</span>+ Years</div>
                            <div className="counter-title">Of Experience & Record</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="2500" data-stop="4">0</span>+</div>
                            <div className="counter-title">Projects Completed</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="1000" data-stop="15">0</span>+</div>
                            <div className="counter-title">Partnering Companies</div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner">
                            <div className="icon-box"><span className="icon flaticon-flash"></span></div>
                            <div className="count-box"><span className="count-text" data-speed="2500" data-stop="91">0</span>%</div>
                            <div className="counter-title">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Facts;
