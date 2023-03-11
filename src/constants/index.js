import {
  instagram,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mySQL,
  tailwind,
  nodejs,
  php,
  git,
  itschool,
  udemy,
  WeatherAPI,
  victoriousstore,
  threejs,
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

export const options = [
  {
    icon:"sunny",
    text: "light",
  },
  {
   icon: "moon",
   text: "dark",
  },
  {
    icon: "desktop-outline",
    text: "system",
  }
];

const services = [
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/majedel-naser/",
  },
  {
    title: "Github",
    icon: git,
    link: "https://github.com/mremperorx",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/elnasermajed/",
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mySQL,
  },
];

const experiences = [
  {
    title: "Front-End Web Development",
    company_name: "IT-School",
    icon: itschool,
    iconBg: "#383E56",
    date: "Jun 2022 - Nov 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "victorious Store",
    description:
      "Ecommerce App uses the Fakestoreapi, Bulit with HTML/Tailwind/TypeScript/ Auth0 / Paypall GateWay/ Animation/ Vite.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: victoriousstore,
    source_code_link: "https://github.com/mremperorx/shopping-cart",
  },
  {
    name: "WeatherAPI",
    description:
      "Weather App uses the OpenWeatherMap Api. Bulit with HTML/CSS/TypeScript/Vite.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: WeatherAPI,
    source_code_link: "https://github.com/mremperorx/WeatherAPI/",
  },
];

export { services, technologies, experiences, projects };
