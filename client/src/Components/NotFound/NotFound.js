import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
	return (
		<section className="notFound__page vh-100">
			<div className="container h-100">
				<div className="row h-100">
					<div className="col-md-6 d-flex justify-content-center align-items-center">
						<div>
							<h1 class="text-jumbo text-ginormous">Oops!</h1>
							<h2 className="text-muted">
								We can't seem to find the page you're looking for.
							</h2>
							<h6 className="text-muted">Error code: 404</h6>
							<ul class="list-unstyled">
								<li>Here are some helpful links instead:</li>
								<li>
									<Link to="/" class="link-404">
										Home
									</Link>
								</li>
								<li>
									<Link to="/about" class="link-404">
										Help
									</Link>
								</li>
								<li>
									<Link to="/terms" class="link-404">
										Traveling on Airbnb
									</Link>
								</li>
								<li>
									<Link to="/become_host" class="link-404">
										Hosting on Airbnb
									</Link>
								</li>
								<li>
									<Link to="/safty" class="link-404">
										Trust &amp; Safety
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-5 text-center d-flex justify-content-center align-items-center">
						<img
							src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
							width="313"
							height="428"
							class="hide-sm"
							alt="Girl has dropped her ice cream."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
