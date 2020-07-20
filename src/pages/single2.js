import React, { Fragment } from "react";
import Breadcrumb from "../components/breadcrumb";
import { Link, NavLink } from 'react-router-dom';

const PortfolioSingle2 = () => {

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
							  <a href="https://blooming-forest-66299.herokuapp.com/" target="_blank">
		                    <img src="assets/images/contactkeeper.png" alt="Crypto News Network" /> 
							</a>
							</div>
		                  <h2>Contact Keeper</h2>
		                  <blockquote>
		                    <p>"Keep all your contacts in one convenient place!"</p>
		                  </blockquote>
		                  <p>Tired of fumbling through endless papers and notes for that one number you desperately need? Have so many contacts that it can be overwhelming? Maybe you need to <i>keep</i> your <i>contacts</i> in a digital location...</p>
		                  <div className="row">
		                    <div className="col-lg-6">
		                      <img src="/assets/images/contactLogin.png" alt="Login" />
		                    </div>
		                    <div className="col-lg-6">
		                      <img src="/assets/images/contacts.png" alt="Price Lookup" />
		                    </div>
		                  </div>
						  <br />
		                  <h5><u>Introducing, Contact Keeper!</u></h5>
		                  <p>A full-stack MERN application that stores the user's data on the Atlas MongoDB cloud. This was a full-stack project that demonstrates knowledge of uniting the front and back ends. Hosted on Heroku.</p>
		                   <ul>
		                    <li>Create an account</li>
		                    <li>Add contacts and information</li>
		                    <li>Data persists across multiple devices</li>
		                    <li>Minimalist Design</li>
		                  </ul> 
		                  <p>Stay on top of your <strong>contacts</strong> and stay <strong>organized</strong>-- you'll thank yourself later!</p> 
		                  <span className="post-tag">
		                    Tags :
		                    <a href="#" rel="tag">React</a>
		                    <a href="#" rel="tag">Mongo</a>
		                    <a href="#" rel="tag">Express</a>
		                  </span>
		                </div>{/* .entry-content */}
		              </article>{/* #post-1911 */}
		              <nav className="navigation post-navigation" role="navigation" aria-label="Posts">
		                <h2 className="screen-reader-text">Post navigation</h2>
		                <div className="nav-links">
		                  <div className="nav-previous">
		                    <Link to="/single" rel="prev">« Prev Project</Link>
		                  </div>
		                  <div className="nav-next">
		                    <Link to="/single3" rel="next">Next Project »</Link>
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

export default PortfolioSingle2;