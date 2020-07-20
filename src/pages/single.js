import React, { Fragment } from "react";
import Breadcrumb from "../components/breadcrumb";
import { Link, NavLink } from 'react-router-dom';

const PortfolioSingle = () => {

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
							  <a href="https://evening-meadow-70637.herokuapp.com/" target="_blank">
		                    <img src="assets/images/cryptonews.png" alt="Crypto News Network" /> 
							</a>
							</div>
		                  <h2>Crypto News Network!</h2>
		                  <blockquote>
		                    <p>"Your Source For Up to The Minute Crypto Currency and Blockchain News!"</p>
		                  </blockquote>
		                  <p>Have you ever wanted to stay up to date on all the latest crypto news, trends and prices but you are always busy or on the go? Well now you can with all the latest information all in one convenient spot!</p>
		                  <div className="row">
		                    <div className="col-lg-6">
		                      <img src="/assets/images/cryptoNewsStories.png" alt="Stories" />
		                    </div>
		                    <div className="col-lg-6">
		                      <img src="/assets/images/cryptoPriceLookup.png" alt="Price Lookup" />
		                    </div>
		                  </div>
						  <br />
		                  <h5>Introducing, the Crypto News Network!</h5>
		                  <p>A simple web application using Django, Python, HTML and Bootstrap that connects to a third party crypto API. This was a front-end project to showcase HTML and API calling.</p>
		                   <ul>
		                    <li>Look up prices of any coin</li>
		                    <li>Get up to the minute news</li>
		                    <li>24 hr high/low</li>
		                    <li>Market cap</li>
		                  </ul> 
		                  <p>With today's fast paced society, you'd be falling behind to not adopt these new financial practices! Bookmark the Crypto News Network today!</p> 
		                  <span className="post-tag">
		                    Tags :
		                    <a href="#" rel="tag">Crypto</a>
		                    <a href="#" rel="tag">Django</a>
		                    <a href="#" rel="tag">API</a>
		                    <a href="#" rel="tag">HTML</a>
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
		                    <Link to="/single2" rel="next">Next Project »</Link>
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

export default PortfolioSingle;