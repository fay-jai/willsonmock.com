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
        const educationList = education.map(({ name, degree, major, startYear, endYear, location }) => {
            return (
                <li key={name + startYear}className="Education__list_item">
                    <h3>Name: {name}</h3>
                    <p>Degree: {degree}</p>
                    <p>Major: {major}</p>
                    <p>Start Year: {startYear}</p>
                    <p>End Year: {endYear}</p>
                    <p>Location: {location}</p>
                </li>
            );
        });
        return <ul className="Education__list">{educationList}</ul>;
    }
}

export default Education;
