import React from "react";
import "./Blurb.css";

export default ({ blurb, email }) => {
    return (
        <div className="Blurb">
            <p className="Blurb__text">{blurb}</p>
            <a href={`mailto:${email}`} className="Blurb__contact_button">Say Hi!</a>
        </div>
    );
};
