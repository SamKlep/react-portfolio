import React from 'react';

const About = () => {
  return (
    <section id='about' className='section-padding alt-color'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title underline'>
              <h2>About Me</h2>
           
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-5 text-center wow fadeInLeft'
            data-wow-delay='0.2s'
          >
            <img
              id='sam-face'
              src='/assets/images/sam-face1.png'
              title='me-01'
              alt='me-01'
            />
          </div>
          <div
            className='col-lg-7 my-auto wow fadeInRight'
            data-wow-delay='0.2s'
          >
            <br></br>
            <div className='about-me-description'>
            <p className='title-desc'>
                When not busy researching the latest trends in Javascript and web development, I like to enjoy the great outdoors as much as possible with my lovely canine companion.   I also enjoy taking care of my 3 cats, a good science-fiction book and listening to enjoyable music. Keeping a balanced life outside of programming allows me to perform better and stay focused. 
              </p>
              <br />
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
                  <p>https://www.linkedin.com/in/samuel-klepper-0435b5193/</p>
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
