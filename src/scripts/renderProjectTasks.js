import { renderTaskTable } from "./rendertasktable";
import { clearDOM } from "./cleardom";

function renderProjectTasks(project) {
  let title = project.name;
  if (title == "") {
    title = "Unassigned";
  }
  let tasks = project.tasks;
  clearDOM();
  renderTaskTable(tasks);
  document.getElementById("area-header").innerText =
    "Tasks for Project: " + project.name;
}

export { renderProjectTasks };
