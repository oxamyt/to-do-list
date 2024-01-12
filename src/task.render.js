import { activeProject } from "./projects";

export function taskRender() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  const activeProj = activeProject();
  if (activeProj) {
    activeProj.tasks.forEach((task, index) => {
      let taskCard = document.createElement("div");
      taskCard.innerHTML = `<div class="task-card" data-index='${index}'>
        <input class="checkbox" type="checkbox" />
        <h1 class="task-title">${task.title}</h1>
        <h2 class='description'>${task.description}</h2>
        <h2 class='date'>${task.date}</h2>
        <h2 class='priority'>${task.priority}</h2>
        <button class='delete-task'>Remove Task</button>
    </div>`;
      main.appendChild(taskCard);
    });
  }
}


