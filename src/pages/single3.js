import React, { Fragment } from "react";
import Breadcrumb from "../components/breadcrumb";
import { Link, NavLink } from 'react-router-dom';

const PortfolioSingle3 = () => {

	return (

		<Fragment>
	    	<Breadcrumb />
	    	<div className="amike-wrapper">
		        <div className="container">
		          <div className="row justify-content-center">
		            <div className="col-sm-10">
		              <article>
		                <div className="entry-content">
		                  <div className="single-post-image">
							  <a href="https://findahouse.herokuapp.com/" target="_blank">
		                    <img src="assets/images/findahouse.png" alt="Find a House" /> 
							</a>
							</div>
		                  <h2>Find a House</h2>
		                  <blockquote>
		                    <p>"Property Searching Just Got So Easy!"</p>
		                  </blockquote>
		                  <p>Are you in the market for a new house? Are you a busy professional with barely any time for yourself? Then leave all the heavy lifting to the friendly realtors over at <strong>Find a House</strong>.</p>
		                  <div className="row">
		                    <div className="col-lg-6">
		                      <img src="/assets/images/findLogin.png" alt="Login" />
		                    </div>
		                    <div className="col-lg-6">
		                      <img src="/assets/images/findDashboard.png" alt="Dashboard" />
		                    </div>
		                  </div>
						  <br />
		                  <h5><u>Let us help you-- Find a House!</u></h5>
		                  <p>A full-stack Django application where a realtor can list houses for sale and and interact with buyers. This was my capstone project that demonstrated all the knowledge I learned going through the full-stack web development bootcamp over at <a href="https://www.digitalcrafts.com/" target="_blank">Digital Crafts</a>. Hosted on Heroku.</p>
		                   <ul>
		                    <li>Create an account</li>
		                    <li>List house ads</li>
		                    <li>Send and receive messages from clients</li>
		                    <li>Upload pictures</li>
		                  </ul> 
		                  <p>Take the hassle out of the house searching with the lovely folks over at<strong> Find a House!</strong></p> 
		                  <span className="post-tag">
		                    Tags :
		                    <a href="#" rel="tag">Django</a>
		                    <a href="#" rel="tag">Python</a>
		                    <a href="#" rel="tag">Mongo</a>
		                    <a href="#" rel="tag">HTML</a>
		                  </span>
		                </div>{/* .entry-content */}
		              </article>{/* #post-1911 */}
		              <nav className="navigation post-navigation" role="navigation" aria-label="Posts">
		                <h2 className="screen-reader-text">Post navigation</h2>
		                <div className="nav-links">
		                  <div className="nav-previous">
		                    <Link to="/single2" rel="prev">« Prev Project</Link>
		                  </div>
		                  <div className="nav-next">
		                    <Link to="/single4" rel="next">Next Project »</Link>
		                  </div>
		                </div>
		              </nav>
		              
		            </div>
		          </div>
		        </div>
		    </div>{/* /.amike-wrapper */}
		</Fragment>
		
	)
}

export default PortfolioSingle3;