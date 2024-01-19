import { Projects } from "./projects";
import { projectRender } from "./render-projects";
import { taskRender } from "./task.render";
import { saveToStorage } from "./projects";

export function removeProject(index) {
    Projects.splice(index, 1);
    projectRender();
    taskRender();
    saveToStorage();
}
