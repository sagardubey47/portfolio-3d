import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  eventSpeaker,
  Nice,
  deltatreLogo,
  wakefitLogo,
  newtonLogo,
  hotel,
  youtubeClone,
  doodleBooks,
  AK,
  Lach,
  Saumitra,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Tech Event speaker",
    icon: eventSpeaker,
  },
  {
    title: "Public Speaking",
    icon: Nice,
  },
  // {
  //   title: "Workshop speaker",
  //   icon: Workshop,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Deltatre",
    icon: deltatreLogo,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "developed features like Enhanced Search, Live Content Display, Advanced Hero Row and Diva Player Integration, etc.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Wakefit",
    icon: wakefitLogo,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "Worked on Customer Relation Software(CRM) using React.js and Node.js",
      "Worked on Return and Replacement(RNR) Automation module",
      "Contribution in Consumer Website revamp, major role played in  Product Details Pages(PDP), Authentication module, Checkout Page, Accounts Module, Reviews and Rating, etc.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Newton School",
    icon: newtonLogo,
    iconBg: "#383E56",
    date: "Oct 2020 - May 2021",
    points: [
      "Data Structures and Algorithms using Java programming language.",
      "Participated in various coding contest organized by platform.",
      "Full Stack Web Development along with problem solving.",
      "Done various projects based on web technologies like Bomberman game, Stop Watch, Calculator, Tic-Tac-Toe game,Weather App, etc.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sagar is a very smart and switch in developer who has a very impressive pace of learning new things and he’s been a great addition for the Ref apps squad since day 1. He is never afraid of a challenge and would always be the first person to put this hand up to solve any tough problems which others might try to avoid. He’d be a great asset to any team",
    name: "Abhinesh Kharel",
    designation: "Product Owner",
    company: "Deltatre",
    image: AK,
  },
  {
    testimonial:
      "From my first meeting with Sagar, I recognised his standout talent immediately. I hired him as a Software Engineer to breathe life back into an orphaned product in 2022 that was critical to our company. Sagar quickly got up to speed with the project. Sagar always brought to our meetings a smile and a positive attitude which boosted team morale and confidence.",
    name: "Lachlan Grant",
    designation: "Tech lead",
    company: "Deltatre",
    image: Lach,
  },
  {
    testimonial:
      "We’ve joined our hands on several modules, and Sagar is one of the best people I had as a partner. Feels fortunate working with him in a very interesting and complicated project. The amount of problem solving skills he has is commendable and will surely take him to new heights.  I highly recommend his expertise to any person looking for an frontend engineer.",
    name: "Saumitra Tiwari",
    designation: "SDE 2",
    company: "Wakefit",
    image: Saumitra,
  },
];

const projects = [
  {
    name: "Hotel Website",
    description:
      "Web application that allows user to browse through wide range of Rooms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
      {
        name: "contentful ",
        color: "green-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/sagardubey47/hotel-reservation",
    project_link: "https://paradise-hotel-react.netlify.app/",
  },
  {
    name: "YouTube Clone",
    description: "An attempt to mock YouTube using it's open Api endpoints.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth",
        color: "text-indigo-700",
      },
    ],
    image: youtubeClone,
    project_link: "https://clone-7502d.web.app/",
  },
  {
    name: "Doodle Books",
    description:
      "An Online Book Store that fetches books from google book store.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "google api",
        color: "text-rose-500",
      },
    ],
    image: doodleBooks,
    project_link: "https://tiger-survey-2e48d.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
