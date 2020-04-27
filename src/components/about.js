import React from 'react';

const About = () => {
  return (
    <section id='about' className='section-padding alt-color'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title underline'>
              <h2>About Me</h2>
              <p className='title-desc'>
                Science fiction enthusiast, free on the weekends text of the
                printing and typesetting industry. Lorem Ipsum standard dummy
                text.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-5 text-center wow fadeInLeft'
            data-wow-delay='0.2s'
          >
            <img src='assets/images/self-nobg.png' title='me-01' alt='me-01' />
          </div>
          <div
            className='col-lg-7 my-auto wow fadeInRight'
            data-wow-delay='0.2s'
          >
            <h3>
              <strong>Hi There</strong>
            </h3>
            <div className='about-me-description'>
              <p>
                Full grown male, at your service. Nullam posuere fermentum
                mattis. Nunc id dui at sapien faucibus fermentum ut vel diam.
                Nullam tempus, nunc id efficitur sagittis, urna est ultricies
                eros, ac porta sem turpis
              </p>
              <p>
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </p>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='contact-info'>
                  <strong>
                    <span>Name:</span>
                  </strong>
                  <p>Samuel Klepper</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='contact-info'>
                  <strong>
                    <span>Email:</span>
                  </strong>
                  <p>samklepdev@gmail.com</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='contact-info'>
                  <strong>
                    <span>Phone:</span>
                  </strong>
                  <p>(713) 376 - 9541 </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='contact-info'>
                  <strong>
                    <span>LinkedIn:</span>
                  </strong>
                  <p>sambo123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
