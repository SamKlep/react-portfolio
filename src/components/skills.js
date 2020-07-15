import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className='section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5 my-auto wow fadeInUp' data-wow-delay='0.2s'>
            <div
              className='section-title mb-lg-0 mb-md-5'
              style={{ textAlign: 'left' }}
            >
              <span>SKills</span>
              <h2>
                Anything Tech
                <span />
              </h2>
              <p>
                Since the early days of the internet, I have been exploring the world wide web with great awe and enthusiasm. Often overwhelmed by the amount of information at my fingertips, I found the time to teach myself a lot of the basics of many programming languages-- though I did not get fully organized unil I completed my coursework at Digital Crafts.
              </p>
              <div style={{ textAlign: 'left' }}>
                <a className='amike-btn bordered mt-3' href='/assets/images/S.KlepperResume.pdf' download>
                  Download My Resume
                </a>
				
              </div>
            </div>
          </div>
          <div className='col-lg-6 offset-lg-1 my-auto'>
            <div className='skill wow fadeInUp' data-wow-delay='0.2s'>
              <p>Node JS, Express, React, Redux</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.4s'>
              <p>MongoDB, PostgreSQL</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.6s'>
              <p>Python, Django, MicroPython</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.8s'>
              <p>Arduino, Raspberry Pi, IoT, Node Red</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;