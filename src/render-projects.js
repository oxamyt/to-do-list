import { Projects, switchActiveProject } from "./projects";
import { taskRender } from "./task.render";
import { activeProject } from "./projects";

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
}

export function headerRender(){
  const header = document.querySelector('.header');
  const activeProj = activeProject();
  header.innerHTML="";

  if (activeProj) {
    const desc = document.createElement('div');
    desc.innerHTML=(`Description:${activeProj.description}`)
    header.appendChild(desc);
  }
}

{
  /* <h2 class='project-description'>${project.description}</h2> */
}
// export function projectRender() {
//   const projectsDiv = document.querySelector(".projects");
//   projectsDiv.innerHTML = "";
//   for (let i = 0; i < Projects.length; i++) {
//     let project = Projects[i];
//     let projectCard = document.createElement("div");
//     projectCard.setAttribute('data-index', i)
//     projectCard.innerHTML = `<div class='project-card' data-index='${i}'>
//     <h1 class="project-title">${project.title}</h1>
//     <img class="delete-project" src="assets/delete.svg">
//     </div>`;
//     projectCard.addEventListener("click", () => {
//       switchActiveProject(i);
//       taskRender();
//       projectRender();
//     });
//     if (project.active){
//       projectCard.classList.add('active-project');
//     }
//     projectsDiv.appendChild(projectCard);
//   }
// }
