import React from "react";
import moment from "moment";
import blog from "./img/blog.svg";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import profile from "./img/profile.jpg";
import twitter from "./img/twitter.svg";

const blurb = (
    <span>
        Grew up in <a href="https://en.wikipedia.org/wiki/Chinatowns_in_Brooklyn">NYC</a> and&nbsp;
        <a href="https://en.wikipedia.org/wiki/Melbourne,_Florida">Florida</a> before adventuring to&nbsp;
        <a href="http://altitudelabs.com/">Hong Kong</a> and settling in the Bay Area. Love personal fitness and recently completed a&nbsp;
        <a href="https://www.instagram.com/p/BGVtFHEyBTV/?taken-by=fay_jai">100 day challenge</a>. Traveled off the beaten path to become a
        software engineer, and always striving to learn more and <a href="https://medium.com/@fay_jai/">teach others</a>.
    </span>
);

const data = {
    aboutMe: {
        name: "Willson Mock",
        email: "willson.mock@gmail.com",
        blurb,
        profile,
        social: [
            {
                alt: "github",
                image: github,
                url: "https://github.com/fay-jai"
            },
            {
                alt: "twitter",
                image: twitter,
                url: "https://twitter.com/fay_jai"
            },
            {
                alt: "linkedin",
                image: linkedin,
                url: "https://www.linkedin.com/in/willsonmock"
            },
            {
                alt: "blog",
                image: blog,
                url: "https://medium.com/@fay_jai/"
            }
        ],
        title: "Software Engineer"
    },
    experience: [
        {
            company: "Palantir",
            url: "https://www.palantir.com/",
            title: "Full Stack Engineer",
            location: "San Francisco, CA",
            startDate: moment("February 2015").format("MMMM YYYY"),
            endDate: null,
            accomplishments: [
                "Migrated existing Angular 1.x project to React ecosystem and improved existing tooling",
                "Created front-end user interface for data integration tool using React.js and TypeScript",
                "Built visualization dashboard for oil company using Backbone.js and CoffeeScript"
            ]
        },
        {
            company: "Altitude Labs",
            url: "http://altitudelabs.com/",
            title: "Founder & Full Stack Engineer",
            location: "Hong Kong, China",
            startDate: moment("February 2014").format("MMMM YYYY"),
            endDate: moment("January 2015").format("MMMM YYYY"),
            accomplishments: [
                "Lead front-end engineer for client projects",
                "Responsible for hiring and onboarding process"
            ]
        },
        {
            company: "AppNexus",
            url: "https://www.appnexus.com/",
            title: "Technical Consultant",
            location: "New York, NY",
            startDate: moment("January 2012").format("MMMM YYYY"),
            endDate: moment("June 2013").format("MMMM YYYY"),
            accomplishments: [
                "Started new team dedicated to advising 3rd app developers on how to integrate with AppNexus APIs"
            ]
        },
        {
            company: "American Express",
            url: "https://www.americanexpress.com/",
            title: "Senior Manager",
            location: "New York, NY",
            startDate: moment("July 2008").format("MMMM YYYY"),
            endDate: moment("December 2011").format("MMMM YYYY"),
            accomplishments: [
                "Managed team focused on increasing effectiveness of different Small Business online acquistion channels"
            ]
        }
    ],
    education: [
        {
            name: "Cornell University",
            url: "https://www.cornell.edu/",
            degree: "Masters of Engineering",
            major: "Operations Research & Industrial Engineering",
            startYear: moment("2007").format("YYYY"),
            endYear: moment("2008").format("YYYY"),
            location: "Ithaca, NY"
        },
        {
            name: "Cornell University",
            url: "https://www.cornell.edu/",
            degree: "Bachelors of Science",
            major: "Operations Research & Industrial Engineering",
            startYear: moment("2003").format("YYYY"),
            endYear: moment("2007").format("YYYY"),
            location: "Ithaca, NY"
        }
    ]
};

module.exports = data;
