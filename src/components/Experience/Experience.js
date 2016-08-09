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
        const bullet = <span className="bullet">&bull;</span>;
        const experienceList = experience.map(({ company, url, title, startDate, endDate }) => {
            const present = endDate === null ? "Present" : endDate;

            return (
                <li key={company} className="Experience__list_item">
                    <h3 className="Experience__company"><a href={url} className="Experience__url">{company}</a></h3>
                    <p className="Experience__title_dates">
                        <span className="Experience__title">{title}</span>
                        {bullet}
                        <span className="Experience__start_date">{startDate}</span>
                        <span> &ndash; </span>
                        <span className="Experience__end_date">{present}</span>
                    </p>
                </li>
            );
        });
        return <ul className="Experience__list">{ experienceList }</ul>;
    }
};

export default Experience;
