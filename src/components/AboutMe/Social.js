import React from "react";

export default ({ alt, image, url }) => {
    return (
        <li className="Title__social_list_item">
            <a href={url}><img src={image} alt={alt} /></a>
        </li>
    );
};
