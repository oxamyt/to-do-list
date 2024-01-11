import { Projects, Project } from "./projects";
import { createProject } from "./projects";
import { Task, tasks, createTask } from "./tasks";
import { taskRender } from "./task.render";
import { projectRender } from "./render-projects";


const btnProject = document.querySelector('.add-project');
btnProject.addEventListener('click', createProject);
btnProject.addEventListener('click', projectRender);


const btnTask = document.querySelector('.add-task');
btnTask.addEventListener('click', createTask);
btnTask.addEventListener('click', taskRender);



