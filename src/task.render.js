import { tasks } from "./tasks";

export function taskRender(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    for (let i = 0; i < tasks.length; i++){
        let task = tasks[i];
        let taskCard = document.createElement('div');
        taskCard.innerHTML = `<div class="task-card">
        <input class="checkbox" type="checkbox" />
        <h1 class="task-title">${task.title}</h1>
        <h2 class='description'>${task.description}</h2>
        <h2 class='date'>${task.date}</h2>
        <h2 class='priority'>${task.priority}</h2>
    </div>`
    main.appendChild(taskCard);
    }
}