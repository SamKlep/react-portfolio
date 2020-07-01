import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        {/* site header */}
        <header>
          <nav className='navbar navbar-expand-lg'>
            <div className='container'>
              <Link to='/' className='custom-logo-link' rel='home'>
               <h2 className='custom-logo'>Sk</h2>
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul id='menu-primary' className='navbar-nav ml-auto'>
                  <li>
                    <NavLink
                      exact
                      activeClassName='active'
                      to='/'
                      className='nav-Link'
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <a href='#services' className='nav-Link'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='nav-Link'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#skills' className='nav-Link'>
                      Skills
                    </a>
                  </li>
                  <li>
                    <NavLink to='/portfolio' className='nav-Link'>
                      Portfolio
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/blog-details" className="nav-Link">Single</NavLink></li> */}
                  <li>
                    <a href='#contact' className='nav-Link'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
