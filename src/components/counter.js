import React from 'react';

const Counter = () => {

    return (

      <section className="section-padding-100 alt-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter text-center wow fadeInLeft" data-wow-delay="0.2s">
                <i className="fa fa-users fa-fw" aria-hidden="true" />
                <h2 className="count">47</h2>
                <span>Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter text-center wow fadeInLeft" data-wow-delay="0.4s">
                <i className="fa fa-codepen fa-fw" aria-hidden="true" />
                <h2 className="count">64</h2>
                <span>Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter text-center wow fadeInLeft" data-wow-delay="0.6s">
                <i className="fa fa-diamond fa-fw" aria-hidden="true" />
                <h2 className="count">16</h2>
                <span>Awards</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter text-center wow fadeInLeft" data-wow-delay="0.8s">
                <i className="fa fa-github fa-fw" aria-hidden="true" />
                <h2 className="count">10</h2>
                <span>Years Experirnce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }


export default Counter;