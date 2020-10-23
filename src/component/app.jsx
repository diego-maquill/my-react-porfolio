import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
/* import "./navbar.css"; */
import Header from "./navbar.jsx";
import Welcome from "./welcome.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import WOW from "wowjs";

//

class App extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		new WOW.WOW().init();
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Welcome
					id="my-background"
					aboutRef={this.about}
				/* bounceIn={"wow bounceIn"} */
				/>
				<About
					ref={this.about}
					id="about-container"
				/* 	bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"} */
				/>

				<Projects
					ref={this.projects}
					id="my-projects"
				/* 	fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"} */
				/>

				<Contact
					ref={this.contact}
					id="my-contact"
				/* fadeInLeft={"wow fadeInLeft"}
				shake={"wow pulse"} */
				/>

			</div>
		);
	}
}

export default App;
