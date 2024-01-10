export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

export let Projects = [];

export function createProject(event) {
  event.preventDefault();
  const title = document.querySelector("#project-name").value;
  const description = document.querySelector("#project-description").value;
  const newProject = new Project(title, description);
  Projects.push(newProject);
  console.log(Projects);
}
