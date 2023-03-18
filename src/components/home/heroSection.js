import { Link } from 'gatsby';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const HeroSection = () => {
  return (
    <ScrollAnimation
    animateIn="animate__fadeIn"
    animateOut="animate__fadeOut"
     >
      <section className="slider-area hero-height position-relative fix" style={{ backgroundImage: "url(/assets/img/slider/hero2.png)" }}>
        <img className="shape-3 d-none d-xxl-block" src="/assets/img/shape/shape-03.png" alt="img not found" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-9">
              <div className="hero-text pt-95">
                <h1>Islamic Day <span className="down-mark-line">School</span> For Children Aged 3 to 12</h1>
                <p>To educate, inspire and empower our nation's young people into future Scholars and Orators of the Islamic faith
                  who also equally contribute towards the local wider community as Leaders and professionals in their respective fields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
    );
};

export default HeroSection;