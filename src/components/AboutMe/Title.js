import React, { Component } from "react";
import Social from "./Social";

import "./Title.css";
import github from "../../img/github.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import blog from "../../img/blog.svg";

const socialList = [
    {
        image: github,
        alt: "github"
    },
    {
        image: twitter,
        alt: "twitter"
    },
    {
        image: linkedin,
        alt: "linkedin"
    },
    {
        image: blog,
        alt: "blog"
    }
];

class Title extends Component {
    render() {
        return (
            <div className="Title">
                <h1 className="Title__title">
                    Software Engineer
                </h1>
                <ul className="Title__social_list">
                    { this.renderSocialList() }
                </ul>
            </div>
        );
    }

    renderSocialList() {
        return socialList.map((social) => <Social {...social} />);
    }
}

export default Title;
