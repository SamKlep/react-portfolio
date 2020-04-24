import React, { Fragment } from "react";
import {Link, NavLink} from 'react-router-dom';
import Breadcrumb from "../components/breadcrumb";

const Portfolio = () => {
	return (
		<Fragment>
			<Breadcrumb />
			<div className="amike-wrapper">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-md-7">
							<div className="post-item wow fadeInUp" data-wow-delay="0.2s">
								<div className="post-item-image">
									<Link to="/blog-details">
										<img src="assets/images/blog-1-1280x600.jpg" alt="Thumbnail" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href="#" className="link">admin</a><i className="fa ml-4 fa-calendar-o" />October 29, 2019</span>
										<Link to="/blog-details">
											<h3>Ten Secrets You Will Not Want To Know</h3>
										</Link>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
									</div>
								</div>
							</div>
							<div className="post-item wow fadeInUp" data-wow-delay="0.4s">
								<div className="post-item-image">
									<Link to="/blog-details">
										<img src="assets/images/blog-2-1280x600.jpg" alt="Thumbnail" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href="#" className="link">admin</a><i className="fa ml-4 fa-calendar-o" />June 12, 2019</span>
										<Link exact to="/blog-details">
											<h3>You’ve gotta dance like there’s nobody watching</h3>
										</Link>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
									</div>
								</div>
							</div>
							<div className="post-item wow fadeInUp" data-wow-delay="0.6s">
								<div className="post-item-image">
									<Link exact to="/blog-details">
										<img src="assets/images/blog-3-1280x600.jpg" alt="Thumbnail" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href="#" className="link">admin</a><i className="fa ml-4 fa-calendar-o" />May 11, 2019</span>
										<Link exact to="/blog-details">
											<h3>I must explain to you how all this mistaken idea</h3>
										</Link>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
									</div>
								</div>
							</div>
							<div className="text-center">
								<nav className="navigation pagination" role="navigation" aria-label=" ">
									<h2 className="screen-reader-text"> </h2>
									<div className="nav-links">
										<span aria-current="page" className="page-numbers current">1</span>
										<a className="page-numbers" href="#">2</a>
										<a className="page-numbers" href="#">3</a>
										<a className="next page-numbers" href="#"><span>→ <i /></span></a>
									</div>
								</nav>
							</div>
						</div>
						<div className="col-xl-4 col-md-5">
							<aside id="secondary" className="widget-area">
								<div className="widget wow fadeInUp" data-wow-delay="0.2s">
									<div className="author-widget text-center">
										<h5>
											Alex Smith </h5>
										<div className="author-widget-thumb mb-30 text-center">
											<img src="assets/images/portfolio-man.png" alt="Alex Smith" />
										</div>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
										<div className="author-widget-social">
											<ul className="list-inline mb-0">
												<li className="list-inline-item"><a href="#"><i className="fa fa-google" /></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-github" /></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-slack" /></a></li>
												<li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="widget wow fadeInUp" data-wow-delay="0.4s">
									<h5 className="widget-title">Recent Posts</h5>
									<ul className="sidebar-recent-post">
										<li>
											<div className="recent-post-thumb">
												<Link exact to="/blog-details">
													<img src="assets/images/blog-80x80-1.jpg" alt="Thumbnail" />
												</Link>
											</div>
											<div className="recent-post-content">
												<p>
													<Link exact to="/blog-details">Ten Secrets You Will Not Want To Know</Link>
												</p>
												<span>October 29, 2019</span>
											</div>
										</li>
										<li>
											<div className="recent-post-thumb">
												<Link exact to="/blog-details">
													<img src="assets/images/blog-80x80-2.jpg" alt="Thumbnail" />
												</Link>
											</div>
											<div className="recent-post-content">
												<p>
													<Link exact to="/blog-details">You’ve gotta dance like there’s nobody watching</Link>
												</p>
												<span>June 12, 2019</span>
											</div>
										</li>
										<li>
											<div className="recent-post-thumb">
												<Link exact to="/blog-details">
													<img src="assets/images/blog-80x80-3.jpg" alt="Thumbnail" />
												</Link>
											</div>
											<div className="recent-post-content">
												<p>
													<Link exact to="/blog-details">I must explain to you how all this mistaken…</Link>
												</p>
												<span>May 11, 2019</span>
											</div>
										</li>
									</ul>
								</div>
								<div className="widget wow fadeInUp" data-wow-delay="0.6s">
									<h5 className="widget-title">Categories</h5>
									<ul>
										<li className="cat-item cat-item-2">
											<a href="#">Family<span className="float-right">(23)</span></a>
										</li>
										<li className="cat-item cat-item-3">
											<a href="#">Food<span className="float-right">(12)</span></a>
										</li>
										<li className="cat-item cat-item-4">
											<a href="#">Friends<span className="float-right">(23)</span></a>
										</li>
										<li className="cat-item cat-item-5">
											<a href="#">Hangout<span className="float-right">(43)</span></a>
										</li>
										<li className="cat-item cat-item-6">
											<a href="#">Life Style<span className="float-right">(32)</span></a>
										</li>
										<li className="cat-item cat-item-7">
											<a href="#">Love<span className="float-right">(51)</span></a>
										</li>
									</ul>
								</div>
								<div className="widget wow fadeInUp" data-wow-delay="0.8s">
									<h5 className="widget-title">Tags</h5>
									<div className="tagcloud">
										<a href="#" className="tag-cloud-link">Android</a>
										<a href="#" className="tag-cloud-link">Apple</a>
										<a href="#" className="tag-cloud-link">CV</a>
										<a href="#" className="tag-cloud-link">Envato</a>
										<a href="#" className="tag-cloud-link">Food</a>
										<a href="#" className="tag-cloud-link">Friends</a>
										<a href="#" className="tag-cloud-link">Life Style</a>
										<a href="#" className="tag-cloud-link">Node js</a>
										<a href="#" className="tag-cloud-link">Photography</a>
										<a href="#" className="tag-cloud-link">Portfolio</a>
										<a href="#" className="tag-cloud-link">Resume</a>
										<a href="#" className="tag-cloud-link">Template</a>
										<a href="#" className="tag-cloud-link">ThemeForest</a>
										<a href="#" className="tag-cloud-link">Web Design</a>
									</div>
								</div>
							</aside>{/* #secondary */}
						</div>
					</div>
				</div>{/* /.container */}
			</div>{/* /.amike-wrapper */}
		</Fragment>
	)
}

export default Portfolio;