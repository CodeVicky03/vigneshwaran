import api from "../assets/api.png";
import watch from "../assets/watch.png";
import tesla from "../assets/tesla.png";
import task from "../assets/task.png";
import zetway from "../assets/zetway.png";
import interview from "../assets/interview.png";
import login from "../assets/login.png";
import log from "../assets/log.png";
import form from "../assets/form.png";
import emi from "../assets/emi.png";

const proj = [
  {
    proj: "1",
    title: "Image-to-Speech (API)",
    description:
      "This web application utilizes Tesseract.js to extract text from images, translates it into multiple languages via RapidAPI, and vocalizes it using window.speechSynthesis. It's designed for seamless multilingual communication and accessibility, suitable for both educational and practical applications.",
    image: api,
    field : "frontend/backend",
    git : "https://github.com/CodeVicky03/API",
    preview : "https://api-3vumbhcui-vickys-projects-45265fd6.vercel.app/"
  },
  {
    proj: "2",
    title: "Smart Watch",
    description:
      "Explore our custom-designed smartwatch website, built with React.js, featuring sleek designs and smooth animations inspired by the Apple Watch. The site offers a dynamic, interactive experience, showcasing advanced wearable technology.",
    image: watch,
    field : "frontend",
    git : "https://github.com/CodeVicky03/Smart-Watch",
    preview : "https://smart-watch-three.vercel.app/"
  },
  {
    proj: "3",
    title: "Tesla",
    description:
      "Explore our custom Tesla web clone created with React.js, featuring responsive design through media queries and enhanced navigation using React Router. This project showcases my ability to replicate complex functionalities and layouts for an immersive user experience.",
    image: tesla,
    field : "frontend",
    git : "https://github.com/CodeVicky03/Tesla-Web-Clone",
    preview : "https://tesla-web-clone-five.vercel.app/"
  },
  {
    proj: "4",
    title: "Task Manager",
    description:
      "I developed a task manager application using a full-stack React.js for the frontend, coupled with Node.js, Express.js, and MongoDB for the backend. This application efficiently manages and tracks tasks, offering a responsive and user-friendly interface for seamless task organization.",
    image: task,
    field : "frontend/backend",
    git : "",
  },
  {
    proj: "5",
    title: "Zetway",
    description:
      "Discover the Zetway webpage, showcasing a unique design with an intuitive user interface that emphasizes usability and aesthetic appeal. Implemented animations and transitions enhance user engagement, delivering a visually striking and smooth browsing experience.",
    image: zetway,
    field : "internship",
    preview : "https://www.zetway.in/"
  },
  {
    proj: "6",
    title: "Rehearse",
    description:
      "Explore our interview-based Q&A website designed to prepare candidates for specific job positions by offering targeted questions and expert advice. This platform provides a comprehensive resource for understanding the nuances of various roles, aiding in effective interview preparation.",
    image: interview,
    field : "internship",
  },
  {
    proj: "7",
    title: "EMI Calculator",
    description:
      "Experience our EMI Calculator built with HTML, CSS, and JavaScript, offering precise mathematical calculations to help users determine their monthly loan payments. This intuitive tool is designed for ease of use, enabling quick financial planning and budget management.",
    image: emi,
    field : "frontend",
    git : "https://github.com/CodeVicky03/EMI-Calculator",
    preview : "https://codevicky03.github.io/EMI-Calculator/"
  },
  {
    proj: "8",
    title: "Register & Login Form",
    description:
      "Fully-authenticated login form, designed using React for the frontend and Node.js, Express, and MongoDB for the backend. This robust system supports user registration and login functionalities, implemented with secure communication for seamless user experience and data integrity.",
    image: login,
    field : "frontend/backend",
    git : "",
    preview : ""
  },
  {
    proj: "9",
    title: "Login Form",
    description:
      "Check out our regular login form landing page, designed for simplicity and ease of use. It provides a straightforward interface for users to securely access their accounts, ensuring a smooth and efficient login experience.",
    image: log,
    field : "internship",
    git : "",
    preview : ""
  },
  {
    proj: "10",
    title: "Student Form",
    description:
      "Discover our student registration form, crafted with React on the frontend and Node.js, Express, and MongoDB on the backend. This application efficiently collects student details such as name, roll number, and age offering a seamless and organized data management solution for educational institutions.",
    image: form,
    field : "frontend/backend",
    git : "",
    preview : ""
  },
];

export default proj;
