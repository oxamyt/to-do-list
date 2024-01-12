import { Projects, switchActiveProject } from "./projects";
import { taskRender } from "./task.render";

export function projectRender() {
  const projectsDiv = document.querySelector(".projects");
  projectsDiv.innerHTML = "";
  for (let i = 0; i < Projects.length; i++) {
    let project = Projects[i];
    let projectCard = document.createElement("div");
    // projectCard.className = "project-card";
    projectCard.innerHTML = `<div class='project-card' data-index='${i}'>
    <h1 class="project-title">${project.title}</h1>
    <h2 class='project-description'>${project.description}</h2>
    <button class='delete-project'>Remove Project</button>
    </div>`;
    projectCard.addEventListener("click", () => {
      switchActiveProject(i);
      taskRender();
      projectRender();
    });
    projectsDiv.appendChild(projectCard);
  }
}
