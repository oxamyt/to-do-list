import { projectRender } from "./render-projects";

export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
    this.active = true;
  }
}

export let Projects = [];

export function activeProject() {
  return Projects.find((project) => project.active);
}

export function switchActiveProject(index) {
  Projects.forEach((project, i) => (project.active = i === index));
}


export function createProject(event) {
  event.preventDefault();
  const title = document.querySelector("#project-name").value;
  const description = document.querySelector("#project-description").value;
  const newProject = new Project(title, description);
  Projects.push(newProject);
  projectRender();
}
