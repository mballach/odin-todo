import { Task } from "./task";

function retrieveTasksfromJSON() {
  if (localStorage.getItem("taskJSON") === null) {
    return false;
  }

  let list = JSON.parse(localStorage.getItem("taskJSON"));

  let returnList = [];

  for (let i = 0; i < list.length; i++) {
    let title = list[i]["title"];
    let description = list[i]["description"];
    let dueDate = list[i]["dueDate"];
    let project = list[i]["project"];
    let priority = list[i]["priority"];
    let status = list[i]["status"];
    let index = list[i]["index"];
    let task = new Task(
      title,
      description,
      dueDate,
      project,
      priority,
      status,
      index,
    );
    returnList.push(task);
  }
  return returnList;
}

export { retrieveTasksfromJSON };
