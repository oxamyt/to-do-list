
export class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
  changeStatus(){
    this.status = !this.status;
  }
}

export let tasks = []

export function createTask(event) {
    event.preventDefault();
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector("#priority-choice").value;
    const newTask = new Task(title, description, date, priority);
    tasks.push(newTask);
    console.log(tasks)
  }

