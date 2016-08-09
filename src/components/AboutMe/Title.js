import React, { Component } from "react";
import "./Title.css";
import github from "../../img/github.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import blog from "../../img/blog.svg";

class Title extends Component {
    render() {
        return (
            <div className="Title">
                <h1 className="Title__title">
                    Software Engineer
                </h1>
                <ul className="Title__social_list">
                    <li className="Title__social_list_item">
                        <img src={github} alt="github" />
                    </li>
                    <li className="Title__social_list_item">
                        <img src={twitter} alt="twitter" />
                    </li>
                    <li className="Title__social_list_item">
                        <img src={linkedin} alt="linkedin" />
                    </li>
                    <li className="Title__social_list_item">
                        <img src={blog} alt="blog" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Title;
