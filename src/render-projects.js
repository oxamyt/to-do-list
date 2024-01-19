import { Projects, switchActiveProject } from "./projects";
import { taskRender } from "./task.render";
import { activeProject } from "./projects";
import { saveToStorage } from "./projects";

export function projectRender() {
  const projectsDiv = document.querySelector(".projects");
  projectsDiv.innerHTML = "";
  for (let i = 0; i < Projects.length; i++) {
    let project = Projects[i];
    let projectCard = document.createElement("div");
    projectCard.setAttribute("data-index", i);
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
    <h1 class="project-title">${project.title}</h1>
    <img class="delete-project" src="assets/delete.svg">
    `;
    projectCard.addEventListener("click", () => {
      switchActiveProject(i);
      taskRender();
      projectRender();
      headerRender()
    });
    if (project.active) {
      projectCard.classList.add("active-project");
    }
    projectsDiv.appendChild(projectCard);
  }
  saveToStorage()
}

export function headerRender(){
  const header = document.querySelector('.header');
  const activeProj = activeProject();
  header.innerHTML="";

  if (activeProj) {
    const desc = document.createElement('div');
    desc.classList.add('project-info')
    desc.innerHTML=(`<h1 class="title" >${activeProj.title}</h1>
    <h2 class="description">${activeProj.description}</h2>`)
    header.appendChild(desc);
  }
}
