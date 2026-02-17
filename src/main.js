import "/src/style-1.css";

const rootEL = document.getElementById("root");

// create Fn
const cardEl = document.createElement("div");
cardEl.classList.add("card");

const upperSectionEl = document.createElement("div");
upperSectionEl.classList.add("upper-section");
rootEL.append(cardEl);

const titleEl = document.createElement("h1");
titleEl.classList.add("title");
titleEl.textContent = "Developer Profile";
upperSectionEl.append(titleEl);

// base sec
const basicSecComment = document.createComment("Basic Info");
upperSectionEl.append(basicSecComment);

const basicSecEl = document.createElement("section");
basicSecEl.classList.add("basic-info");
upperSectionEl.append(basicSecEl);

const nameEl = document.createElement("p");
nameEl.textContent = " Dhinakaran-Y";
const nameTitleEl = document.createElement("strong");
nameTitleEl.textContent = "Name: ";
nameEl.prepend(nameTitleEl);
basicSecEl.append(nameEl);

const roleEl = document.createElement("p");
roleEl.textContent = " Frontend Developer";
const roleTitleEl = document.createElement("strong");
roleTitleEl.textContent = "Role: ";
roleEl.prepend(roleTitleEl);
basicSecEl.append(roleEl);

// skill sec
const skillsSecComment = document.createComment("Skill");
upperSectionEl.append(skillsSecComment);

const skillsSecEl = document.createElement("section");
skillsSecEl.classList.add("skills-section");
upperSectionEl.append(skillsSecEl);

const skillsTitleEl = document.createElement("h2");
skillsTitleEl.classList.add("title");
skillsTitleEl.textContent = "Skills";
skillsSecEl.append(skillsTitleEl);

const ulEl = document.createElement("ul");
skillsSecEl.append(ulEl);
const skillList = ["HTML", "CSS", "Javascript", "React"];

skillList.forEach((skill) => {
  const liEl = document.createElement("li");
  liEl.textContent = skill;
  ulEl.append(liEl);
});

// project sec
const projectSecComment = document.createComment("Project");

const projectSecEL = document.createElement("section");
projectSecEL.classList.add("projects-section");

const projectSecTitleEl = document.createElement("h2");
projectSecTitleEl.classList.add("title");
projectSecTitleEl.textContent = "Projects";
projectSecEL.append(projectSecTitleEl);

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

projectList.forEach((project) => {
  const projectDivEl = document.createElement("div");
  projectDivEl.classList.add("project");

  const titleEl = document.createElement("h3");
  titleEl.textContent = project.title;

  const contentEL = document.createElement("p");
  contentEL.textContent = project.content;

  const statusEl = document.createElement("span");
  statusEl.textContent = project.status;

  projectDivEl.append(titleEl, contentEL, statusEl);
  projectSecEL.append(projectDivEl);
});

cardEl.append(upperSectionEl, projectSecComment, projectSecEL);
