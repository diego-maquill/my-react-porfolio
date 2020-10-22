import React from "react";
import PropTypes from "prop-types";
import Typed from 'react-typed';
import WOW from "wowjs";
import "./welcome.scss";

class Welcome extends React.Component {
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
					<div className="welcome-message">
						<p>Welcome </p>
						<p>to</p>
						<p>Diego Maquill's portal</p>
						<br />
						<p>In need of as Software Developer?</p>
						<br />
					</div>
					<div className="typing-section">
						<p className="intro-subtitle"><span className="text-slider-items">
						</span><strong className="text-slider"><Typed strings={['BS in Computer Science', '&&&', ' Full Stack Developer Certificate', '&&&']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
						<p className="intro-subtitle"><span className="text-slider-items">
						</span><strong className="text-slider">From</strong></p>
						<p className="intro-subtitle"><span className="text-slider-items">
						</span><strong className="text-slider"><Typed strings={['Suffolk University', '&', 'Harvard Extension School Trilogy Education', '&&']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
					</div>
					{/* offset can be changed in node modules wowjs default file */}
					<div>
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
							Click here to know more about me
					</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Welcome;

Welcome.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
