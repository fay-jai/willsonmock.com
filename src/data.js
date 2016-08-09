import blog from "./img/blog.svg";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import profile from "./img/profile.jpg";
import twitter from "./img/twitter.svg";

const data = {
    aboutMe: {
        name: "Willson Mock",
        email: "willson.mock@gmail.com",
        blurb: "Just a fay jai",
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

    ],
    education: [

    ]
};

module.exports = data;
