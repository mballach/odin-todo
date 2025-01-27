import { logTask } from "./logtask.js";
import { removeTask } from "./removetask.js";

let globalIndex = 0;
class Task {
  constructor(
    title,
    description,
    dueDate,
    project,
    priority,
    status,
    taskIndex,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.status = status;
    this.taskIndex = taskIndex;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  flipStatus() {
    this.status = !this.status;
  }

  changeProject(project) {
    this.project = this.project;
  }

  changePriority(priority) {
    this.priority = priority;
  }
}

function createTask(title, description, dueDate, priority, status, project) {
  let newTask = new Task(
    title,
    description,
    dueDate,
    priority,
    status,
    project,
  );
  logTask(newTask);
}

export { Task, createTask };
