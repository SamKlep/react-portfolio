import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <section className='banner section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-7'>
              <ul className='list-inline social'>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-google' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-github' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-slack' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-instagram' />
                  </a>
                </li>
              </ul>

              <div className='align-middle'>
                <h1>I am Samuel Klepper</h1>
                <p>
                  A professinal designer turned developer with the eye for
                  creative solutions.
                </p>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <a href='portfolio'>My Portfolio </a>
                  </li>
                  {/* <li className='list-inline-item'>
                    <a
                      className='play-btn popup-video'
                      onClick={this.openModal}
                      href='#'
                    >
                      <i className='fa fa-play' />
                    </a>
                  </li> */}
                </ul>
                {/* <ModalVideo
                  channel='youtube'
                  isOpen={this.state.isOpen}
                  videoId='W-j4QGAgNu8'
                  onClose={() => this.setState({ isOpen: false })}
                /> */}
              </div>
            </div>
            <div className='col-lg-5'>
              <div
                className='about_me_image wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <img
                  width={508}
                  height={729}
                  src='assets/images/man-01.png'
                  className='attachment-full size-full'
                  alt='about me image'
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
