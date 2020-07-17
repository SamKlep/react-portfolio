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
		                    <img src="/assets/images/findahouse.png" alt="Crypto News Network" /> </div>
		                  <p>Have you ever wanted to stay up to date on all the latest crypto news, trends and prices but you are always busy or on the go?. Well now you can with all the latest information all in one convenient spot!</p>
		                  <blockquote>
		                    <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."</p>
		                  </blockquote>
		                  <p>Welcome to the Crypto News Network, ap place to force-feed yourself the latest and greatst in the cryptocurrency universe.</p>
		                  <div className="row">
		                    <div className="col-lg-6">
		                      <img src="assets/images/blog-2.jpg" alt="Single" />
		                    </div>
		                    <div className="col-lg-6">
		                      <img src="assets/images/blog-3.jpg" alt="Single" />
		                    </div>
		                  </div>
		                  <h5>So where to from here then?</h5>
		                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. annoying consequences, or one who avoids a pain that produces .</p>
		                  <ul>
		                    <li>anyone who loves</li>
		                    <li>occasionally circumstances</li>
		                    <li>physical exercise</li>
		                    <li>But who has any right to find</li>
		                  </ul>
		                  <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
		                  <span className="post-tag">
		                    Tags :
		                    <a href="#" rel="tag">Crypto</a>
		                    <a href="#" rel="tag">Django</a>
		                    <a href="#" rel="tag">API</a>
		                  </span>
		                </div>{/* .entry-content */}
		              </article>{/* #post-1911 */}
		              <nav className="navigation post-navigation" role="navigation" aria-label="Posts">
		                <h2 className="screen-reader-text">Post navigation</h2>
		                <div className="nav-links">
		                  <div className="nav-previous">
		                    <Link to="/blog-details" rel="prev">« Prev Post</Link>
		                  </div>
		                  <div className="nav-next">
		                    <Link to="/blog-details" rel="next">Next Post »</Link>
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