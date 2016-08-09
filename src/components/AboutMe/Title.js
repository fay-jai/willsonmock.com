import React, { Component } from "react";
import Social from "./Social";

import "./Title.css";
import github from "../../img/github.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import blog from "../../img/blog.svg";

const socialList = [
    {
        alt: "github",
        image: github,
        url: "https://github.com/fay-jai"
    },
    {
        alt: "twitter",
        image: twitter,
        url: "https://twitter.com/fay_jai"
    },
    {
        alt: "linkedin",
        image: linkedin,
        url: "https://www.linkedin.com/in/willsonmock"
    },
    {
        alt: "blog",
        image: blog,
        url: "https://medium.com/@fay_jai/"
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
        return socialList.map((social) => <Social key={social.alt} {...social} />);
    }
}

export default Title;
