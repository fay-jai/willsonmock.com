import React from "react";

export default ({ blurb, email }) => {
    return (
        <div className="Blurb">
            <p>{blurb}</p>
            <a href={`mailto:${email}`} className="Blurb__contact_button">Contact me</a>
        </div>
    );
};
