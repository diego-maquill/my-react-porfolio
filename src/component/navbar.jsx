import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Pdf from "../data/resume.pdf";
import WOW from "wowjs";
import "./navbar.scss";

class Header extends React.Component {

    state = { clicked: false }

    state = { isOpen: false }

    toggleNavbar = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    closeMobileMenu = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    componentDidMount() {
        new WOW.WOW().init();
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggleNavbar.bind(this);

        // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
        if (typeof window !== 'undefined') {
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                const maxScroll = document.body.clientHeight - window.innerHeight;
                let currentScrollPos = window.pageYOffset;
                if (
                    (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll)
                    || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
                    || (prevScrollpos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }


    /*  headerEffectLargeScreen() {
         window.addEventListener("scroll", () => {
             var fadeInEffect = document.getElementById("navbar");
             var domRect = fadeInEffect.getBoundingClientRect();
             var fadeOutEffect = document.getElementById("navbar");
             var domBGRect = fadeOutEffect.getBoundingClientRect();
 
             if (domRect.y <= -domRect.height) {
                 fadeInEffect.classList.add("fade-in-nav");
             }
             if (-domBGRect.height < domBGRect.top) {
                 fadeInEffect.classList.remove("fade-in-nav");
             }
         });
     } */


    render() {
        return (
            <div>
                <Navbar id="navbar" expand="md" fixed="top">
                    <div className="container" >
                        <div>
                            <a className="navbar-brand" /* className="home-style navbar-brand" */
                                onClick={this.scrollToTop}>
                                My-number: (617)834-6182
                        </a>
                        </div>
                        <div className='menu-icon' onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li className="btn-style nav-item">
                                <Link
                                    className="nav-links"
                                    to="about-container"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMobileMenu}>
                                    About
                                        </Link>
                            </li>
                            {  /*      <a onClick={() => {
                                    this.scrolling(this.projects);
                                }} className="btn-style nav-item nav-link">
                                    Projects
                            </a> */}
                            <li className="btn-style nav-item">
                                <Link
                                    className="nav-links"
                                    to="my-projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMobileMenu}>
                                    Projects
                                        </Link>
                            </li>
                            {     /*        <a onClick={() => {
                                    this.scrolling(this.contact);
                                }} className="btn-style nav-item nav-link">
                                    Contact
                            </a> */}
                            <li className="btn-style nav-item">
                                <Link
                                    className="nav-links"
                                    to="my-contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMobileMenu}>
                                    Contact
                                        </Link>
                            </li>
                            <li className="btn-style nav-item">
                                <div
                                    className="nav-links">
                                    <a href={Pdf} target="_blank">Click here for resume</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;
