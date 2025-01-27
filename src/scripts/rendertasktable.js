import pencilIcon from "../icons/pencil-box.svg";
import trashIcon from "../icons/trash-can.svg";
import { removeTask } from "./removetask.js";
import { clearDOM } from "./cleardom.js";
import { initializeForm } from "./initializeform.js";
import { resetIndex } from "./resetindex.js";

function renderTaskTable(list) {
  let mainArea = document.getElementById("area");

  let tableWrapper = document.createElement("div");
  tableWrapper.setAttribute("class", "task-table");
  tableWrapper.setAttribute("id", "task-table");
  let newTable = document.createElement("table");
  newTable.setAttribute("id", "tableMain");

  let tableHead = document.createElement("thead");
  tableHead.setAttribute("id", "tableHead");
  let subTask = document.createElement("tbody");
  subTask.setAttribute("id", "tableBody");

  let newHead = document.createElement("tr");
  let taskTitle = document.createElement("th");
  let taskDesc = document.createElement("th");
  let dueDate = document.createElement("th");
  let project = document.createElement("th");
  let priority = document.createElement("th");
  let status = document.createElement("th");
  let edit = document.createElement("th");
  edit.setAttribute("class", "th-butt");
  let del = document.createElement("th");
  del.setAttribute("class", "th-butt");

  taskTitle.innerText = "Task Title";
  taskDesc.innerText = "Description";
  dueDate.innerText = "Due Date";
  project.innerText = "Project";
  priority.innerText = "Priority";
  status.innerText = "Status";
  edit.innerText = "Edit";
  del.innerText = "Delete";

  newHead.appendChild(taskTitle);
  newHead.appendChild(taskDesc);
  newHead.appendChild(dueDate);
  newHead.appendChild(project);
  newHead.appendChild(priority);
  newHead.appendChild(status);
  newHead.appendChild(edit);
  newHead.appendChild(del);

  tableHead.append(newHead);

  for (let i = 0; i < list.length; i++) {
    let newRow = document.createElement("tr");
    let title = document.createElement("td");
    title.innerText = list[i]["title"];
    let desc = document.createElement("td");
    desc.innerText = list[i]["description"];
    let due = document.createElement("td");
    due.innerText = list[i]["dueDate"];
    let project = document.createElement("td");
    if (list[i]["project"] == "") {
      project.innerText = "None";
    } else {
      project.innerText = list[i]["project"];
    }
    let priority = document.createElement("td");
    if (list[i]["priority"] == "3") {
      priority.innerText = "High!";
    } else if (list[i]["priority"] == "2") {
      priority.innerText = "Medium";
    } else {
      priority.innerText = "Low";
    }
    let status = document.createElement("td");
    if (list[i]["status"] == true) {
      status.innerText = "Completed!";
    } else {
      status.innerText = "Open";
    }
    let edit = document.createElement("td");
    edit.setAttribute("class", "td-butt");
    let editButton = document.createElement("button");
    let editIcon = document.createElement("img");
    editIcon.setAttribute("class", "table-button-icon");
    editIcon.src = pencilIcon;
    editButton.addEventListener("click", () => {
      initializeForm(false, list[i], list[i]["taskIndex"]);
      resetIndex();
    });
    editButton.appendChild(editIcon);
    edit.appendChild(editButton);

    let del = document.createElement("td");
    del.setAttribute("class", "td-butt");
    let delButton = document.createElement("button");
    let delIcon = document.createElement("img");
    delIcon.setAttribute("class", "table-button-icon");
    delIcon.src = trashIcon;
    delButton.addEventListener("click", () => {
      resetIndex();
      let ind = i;
      removeTask(ind);
      list.splice(i, 1);
      clearDOM();
      resetIndex();
      renderTaskTable(list);
    });

    delButton.appendChild(delIcon);
    del.appendChild(delButton);

    newRow.appendChild(title);
    newRow.appendChild(desc);
    newRow.appendChild(due);
    newRow.appendChild(project);
    newRow.appendChild(priority);
    newRow.appendChild(status);
    newRow.appendChild(edit);
    newRow.appendChild(del);

    subTask.appendChild(newRow);
  }

  newTable.appendChild(tableHead);
  newTable.appendChild(subTask);
  tableWrapper.appendChild(newTable);

  mainArea.appendChild(tableWrapper);
}

export { renderTaskTable };
