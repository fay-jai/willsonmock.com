import React, { Component } from "react";
import { experience } from "../../data";
import "./Experience.css";

class Experience extends Component {
    render() {
        return (
            <div className="Experience">
                <h2 className="Experience__header">Experience</h2>
                { this.renderExperienceList() }
            </div>
        );
    }

    renderExperienceList() {
        const experienceList = experience.map(({ company, title, location, startDate, endDate }) => {
            return (
                <li className="Experience__list_item">
                    <p>Company: {company}</p>
                    <p>Title: {title}</p>
                    <p>Location: {location}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                </li>
            );
        });
        return <ul className="Experience__list">{ experienceList }</ul>;
    }
};

export default Experience;
