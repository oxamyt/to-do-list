import { Projects, Project } from "./projects";
import { createProject } from "./projects";
import { Task, tasks, createTask } from "./tasks";
import { taskRender } from "./task.render";


const btnProject = document.querySelector('.add-project');
btnProject.addEventListener('click', createProject);

const btnTask = document.querySelector('.add-task');
btnTask.addEventListener('click', createTask);
btnTask.addEventListener('click', taskRender);

console.log('dadada')