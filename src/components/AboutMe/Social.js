import React from "react";

export default ({ image, alt }) => {
    return (
        <li className="Title__social_list_item">
            <img src={image} alt={alt} />
        </li>
    );
};
