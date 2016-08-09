import React, { Component } from "react";
import Social from "./Social";

import "./Title.css";

class Title extends Component {
    render() {
        return (
            <div className="Title">
                <h2 className="Title__title">
                    { this.props.title }
                </h2>
                <ul className="Title__social_list">
                    { this.renderSocialList() }
                </ul>
            </div>
        );
    }

    renderSocialList() {
        return this.props.social.map((social) => <Social key={social.alt} {...social} />);
    }
}

export default Title;
