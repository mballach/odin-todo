import { Project } from "./project.js";
import { retrieveTasksfromJSON } from "./retrievetasks.js";

function logTask(task) {
  let list = retrieveTasksfromJSON();
  console.log(task);
  console.log(list);
  if (list == false) {
    let list = [];
    list.push(task);
    localStorage.setItem("taskJSON", JSON.stringify(list));
    return;
  } else {
    list.push(task);
    localStorage.setItem("taskJSON", JSON.stringify(list));
    return;
  }
}

export { logTask };
