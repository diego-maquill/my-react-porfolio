/* import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="section" id={this.props.sectionId}>
                <h1>{this.props.sectionId}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Section; */

import React from "react";

export default function Section({ title, subtitle, id }) {
    return (
        <div className={"section"}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}
