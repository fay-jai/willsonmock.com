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
        const experienceList = experience.map(({ company, url, title, startDate, endDate, accomplishments }) => {
            const present = endDate === null ? "Present" : endDate;

            return (
                <li key={company} className="Experience__list_item">
                    <h3 className="Experience__company"><a href={url} className="Experience__url">{company}</a></h3>
                    <p className="Experience__title_dates">
                        <span className="Experience__title">{title}</span>
                        <span className="bullet">&bull;</span>
                        <span className="Experience__start_date">{startDate}</span>
                        <span> &ndash; </span>
                        <span className="Experience__end_date">{present}</span>
                    </p>
                    { this.renderAccomplishmentsList(accomplishments) }
                </li>
            );
        });
        return <ul className="Experience__list">{ experienceList }</ul>;
    }

    renderAccomplishmentsList(accomplishments) {
        const list = accomplishments.map((acc, idx) => {
            return <li key={idx} className="Experience__accomplishments_list_item">{acc}</li>;
        });
        return <ul className="Experience__accomplishments_list">{list}</ul>;
    }
};

export default Experience;
