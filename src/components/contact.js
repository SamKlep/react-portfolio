import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title wow fadeInUp' data-wow-delay='0.2s'>
              <span>Have Any Query?</span>
              <h2>
                Contact Me
                <span className='span-inline' />
              </h2>
              <p className='title-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum standard dummy text.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='address wow fadeInLeft' data-wow-delay='0.2s'>
              <a href='#'>
                <i className='fa-fw fa fa-map-marker' />
                <span>Locate Me</span>
                <p>Houston, TX</p>
              </a>
            </div>
          </div>
          <div className='col-lg-4 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='address'>
              <a href='#'>
                <i className='fa-fw fa fa-phone' />
                <span>Give me a call</span>
                <p>Phone: (713) 376 - 9541</p>
              </a>
            </div>
          </div>
          <div className='col-lg-4 wow fadeInRight' data-wow-delay='0.2s'>
            <div className='address'>
              <a href='#'>
                <i className='fa-fw fa fa-envelope-o' />
                <span>Get in online</span>
                <p>samklepdev@gmail.com</p>
              </a>
            </div>
          </div>
          <div className='col-lg-12'>
            <form
              action='mailto:samklepdev@gmail.com'
              method='post'
              className='wow fadeInUp'
              data-wow-delay='0.4s'
              noValidate='novalidate'
            >
              <div className='contactform'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input
                      type='text'
                      name='your-name'
                      aria-required='true'
                      aria-invalid='false'
                      placeholder='Your Name'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <input
                      type='email'
                      name='email'
                      aria-required='true'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='col-lg-12'>
                    <input
                      type='text'
                      name='subject'
                      aria-required='true'
                      placeholder='Your Subject'
                    />
                    <textarea
                      name='textarea'
                      aria-required='true'
                      placeholder='Your Message'
                      defaultValue={''}
                    />
                    <input
                      type='submit'
                      defaultValue='Send Message'
                      className='wpcf7-form-control wpcf7-submit'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
