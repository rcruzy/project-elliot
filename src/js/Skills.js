import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'
import '../css/ionicons.min.css'

import reactLogo from '../react.svg'
import angularLogo from '../angular.svg'
import html5Logo from '../html5.svg'
import css3Logo from '../css3.svg'
import jsLogo from '../js.svg'
import gitLogo from '../git.svg'
import linkedInLogo from '../linkedin.svg'


class Skills extends Component {
	render() {
		return(
			<section id="skills" className="skills bg-primary">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-10 col-lg-offset-1">
							<h2>&lt;Ryan knows /&gt;</h2>
							<hr className="small"/>
							<div className="row">
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={html5Logo} alt="html5-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>HTML5</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={jsLogo} alt="js-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>JavaScript / ES6</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={css3Logo} alt="css3-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>CSS3</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={angularLogo} alt="angular-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>AngularJS</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={reactLogo} alt="react-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>ReactJS</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6">
									<span className="icon-stack icon-4x">
										<img src={gitLogo} alt="git-logo" className="svg-icon"/>
									</span>
									<h4>
										<strong>Git</strong>
									</h4>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<h3>And bunch of other stuff, make sure to check his Linkedin profile below</h3>
									<span className="icon-stack icon-4x">
										<a href="https://ph.linkedin.com/in/ryanjcruz" target="blank" className="icon-link"><img src={linkedInLogo} alt="linkedin-logo" className="svg-icon"/></a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		) 
	}
}

export default Skills