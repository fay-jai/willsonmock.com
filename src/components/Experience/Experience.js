import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div className="Experience">
            { this.renderExperienceList() }
            </div>
        );
    }

    renderExperienceList() {
        const experienceList = this.props.experience.map((work) => {
            return <li>Work</li>;
        });
        return <ul className="Experience__list">{ experienceList }</ul>;
    }
};

export default Experience;
