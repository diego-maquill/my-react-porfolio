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
					<h1>Welcome </h1>
				
					<h1>to</h1>
					
					<h1>Diego Maquill Portfolio.</h1>
					<br />
					<h1>Full Stack Developer </h1>
					<br />
					<p className="intro-subtitle"><span className="text-slider-items">
					</span><strong className="text-slider"><Typed strings={['Thanks to', 'and in partnership with']} typeSpeed={150} backDelay={1100} backSpeed={150} loop /></strong></p>
					<p className="intro-subtitle"><span className="text-slider-items">
					</span><strong className="text-slider"><Typed strings={['From', 'Harvard Extension School','Trilogy Education', 'BS from Suffolk University']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
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
