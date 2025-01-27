import { resetIndex } from "./resetindex";
import { createTask } from "./task";

function addNewTask() {
  let title = document.getElementById("taskTitle");
  let description = document.getElementById("taskDescription");
  let dueDate = document.getElementById("dueDate");
  let project = document.getElementById("project");
  let priority = document.getElementById("priority");
  let status = document.getElementById("completed");

  let newTask = createTask(
    title.value,
    description.value,
    dueDate.value,
    project.value,
    priority.value,
    status.checked,
    0,
  );
  resetIndex();
}
export { addNewTask };
