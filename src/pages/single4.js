import React, { Fragment } from "react";
import Breadcrumb from "../components/breadcrumb";
import { Link, NavLink } from 'react-router-dom';

const PortfolioSingle4  = () => {

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
							  <a href="https://focused-bhaskara-a7850e.netlify.app/" target="_blank">
		                    <img src="/assets/images/covidTracker.png" alt="COVID-19" /> 
							</a>
							</div>
		                  <h2>COVID-19 Tracker</h2>
		                  <blockquote>
		                    <p>"Stay up to date with the latest data on COVID-19"</p>
		                  </blockquote>
		                  <p>In today's uncertain times, you're gonna want to stay informed with the latest information regarding the status of confirmed COVID-19 cases in your area and aroundd the globe.</p>
		                  <div className="row">
		                    <div className="col-lg-6">
		                      <img src="/assets/images/covidUs.png" alt="US data" />
		                    </div>
		                    <div className="col-lg-6">
		                      <img src="/assets/images/covidUk.png" alt="UK data" />
		                    </div>
		                  </div>
						  <br />
		                  <h5><u>COVID-19 Tracker</u></h5>
		                  <p>A simple front-end project built with React that uses a COVID-19 API to fetch real time data and Chart.JS to display the data on illustrated graphs.</p>
		                   <ul>
		                    <li>Total infected, recovered and deaths cases</li>
		                    <li>Choose the country you want to see</li>
		                    <li>Data in real time</li>
		                    
		                  </ul> 
		                  <p>Don't risk your health in trying times, bookmark <a href="https://focused-bhaskara-a7850e.netlify.app/" target="_blank"> COVID-19 Tracker </a>today!</p> 
		                  <span className="post-tag">
		                    Tags :
		                    <a href="#" rel="tag">React</a>
		                    <a href="#" rel="tag">Chart.js</a>
		                    <a href="#" rel="tag">Heroku</a>
		                    
		                  </span>
		                </div>{/* .entry-content */}
		              </article>{/* #post-1911 */}
		              <nav className="navigation post-navigation" role="navigation" aria-label="Posts">
		                <h2 className="screen-reader-text">Post navigation</h2>
		                <div className="nav-links">
		                  <div className="nav-previous">
		                    <Link to="/single3" rel="prev">« Prev Project</Link>
		                  </div>
		                  <div className="nav-next">
		                    <Link to="/single" rel="next">Next Project »</Link>
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

export default PortfolioSingle4 ;