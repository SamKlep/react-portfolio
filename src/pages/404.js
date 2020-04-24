import React, { Fragment } from "react";
import Breadcrumb from "../components/breadcrumb";

const Error404 = () => {
	return (
		<Fragment>
	    	<Breadcrumb />
			<div className="amike-wrapper">
				<div className="container">
				  <section className="error-404 not-found text-center">
				    <span>404</span>
				    <h1 className="error-title">Oops! That page can’t be found.</h1>
				    <p className="error-text">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
				    <div className="search-form">
				      <form className="search-form" action="#" method="GET">
				        <input type="search" name="s" placeholder="Search Here" />
				        <button type="submit"><i className="fa fa-search fa-fw" /></button>
				      </form>
				    </div>
				  </section>{/* .error-404 */}
				</div>{/* /.container */}
			</div>

		</Fragment>
	)
}

export default Error404;