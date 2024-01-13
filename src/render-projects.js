import { Projects, switchActiveProject } from "./projects";
import { taskRender } from "./task.render";

export function projectRender() {
  const projectsDiv = document.querySelector(".projects");
  projectsDiv.innerHTML = "";
  for (let i = 0; i < Projects.length; i++) {
    let project = Projects[i];
    let projectCard = document.createElement("div");
    projectCard.innerHTML = `<div class='project-card' data-index='${i}'>
    <h1 class="project-title">${project.title}</h1>
    <img class="delete-project" src="assets/delete.svg">
    </div>`;
    projectCard.addEventListener("click", () => {
      switchActiveProject(i);
      taskRender();
      projectRender();
    });
    projectsDiv.appendChild(projectCard);
  }
}
{/* <h2 class='project-description'>${project.description}</h2> */}