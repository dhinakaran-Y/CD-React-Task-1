import { createRoot } from "react-dom/client";
import "./style-1.css";
import React from "react";

const skillList = ["HTML", "CSS", "Javascript", "React"];
const projectList = [
  {
    title: "Portfolio Website",
    content: "Personal portfolio built using React.",
    status: "Status: Completed",
  },
  {
    title: "Task Manager",
    content: "A simple task management app.",
    status: "Status: In Progress",
  },
];

createRoot(document.getElementById("root")).render(
  React.createElement(
    "div",
    { className: "card" },
    // upper section
    React.createElement(
      "section",
      { className: "upper-section" },
      React.createElement("h1", { className: "title" }, "Developer Profile"),
      //   basic info section
      React.createElement(
        "section",
        { className: "basic-info" },
        // name
        React.createElement(
          "p",
          {},
          React.createElement("strong", {}, "Name: "),
          " Dhinakaran-Y",
        ),
        // role
        React.createElement(
          "p",
          {},
          React.createElement("strong", {}, "role: "),
          " Frontend Developer",
        ),
        // skill section
        React.createElement("section", {className: "skills-section"},
            React.createElement("h2", {className: "title"}, "Skills"),
            React.createElement("ul", {}, 
                 skillList.map((skill,index)=> {
                   return React.createElement("li",{key:index}, skill)
                 })
            )
        )
      ),
    ),

    // lower section
    React.createElement(
      "section",
      { className: "projects-section" },
      React.createElement("h2", { className: "title" }, "Projects"),
      projectList.map((project, index) => {
        return React.createElement("div",{className: "project" , key: index}, 
            React.createElement("h3", {}, project.title),
            React.createElement("p",{},project.content),
            React.createElement("span", {}, project.status)
        )
      })
    ),
  ),
);