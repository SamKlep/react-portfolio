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
									<Link to="/single">
										<img src="assets/images/cryptonews.png" alt="Crypto News Network" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a><i className="fa ml-4 fa-calendar-o" />November 2019</span>
										<Link to="/single">
											<h3>Crypto News Network</h3>
										</Link>
										<p>A simple web application using Django, Python, HTML and Bootstrap that connects to a third party crypto API. </p>
									</div>
								</div>
							</div>
							<div className="post-item wow fadeInUp" data-wow-delay="0.4s">
								<div className="post-item-image">
									<Link to="/single2">
										<img src="assets/images/contactkeeper.png" alt="Keep your contacts in one place" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a><i className="fa ml-4 fa-calendar-o" />January 2020</span>
										<Link exact to="/single2">
											<h3>Contact Keeper</h3>
										</Link>
										<p>A full-stack MERN application that stores the user's contacts on the Atlas MongoDB cloud.</p>
									</div>
								</div>
							</div>
							<div className="post-item wow fadeInUp" data-wow-delay="0.6s">
								<div className="post-item-image">
									<Link exact to="/single3">
										<img src="assets/images/findahouse.png" alt="Real Estate Registry for Realtor to list and sell houses" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel</a><i className="fa ml-4 fa-calendar-o" />March 2020</span>
										<Link exact to="/single3">
											<h3>Find a House</h3>
										</Link>
										<p>A full-stack Django application where a realtor can list houses for sale and and interact with buyers. </p>
									</div>
								</div>
							</div>
							<div className="post-item wow fadeInUp" data-wow-delay="0.6s">
								<div className="post-item-image">
									<Link exact to="/single4">
										<img src="/assets/images/covidUs.png" alt="COVID-19 Tracker" />
									</Link>
								</div>
								<div className="post-item-content row">
									<div className="col-md-12">
										<span><i className="fa fa-user" /> <a href='mailto:samklepdev@gmial.com' target='_blank' rel="noopener noreferrer"> Samuel K</a><i className="fa ml-4 fa-calendar-o" />May 2020</span>
										<Link exact to="/single4">
											<h3>COVID-19 Tracker</h3>
										</Link>
										<p>A simple front-end project built with React that uses a COVID-19 API to fetch real time data and Chart.JS to display the data on illustrated graphs.</p>
									</div>
								</div>
							</div>

							{/* <div className="text-center">
								<nav className="navigation pagination" role="navigation" aria-label=" ">
									<h2 className="screen-reader-text"> </h2>
									<div className="nav-links">
										<span aria-current="page" className="page-numbers current">1</span>
										<a className="page-numbers" href="#">2</a>
										<a className="page-numbers" href="#">3</a>
										<a className="next page-numbers" href="#"><span>→ <i /></span></a>
									</div>
								</nav>
							</div> */}
						{/* </div>
						<div className="col-xl-4 col-md-5">
							<aside id="secondary" className="widget-area">
								<div className="widget wow fadeInUp" data-wow-delay="0.2s">
									<div className="author-widget text-center">
										<h5>
											Samuel Klepper </h5>
										<div className="author-widget-thumb mb-30 text-center">
											<img src="assets/images/sam-face1.png" alt="Samuel Klepper" />
										</div>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
										<div className="author-widget-social">
											<ul className="list-inline mb-0">
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