import { projectRender } from "./render-projects";
import { headerRender } from "./render-projects";
import { taskRender } from "./task.render";

export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
    this.active = true;
  }
}

export function defaultProject() {
  const DefaultProject = new Project("Default Project", "");
  Projects.push(DefaultProject);
  projectRender();
  headerRender();
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
  headerRender();
  saveToStorage();
}

export function saveToStorage(){
  localStorage.setItem('projects', JSON.stringify(Projects))
}

export function loadFromStorage(){
  const storedProjects = localStorage.getItem('projects');
  if(storedProjects){
      Projects = JSON.parse(storedProjects);
      projectRender();
      taskRender();
  }
  else{
    defaultProject();
  }
}
