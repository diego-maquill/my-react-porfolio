import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import myImage from "../img/myImage.jpg";
import PropTypes from "prop-types";
import technologies from "../data/technologies.json";
import Icons from "./icons";

export default class About extends React.Component {
	render() {
		return (
			<div id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row" style={{ marginTop: 1 + "rem" }}>
					<div className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}>
						<div style={{ marginBottom: 1 + "rem" }}>
							<p>
								Experienced Software Engineer with a demonstrated history of working in the consumer electronics and medical devices industry. Skilled in C++, JavaScript, Python, Machine Learning, web and mobile development, and. Strong engineering professional with a Bachelor’s Degree focused in Computer Science from the Suffolk University of Boston. For more, check	my <a href="https://github.com/diego-maquill">GitHub</a> or <a href="https://www.linkedin.com/in/diego-m-24b4a8115/">LinkedIn.</a>
							</p>
						</div>
						<div style={{ marginBottom: 1 + "rem" }}>
							<h4>Proficient in these Techologies</h4>
						</div>
						<div className="progress mb-3" style={{ marginTop: 2 + "rem" }}>
							<div className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								APIs
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJS
					</div>
						</div>

					</div>
					<div className="col-12 col-lg-6 hidden">
						<h2>Diego Maquill</h2>
						<h5>Software Engineer @ <a href="https://www.kriptoit.com">KriptoIT</a></h5>
						<p className={"mytext "}> {/* mytext pt-3 + this.prop.fadeIn */}
							{/*	I love transforming ideas into reality using code.*/}
							Passionated and laser focus about solving real live problems in friendly and creative way.
						</p>
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 210 + "px",
								width: 210 + "px"
							}}
						/>
						<div className="progress mb-3" >
							<div className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SQL
						</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								MongoDb
							</div>
						</div>
						<div className="progress mb-3">
							<div className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 100 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>{}
				<div className="row mt-5">
					<div className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}>
						<h3>Also worked on projects using:</h3>
						<div id="technologies">
							{
								technologies.map(id => {
									return <Icons key={id} id={id} width="80" />;
								})
							}
						</div>
					</div>
					<div className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}>
						<div className="row">
							<div>
								<h4>
									Developed application known best for world class:
								</h4>
							</div>
							<div className={"col-6 col-sm-6 col-md-6 " + this.props.fadeInLeft}>
								<img src={layers} alt="" />
								<h4>Responsiveness</h4>
							</div>
							<div
								className={"col-6 col-sm-6 col-md-6 " + this.props.fadeInLeft}>
								<img src={pen} alt="" />
								<h4>Design</h4>
							</div>
						</div>
						<div className="row">
							<div
								className={"col-6 col-sm-6 col-md-6 " + this.props.fadeInRight}>
								<img src={cogwheel} alt="" />
								<h4>Performance</h4>
							</div>
							<div
								className={"col-6 col-sm-6 col-md-6 " + this.props.fadeInRight}>
								<img src={browser} alt="" />
								<h4>Using Agile P.M. Framework</h4>
							</div>
						</div>
					</div>

				</div>


			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
