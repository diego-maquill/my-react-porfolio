import React from "react";
import Vmarine from "../img/NuBie.png";
import aguaDeLuz from "../img/FastandFresh.png";
//import todo from "../img/todolist.png";
import PropTypes from "prop-types";


export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://project1-nubie.herokuapp.com">
									<div
										className={
											"testbg"
										}>
									</div>
								</a>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://pure-ocean-69179.herokuapp.com">
									<div
										className={
											"aguabg"
										}>
									</div>
								</a>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://diego-maquill.github.io/portafolio.html">
									<div
										className={
											"todobg"
										}>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
