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
		                    <img src="assets/images/cryptonews.png" alt="Crypto News Network" /> </div>
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
		                    <a href="#" rel="tag">Template</a>
		                    <a href="#" rel="tag">Web Design</a>
		                    <a href="#" rel="tag">ThemeForest</a>
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
		              <div id="comments" className="comments-area">
		                <h3 className="comments-title">3 comments </h3>{/* .comments-title */}
		                <ul className="comment-list">
		                  <li className="comment">
		                    <div className="single-comment row wow fadeInUp" data-wow-delay="0.2s">
		                      <div className="comment-avatar-img">
		                        <img alt="Author gravatar" src="assets/images/gravatar-1.jpeg" />
		                      </div>
		                      <div className="comment-text">
		                        <div className="comment-avatar-info">
		                          <h5>Alex Smith<span className="comment-date">27th November 2018 , 9:53 am</span></h5>
		                          <a className="comment-reply-link" href="#"><i className="fa fa-reply" /> Reply</a>
		                        </div>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		                      </div>
		                    </div>
		                    <ul className="children">
		                      <li className="comment odd alt depth-2" id="comment-12" itemScope itemType="http://schema.org/Comment">
		                        <div className="single-comment row wow fadeInUp" data-wow-delay="0.4s">
		                          <div className="comment-avatar-img">
		                            <img alt="Author gravatar" src="assets/images/gravatar-2.jpeg" />
		                          </div>
		                          <div className="comment-text">
		                            <div className="comment-avatar-info">
		                              <h5>Yahya Alusi <span className="comment-date">27th November 2018 , 10:23 am</span></h5>
		                              <a className="comment-reply-link" href="#"><i className="fa fa-reply" /> Reply</a>
		                            </div>
		                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		                          </div>
		                        </div>
		                      </li>{/* #comment-## */}
		                    </ul>{/* .children */}
		                  </li>{/* #comment-## */}
		                  <li className="comment even thread-odd thread-alt depth-1" id="comment-13" itemScope itemType="http://schema.org/Comment">
		                    <div className="single-comment row wow fadeInUp" data-wow-delay="0.6s">
		                      <div className="comment-avatar-img">
		                        <img alt="Author gravatar" src="assets/images/gravatar-2.jpeg" />
		                      </div>
		                      <div className="comment-text">
		                        <div className="comment-avatar-info">
		                          <h5>Yahya Alusi <span className="comment-date">27th November 2018 , 10:23 am</span></h5>
		                          <a className="comment-reply-link" href="#"><i className="fa fa-reply" /> Reply</a>
		                        </div>
		                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		                      </div>
		                    </div>
		                  </li>{/* #comment-## */}
		                </ul>{/* .comment-list */}
		                <div id="respond" className="comment-respond">
		                  <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><Link to='/' rel="nofollow" id="cancel-comment-reply-link" style={{display: 'none'}}>Cancel reply</Link></small></h3>
		                  <form action="#wp-comments-post.php" method="post" id="commentform" className="comment-form row" noValidate>
		                    <div className="col-xl-12">
		                      <textarea id="comment" name="comment" placeholder="Type your comment...." aria-required="true" defaultValue={""} />
		                    </div>
		                    <div className="col-lg-6">
		                      <input id="author" name="author" type="text" placeholder="Type your name...." defaultValue aria-required="true" />
		                    </div>
		                    <div className="col-lg-6">
		                      <input id="email" name="email" type="text" placeholder="Type your email...." defaultValue aria-required="true" />
		                    </div>
		                    <p className="comment-form-cookies-consent">
		                      <input name="cookies-consent" type="checkbox" defaultValue="yes" />
		                      <label htmlFor="cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
		                    </p>
		                    <div className="col-lg-12">
		                      <button className="btn" type="submit">Post Comment</button>
		                    </div>
		                  </form>
		                </div>{/* #respond */}
		               </div>{/*comments */}
		            </div>
		          </div>
		        </div>
		    </div>{/* /.amike-wrapper */}
		</Fragment>
		
	)
}

export default PortfolioSingle;