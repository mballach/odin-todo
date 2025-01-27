import { clearDOM } from "./cleardom";
import projectIcon from "../icons/folder-multiple.svg";
import taskIconIMG from "../icons/invoice-list.svg";
import newTaskIcon from "../icons/checkbox-marked-circle-plus-outline.svg";
import { renderProjectGrid } from "./renderprojectgrid";
import { renderAllTasks } from "./renderAllTasks";
import { initializeForm } from "./initializeform";

function renderHome() {
  clearDOM();
  let area = document.getElementById("area");
  let taskFormArea = document.getElementById("taskFormArea");
  let taskForm = document.getElementById("taskForm");
  document.getElementById("area-header").innerText = "";

  let homeWrapper = document.createElement("div");
  homeWrapper.setAttribute("class", "home-wrapper");
  homeWrapper.setAttribute("id", "home-wrapper");

  let projHomeCard = document.createElement("div");
  let taskHomeCard = document.createElement("div");
  let newTaskHomeCard = document.createElement("div");

  projHomeCard.setAttribute("class", "home-card");
  taskHomeCard.setAttribute("class", "home-card");
  newTaskHomeCard.setAttribute("class", "home-card");

  let projHCTitle = document.createElement("div");
  projHCTitle.setAttribute("class", "home-card-title");
  projHCTitle.innerText = "Projects";
  projHomeCard.appendChild(projHCTitle);

  let taskHCTitle = document.createElement("div");
  taskHCTitle.setAttribute("class", "home-card-title");
  taskHCTitle.innerText = "Tasks";
  taskHomeCard.appendChild(taskHCTitle);

  let newTHCTitle = document.createElement("div");
  newTHCTitle.setAttribute("class", "home-card-title");
  newTHCTitle.innerText = "Add New Task";
  newTaskHomeCard.appendChild(newTHCTitle);

  let projIcon = document.createElement("img");
  projIcon.src = projectIcon;
  projIcon.setAttribute("class", "filter-white");

  let taskIcon = document.createElement("img");
  taskIcon.src = taskIconIMG;
  taskIcon.setAttribute("class", "filter-white");

  let newTIcon = document.createElement("img");
  newTIcon.src = newTaskIcon;
  newTIcon.setAttribute("class", "filter-white");

  projHomeCard.appendChild(projIcon);
  taskHomeCard.appendChild(taskIcon);
  newTaskHomeCard.appendChild(newTIcon);

  projHomeCard.addEventListener("click", () => {
    renderProjectGrid();
  });

  taskHomeCard.addEventListener("click", () => {
    renderAllTasks();
  });

  newTaskHomeCard.addEventListener("click", () => {
    taskForm.reset();
    initializeForm(true, false, false);
  });

  homeWrapper.appendChild(projHomeCard);
  homeWrapper.appendChild(taskHomeCard);
  homeWrapper.appendChild(newTaskHomeCard);

  area.appendChild(homeWrapper);
}

export { renderHome };
