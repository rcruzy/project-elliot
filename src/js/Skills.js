import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'

import '../../node_modules/devicon/devicon.min.css'
import '../../node_modules/devicon/devicon-colors.css'

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
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-html5-plain colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>HTML5</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-javascript-plain colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>JavaScript / ES6</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-css3-plain colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>CSS3</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-angularjs-plain colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>Angular</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-react-original colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>React</strong>
									</h4>
								</div>
								<div className="col-md-2 col-sm-6 icon-div">
									<span className="icon-stack icon-4x">
										<i className="devicon-git-plain colored icon-stack-2x"></i>
									</span>
									<h4>
										<strong>Git</strong>
									</h4>
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