import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  componentDidMount() {
    // Back to top
    $(window).on('scroll', function() {
      if ($(this).scrollTop() >= 700) {
        $('#backtotop').fadeIn(500);
      } else {
        $('#backtotop').fadeOut(500);
      }
    });

    $('#backtotop').on('click', function() {
      $('body,html').animate(
        {
          scrollTop: 0
        },
        500
      );
    });
  }

  render() {
    return (
      <div>
        <footer className='text-center'>
          <div className='site-footer'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-9 col-sm-10 mb-4'>
                  <div className='mb-5'>
                    <Link to='/' className='custom-logo-link' rel='home'>
                      <img className="custom-logo" src="/assets/images/sk-logo-4.png" />
                    </Link>
                  </div>
                  <p className='footer-text'>
                
                  </p>
                  <div className='footer-social'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <a href='mailto:samklepdev@gmail.com' target='_blank' rel="noopener noreferrer">
                          <i className='fa fa-google' />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='https://github.com/SamKlep' target='_blank' rel="noopener noreferrer">
                          <i className='fa fa-github' />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='https://digitalcrafts.slack.com/team/samuelklepper' target='_blank' rel="noopener noreferrer">
                          <i className='fa fa-slack' />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='https://www.linkedin.com/in/samuel-klepper-0435b5193/' target='_blank' rel="noopener noreferrer">
                          <i className='fa fa-linkedin' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright-text'>
            Copyright © 2020{' '}
            <a href='mailto:samklepdev@gmail.com'>Samuel Klepper
              
            </a>
          </div>
        </footer>
        <div id='backtotop'>
          <i className='fa fa-2x fa-circle-o' />
        </div>
      </div>
    );
  }
}

export default Footer;
