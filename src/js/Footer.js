import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'
import '../css/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../node_modules/devicon/devicon.min.css'
import '../../node_modules/devicon/devicon-colors.css'

class Footer extends Component {
	render() {
		return(
			<div>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-lg-10 col-lg-offset-1 text-center">
								<h4>
									<strong>Ryan Cruz</strong>
								</h4>
								<p>Taguig City, PH</p>
								<span>
									<i className="fa fa-envelope-o" aria-hidden="true"></i>
									<a href="mailto:ryanjosephcruz1@gmail.com"> ryanjosephcruz1@gmail.com</a>
								</span>
								<br/>
								<ul className="list-inline contact-icons">
									<li>
										<a href="https://ph.linkedin.com/in/ryanjcruz" target="_blank"><i className="fa fa-linkedin fa-fw fa-3x" aria-hidden="true"></i></a>
									</li>
										<li>
										<a href="https://github.com/ryanjcruz" target="_blank"><i className="fa fa-github fa-fw fa-3x" aria-hidden="true"></i></a>
									</li>
								</ul>
								<hr className="small"/>
								<p className="text-muted">Copyright &copy; Ryan Cruz 2016</p>
								<br/>
								<p className="text-muted">Made with lots of <i className="fa fa-heart" aria-hidden="true"></i> and learning using <a href="https://facebook.github.io/react/" target="_blank">React <i className="devicon-react-original"></i></a>. Hosted in <a href="https://pages.github.com/" target="_blank">Github Pages <i className="fa fa-github fa-fw" aria-hidden="true"></i></a>
							 	</p>
							</div>
						</div>
					</div>
				</footer>
			</div>

		) 
	}
}

export default Footer