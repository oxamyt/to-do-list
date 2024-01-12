import { Projects } from "./projects";
import { projectRender } from "./render-projects";

export function removeProject(index) {
    Projects.splice(index, 1);
    projectRender();

}
