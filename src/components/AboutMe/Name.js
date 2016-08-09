import React, { Component } from "react";
import profile from "../../img/profile.jpg";
import "./Name.css";

class Name extends Component {
    render() {
        return (
            <div className="Name">
                <div className="Name__image_container">
                    <img className="Name__image" src={profile} alt="profile" />
                </div>
                <h1 className="Name__name">
                    Willson Mock
                </h1>
            </div>
        );
    }
}

export default Name;
