import { createProject } from "./projects";
import { createTask } from "./tasks";
import { taskRender } from "./task.render";
import { projectRender } from "./render-projects";
import { removeTask } from "./manipulate.tasks";
import { removeProject } from "./manipulate-projects";


const btnProject = document.querySelector(".add-project");
btnProject.addEventListener("click", createProject);
btnProject.addEventListener("click", projectRender);
btnProject.addEventListener('click', function(){
    projectForm.style.display = 'none';
})

const btnTask = document.querySelector(".add-task");
btnTask.addEventListener("click", createTask);
btnTask.addEventListener("click", taskRender);

document.querySelector('.main').addEventListener('click', function(event){
    const target = event.target;
    if(target.classList.contains('delete-task')){
        const taskIndex = target.closest('.task-card').dataset.index;
        removeTask(taskIndex);
    }
})

document.querySelector('.projects').addEventListener('click', function(event){
    const target = event.target;
    if(target.classList.contains('delete-project')){
        const projectIndex = target.closest('.project-card').dataset.index;
        removeProject(projectIndex);
    }
})

const projectForm = document.querySelector('.project-form-container');
const btnRenderProject = document.querySelector('.create-project');
btnRenderProject.addEventListener('click', function(){
        projectForm.style.display = 'flex';
})
