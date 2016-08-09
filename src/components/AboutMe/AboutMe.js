import React from "react";
import Name from "./Name";
import Title from "./Title";
import Blurb from "./Blurb";
import { aboutMe } from "../../data";

export default () => {
    const { blurb, email, name, profile, social, title } = aboutMe;
    return (
        <div className="AboutMe">
            <Name name={name} profile={profile} />
            <Title social={social} title={title} />
            <Blurb blurb={blurb} email={email} />
        </div>
    );
};
