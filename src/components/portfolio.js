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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum standard dummy text.
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
                    src='assets/images/blog-1.jpg'
                    alt='Ten Secrets You Will Not Want To Know'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='#'> admin</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Tuesday
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-comments' />3
                    </li>
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                    Ten Secrets You Will Not Want To Know
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
                    src='assets/images/blog-2.jpg'
                    alt='You’ve gotta dance like there’s nobody watching'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='#'> admin</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Wednesday
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-comments' />3
                    </li>
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                    You’ve gotta dance like there’s nobody watching
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
                    src='assets/images/blog-3.jpg'
                    alt='I must explain to you how all this mistaken idea'
                  />
                </NavLink>
              </div>
              <div className='blog-content s-blog-content'>
                <div className='blog-meta mb-15'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <i className='fa fa-user' />
                      By<a href='#'> admin</a>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-calendar-o' />
                      Saturday
                    </li>
                    <li className='list-inline-item'>
                      <i className='fa fa-comments' />3
                    </li>
                  </ul>
                </div>
                <h5>
                  <NavLink to='/blog-details'>
                    I must explain to you how all this mistaken idea
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
