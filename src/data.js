import moment from "moment";
import blog from "./img/blog.svg";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import profile from "./img/profile.jpg";
import twitter from "./img/twitter.svg";

const data = {
    aboutMe: {
        name: "Willson Mock",
        email: "willson.mock@gmail.com",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, elit ut elementum venenatis, lorem nunc ullamcorper nulla, non condimentum sapien quam ut orci. Ut a nisi nec neque elementum imperdiet. In hac habitasse platea dictumst. Sed rhoncus, nulla vitae condimentum tincidunt, magna velit feugiat enim, nec molestie ante est vel lorem. Praesent elit nisi, tristique venenatis augue eleifend, aliquet mattis velit. Curabitur suscipit, urna et malesuada mattis, felis justo consectetur tortor, sit amet volutpat arcu nisl vitae diam. Donec et urna ac risus volutpat euismod eu et quam. Integer feugiat laoreet consectetur. Vestibulum mattis erat non purus lobortis rutrum. Quisque tristique pretium sem a auctor. Cras sed elementum ligula, in aliquam diam.",
        profile: profile,
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
            title: "Full Stack Engineer",
            location: "San Francisco, CA",
            startDate: moment("February 2015").format("MMMM YYYY"),
            endDate: null
        },
        {
            company: "Altitude Labs",
            title: "Full Stack Engineer",
            location: "Hong Kong, China",
            startDate: moment("February 2014").format("MMMM YYYY"),
            endDate: moment("January 2015").format("MMMM YYYY"),
        },
        {
            company: "AppNexus",
            title: "Technical Consultant",
            location: "New York, NY",
            startDate: moment("January 2012").format("MMMM YYYY"),
            endDate: moment("June 2013").format("MMMM YYYY"),
        },
        {
            company: "American Express",
            title: "Senior Manager",
            location: "New York, NY",
            startDate: moment("July 2008").format("MMMM YYYY"),
            endDate: moment("December 2011").format("MMMM YYYY"),
        }
    ],
    education: [

    ]
};

module.exports = data;
