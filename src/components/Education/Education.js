import React, { Component } from "react";
import { education } from "../../data";
import "./Education.css";

class Education extends Component {
    render() {
        return (
            <div className="Education">
                <h2 className="Education__header">Education</h2>
                { this.renderEducationList() }
            </div>
        );
    }

    renderEducationList() {
        const educationList = education.map(({ name, url, degree, major, startYear, endYear }) => {
            return (
                <li key={name + startYear}className="Education__list_item">
                    <h3 className="Education__name"><a href={url} className="Education__url">{name}</a></h3>
                    <p className="Education__degree_dates">
                        <span className="Education__degree">{degree}, {major}</span>
                        <span className="bullet">&bull;</span>
                        <span className="Education__start_year">{startYear}</span>
                        <span> &ndash; </span>
                        <span className="Education__endYear">{endYear}</span>
                    </p>
                </li>
            );
        });
        return <ul className="Education__list">{educationList}</ul>;
    }
}

export default Education;
