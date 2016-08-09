import React, { Component } from "react";
import Name from "./Name";
import Title from "./Title";

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <Name />
                <Title />
            </div>
        );
    }
}

export default AboutMe;
