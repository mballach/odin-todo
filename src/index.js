import "./styles.css";
import { resetIndex } from "./scripts/resetindex.js";
import { renderAllTasks } from "./scripts/renderAllTasks.js";
import { renderProjectGrid } from "./scripts/renderprojectgrid.js";
import { renderHome } from "./scripts/renderhome.js";
import { initializeForm } from "./scripts/initializeform.js";

let newTaskButton = document.getElementById("newTask");
let tasksButton = document.getElementById("tasksButton");
let taskFormArea = document.getElementById("taskFormArea");
let taskForm = document.getElementById("taskForm");
let closeModal = document.getElementById("closeModal");
let submitTask = document.getElementById("submitTask");
let areaHeader = document.getElementById("area-header");
let homeButton = document.getElementById("homeButton");
let projectsButton = document.getElementById("projectsButton");
let mainArea = document.getElementById("area");

tasksButton.addEventListener("click", () => {
  resetIndex();
  renderAllTasks();
});

newTaskButton.addEventListener("click", () => {
  taskForm.reset();
  initializeForm(true, false, false);
});

closeModal.addEventListener("click", (e) => {
  taskForm.reset();
  taskFormArea.close();
});

projectsButton.addEventListener("click", () => {
  renderProjectGrid();
});

homeButton.addEventListener("click", () => {
  renderHome();
});

resetIndex();
renderHome();
