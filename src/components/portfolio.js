import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title wow fadeInUp' data-wow-delay='0.2s'>
              <span>Latest Project</span>
              <h2>
                Latest Project
                <span className='span-inline' />
              </h2>
              <p className='title-desc'>
                Here are a few of the latest projects that I have been working on.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6'>
            <div
              className='blog-item mb-50 wow fadeInLeft'
              data-wow-delay='0.2s'
            >
              <div className='blog-thumb'>
                <NavLink to='/blog-details'>
                  <img
                    src='assets/images/cryptonews.png'
                    alt='Crypto News Network'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Tuesday
                    </li>
                
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                  Latest Crypto News and Prices
                  </NavLink>
                </h5>
                <NavLink to='/blog-details'>
                  Read More
                  <i className='fa fa-fw fa-arrow-circle-right' />
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='blog-item mb-50 wow fadeInLeft'
              data-wow-delay='0.4s'
            >
              <div className='blog-thumb'>
                <NavLink to='/blog-details'>
                  <img
                    src='assets/images/contactkeeper.png'
                    alt='Keep your contacts in one place'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Wednesday
                    </li>
                   
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                  Keep All Your Contacts in One Place
                  </NavLink>
                </h5>
                <NavLink to='/blog-details'>
                  Read More
                  <i className='fa fa-fw fa-arrow-circle-right' />
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='blog-item mb-50 wow fadeInLeft'
              data-wow-delay='0.6s'
            >
              <div className='blog-thumb'>
                <NavLink to='/blog-details'>
                  <img
                    src='assets/images/findahouse.png'
                    alt='Real Estate Registry for Realtor to list and sell houses'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Saturday
                    </li>
                    
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                  A Place for Realtors to list and sell houses
                  </NavLink>
                </h5>
                <NavLink to='/blog-details'>
                  Read More
                  <i className='fa fa-fw fa-arrow-circle-right' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
