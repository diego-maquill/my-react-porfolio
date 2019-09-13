import React from "react";
import PropTypes from "prop-types";
import Typed from 'react-typed';

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<h1>Hello, I&apos;m Frank Izquierdo.</h1>
					<br />
					<p className="intro-subtitle"><span className="text-slider-items">
					</span><strong className="text-slider"><Typed strings={['Front End Developer', 'Back End Developer', 'Software Engineer']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div >
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
