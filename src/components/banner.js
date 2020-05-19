import React from 'react';

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
                {/* <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-instagram' />
                  </a>
                </li> */}
              </ul>

              <div className='align-middle'>
                <h1>I am Samuel</h1>
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
                  src='/assets/images/sam-portrait.png'
                  className='attachment-full size-full'
                  alt='Samuel K'
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
