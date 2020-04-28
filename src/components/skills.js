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
              <span>I'm a expert on</span>
              <h2>
                Let's Work Together
                <span />
              </h2>
              <p>
                Phasellus accumsan scelerisque dolor, quis mattis justo bibendum
                non. Nulla sollicitudin turpis in elementum varius. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae
              </p>
              <div style={{ textAlign: 'left' }}>
                <a className='amike-btn bordered mt-3' href='#'>
                  My Resume
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 offset-lg-1 my-auto'>
            <div className='skill wow fadeInUp' data-wow-delay='0.2s'>
              <p>Node JS</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.4s'>
              <p>React</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '100%' }}
              >
                <span className='skill-count'>100%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.6s'>
              <p>Python</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '85%' }}
              >
                <span className='skill-count'>85%</span>
              </div>
            </div>
            <div className='skill wow fadeInUp' data-wow-delay='0.8s'>
              <p>Adobe CC</p>
              <div
                className='skill-bar wow slideInLeft animated'
                style={{ width: '90%' }}
              >
                <span className='skill-count'>90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
