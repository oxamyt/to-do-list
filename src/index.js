import { Projects, Project } from "./projects";

export function createProject(event) {
  event.preventDefault();
  const title = document.querySelector("#project-name").value;
  const description = document.querySelector("#project-description").value;
  const newProject = new Project(title, description);
  Projects.push(newProject);
  console.log(Projects)
}

const btn = document.querySelector('.add-project');
btn.addEventListener('click', createProject)

console.log('dadada')