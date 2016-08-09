import React from "react";
import "./Name.css";

export default ({ name, profile }) => {
    return (
        <div className="Name">
            <div className="Name__image_container">
                <img className="Name__image" src={profile} alt="profile" />
            </div>
            <h1 className="Name__name">
                { name }
            </h1>
        </div>
    );
};
