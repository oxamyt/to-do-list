import { activeProject } from "./projects";
import { taskRender } from "./task.render";

export function removeTask(index) {
  const activeProj = activeProject();

  if (activeProj) {
    activeProj.tasks.splice(index, 1);
    taskRender();
  }  
}
