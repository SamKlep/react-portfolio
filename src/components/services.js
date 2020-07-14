import React from 'react';

const Services = () => {
  return (
    <section id='services' className='section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title underline'>
              <span>Services</span>
              <h2>
                My Services <span className='span-inline' />
              </h2>
              <p className='title-desc'>
                As a full-stack web developer, I offer a wide range of custom
                web solutions. With maximum effort and attention to detail, I
                create web apps, services, and sites that accurately answer your
                expectations and satisfy the specific needs of your company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='0.2s'>
              <div className='item-service-icon'>
                <i className='fa fa-github' aria-hidden='true' />
              </div>
              <div className='item-service-content'>
                <h5>Web Development</h5>
                <p>
                  Full-stack functionality that features user-friendly design
                  and clear navigation
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='0.4s'>
              <div className='item-service-icon'>
                <i className='fa fa-image' aria-hidden='true' />
              </div>
              <div className='item-service-content'>
                <h5>Graphic Design</h5>
                <p>
                  Professional production design that inspires, informs and
                  dazzles the viewer
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='0.6s'>
              <div className='item-service-icon'>
                <i className='fa fa-codepen' aria-hidden='true' />
              </div>
              <div className='item-service-content'>
                <h5>Web Design</h5>
                <p>
                  Modern approach to responsive design that always has the UI/UX
                  and end result in mind
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='0.8s'>
              <div className='item-service-icon'>
                <i className='fa fa-apple' aria-hidden='true' />
              </div>
              <div className='item-service-content'>
                <h5>App Developing</h5>
                <p>
                  From design to deployment, cross-platform compatability will
                  always be a central focus
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='1s'>
              <div className='item-service-icon'>
                <i className='fa fa-camera' aria-hidden='true' />
              </div>
              <div className='item-service-content'>
                <h5>Photography</h5>
                <p>
                  Creative eye for design that captivates the viewer with every
                  shot
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='item-service wow fadeInLeft' data-wow-delay='1.2s'>
              <div className='item-service-icon'>
                <i className='fa fa-search-plus' />
              </div>
              <div className='item-service-content'>
                <h5>SEO Expert</h5>
                <p>
                  Always optimizing content for the best placement in search
                  engine queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
