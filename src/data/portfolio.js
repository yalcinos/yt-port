import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaNode,
  FaGulp,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRedux,
  SiMysql,
  SiFirebase,
  SiApachecordova,
  SiPostgresql,
  SiJavascript,
  SiMaterialUi,
  SiExpo,
  SiPhp,
} from "react-icons/si";
const portfoliosData = [
  {
    id: 1,
    projectName: "Kovan",
    projectDetails:
      "Plugins based household management mobile application to manage all kinds of small groups effectively and make your life easier",
    location: "Vancouver, Canada",
    technologies: [
      "React-Native",
      "NativeBase UI",
      "FireBase",
      "Node.js",
      "MySQL",
      "Expo",
    ],
    features: [
      "Expense/Budget Management",
      "Real-time chat app",
      "Kids/Elders tracking",
      "Create/Manage events with calendar feature",
    ],
    techIcons: [FaReact, SiRedux, SiExpo, FaNode, SiFirebase, SiMysql],
    githubLink: "https://github.com/bivt-cap/bivt-frontend",
    liveDemo: "",
  },
  {
    id: 2,
    projectName: "Taskiton",
    projectDetails:
      "Kanban-Base web application to manage the business and personal tasks effectively and communicate with colleagues with Real-Time chat.",
    location: "Vancouver, Canada",
    technologies: [
      "React.js",
      "Node.js",
      "Material UI",
      "Chart.js",
      "Socket.io",
      "MySQL",
    ],
    features: [
      "Create/Manage tasks",
      "Assign tasks to other people",
      "Real-time chat application",
      "Analytic dashboard for tracking tasks",
    ],
    techIcons: [FaReact, FaNodeJs, SiMaterialUi, SiMysql, SiFirebase],
    githubLink: "https://github.com/Taskiton/taskiton",
    liveDemo: "",
  },
  {
    id: 3,
    projectName: "Odyssey",
    projectDetails:
      "Social driven responsive mobile application that helps to share your memories with other people and explore new places by using a gamified map",
    location: "Vancouver, Canada",
    technologies: ["JavaScript(Vanilla)", "Node.js", "Framework7", "Cordova"],
    features: [
      "Instant check-in at the specific places",
      "Augmented Reality",
      "Create a team and conquer other team lands on the google maps.",
    ],
    techIcons: [SiJavascript, FaHtml5, FaCss3, SiMysql, SiApachecordova],
    githubLink: "https://github.com/OdysseyApp/OdysseyCordova",
    liveDemo: "",
  },
  {
    id: 4,
    projectName: "WeeklyMood",
    images: [],
    projectDetails:
      "The application measure and analysis employee motivation by questions. Analyze the employees' motivation by using their answers. ",
    location: "Vancouver, Canada",
    technologies: ["Angular.js", "PHP(Laravel)", "MySQL", "Bootstrap"],
    features: [
      "Send recurring email",
      "Analyze employees' email response",
      "Analytic dashboard",
    ],
    techIcons: [FaAngular, SiPhp, FaGulp, SiPostgresql],
    githubLink: "https://github.com/ikamp/weeklymood",
    liveDemo: "",
  },
  {
    id: 5,
    projectName: "React Movie List",
    projectDetails:
      "List movies and TV Shows with The Movie Database API using React.js",
    location: "Vancouver, Canada",
    technologies: ["React.js", "Material UI", "Movie DB API"],
    features: [],
    techIcons: [FaReact, FaHtml5, SiMaterialUi, FaCss3],
    githubLink: "https://github.com/yalcinos/react-movies-list",
    liveDemo: "",
  },
  {
    id: 6,
    projectName: "Covid19 Tracker",
    projectDetails: "Covid19 Tracker which was written with React.js",
    location: "Vancouver, Canada",
    technologies: ["React.js", "Material UI", "Chart.js"],
    features: [],
    techIcons: [FaReact, FaHtml5, SiMaterialUi, FaCss3],
    githubLink: "https://github.com/yalcinos/Covid19-React",
    liveDemo: "https://yalcinos.github.io/Covid19-React/",
  },
  {
    id: 7,
    projectName: "RGB Color Guess Game",
    projectDetails:
      "A color guessing game. A JavaScript-based application to remind you of RGB color models.",
    location: "Vancouver, Canada",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: [],
    techIcons: [SiJavascript, FaHtml5, FaCss3],
    githubLink: "https://github.com/yalcinos/color-guess-game",
    liveDemo: "",
  },
];
export default portfoliosData;
