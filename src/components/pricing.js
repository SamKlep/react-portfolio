import React from 'react';

const Pricing = () => {
  
    return (

      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title underline">
                <span>CHOOSE A PLAN</span>
                <h2>Pricing Plan<span className="span-inline" /></h2>
                <p className="title-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="amike-pricing-table wow fadeInLeft" data-wow-delay="0.2s">
                <h4 className="type elementor-inline-editing">Basic</h4>
                <div className="position-relative">
                  <h1 className="amike-price elementor-inline-editing">50 </h1>
                  <span className="amike-currency fa fa-dollar" />
                </div>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <a className="elementor-inline-editing amike-btn bordered" href="#">Purchase</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="amike-pricing-table recommended wow fadeInLeft" data-wow-delay="0.4s">
                <h4 className="type elementor-inline-editing">Standard</h4>
                <div className="position-relative">
                  <h1 className="amike-price elementor-inline-editing">80 </h1>
                  <span className="amike-currency fa fa-dollar" />
                </div>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <a className="elementor-inline-editing amike-btn bordered" href="#">Purchase</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="amike-pricing-table wow fadeInLeft" data-wow-delay="0.6s">
                <h4 className="type elementor-inline-editing">Premium</h4>
                <div className="position-relative">
                  <h1 className="amike-price elementor-inline-editing">160 </h1>
                  <span className="amike-currency fa fa-dollar" />
                </div>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <a className="elementor-inline-editing amike-btn bordered" href="#">Purchase</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }

  export default Pricing;