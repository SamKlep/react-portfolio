import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title wow fadeInUp' data-wow-delay='0.2s'>
            <div className='section-title underline'>
            <h2>
                Latest Projects
                <span className='span-inline' />
              </h2>
           
            </div>
              
              <p className='title-desc'>
               These are a few of the latest projects that I have built. You can check out all my full work on my <a href="/portfolio">Portfolio</a> page.
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
                <NavLink to='/single'>
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
                    {/* <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Tuesday
                    </li> */}
                
                  </ul>
                </div>
                <h5>
                  <NavLink to='/single'>
                  Get the Latest Crypto News and Prices
                  </NavLink>
                </h5>
                <NavLink to='/single'>
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
                <NavLink to='/single2'>
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
                    {/* <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Wednesday
                    </li> */}
                   
                  </ul>
                </div>
                <h5>
                  <NavLink to='/single2'>
                  Keep All Your Contacts in One Place
                  </NavLink>
                </h5>
                <NavLink to='/single2'>
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
                <NavLink to='/single3'>
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
                    {/* <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Saturday
                    </li> */}
                    
                  </ul>
                </div>
                <h5>
                  <NavLink to='single3'>
                  A Place for Realtors to List and Sell Houses
                  </NavLink>
                </h5>
                <NavLink to='single3'>
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
