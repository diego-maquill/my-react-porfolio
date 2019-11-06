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
						<div className="row my-5">
							<div class="col-12 col-sm-12 col-md-4 ">
								<h5>This is JavaScript, HTML, CSS first generation project in which uses different APIs to search information for users wishing to move to the USA for the first time. Myself being a immigrant was difficult to assimilate to the American culture at first. We immigrants tend to look for things common to us from back home. With the right marketing, nuBie can we a go to web application for people looking for ethnic cultural matching within the USA</h5>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<h5>Final Full Stack project. This is a combination of NodeJS, MongoDB, Express, Passport, HTML ,and Bootstrap CSS. An eCommerce application for farmers market. The idea was to create a shopping cart for people who want to shop at farmer's market major cities throughout the United States. Most of these farmers market are rotating farmers market and they do not have access to sell through website application. </h5>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<h5>This a compilation of short programming execises done for my coding bootcamp. You will find anything from basic HTML & CSS to complex execises using NodeJS, Firebase, MySQL, MongoDB and much more.  </h5>
							</div>
						</div>
						<div className="row my-5">
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://github.com/diego-maquill/Project-1">
									<h5>Clicking here will take you to the GitHub repo</h5>
								</a>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://github.com/diego-maquill/adding-react">
									<h5>Clicking here will take you to the GitHub repo</h5>
								</a>
							</div>
							<div class="col-12 col-sm-12 col-md-4 ">
								<a href="https://github.com/diego-maquill/diego-maquill.github.io">
									<h5>Clicking here will take you to the GitHub repo</h5>
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
