import React, { Component } from "react";
import Name from "./Name";
import Title from "./Title";
import Blurb from "./Blurb";

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <Name />
                <Title />
                <Blurb />
            </div>
        );
    }
}

export default AboutMe;
