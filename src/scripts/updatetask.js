import { retrieveTasksfromJSON } from "./retrievetasks"
import { resetIndex } from "./resetindex"

function updateTask(task, index){
    let list = retrieveTasksfromJSON()

    let title = document.getElementById('taskTitle')
    let description = document.getElementById('taskDescription')
    let dueDate = document.getElementById('dueDate')
    let project = document.getElementById('project')
    let priority = document.getElementById('priority')
    let status = document.getElementById('completed')

    task.title = title.value
    task.description = description.value
    task.dueDate = dueDate.value
    task.project = project.value
    task.priority = priority.value
    task.status = status.checked

    list[index] = task;
    localStorage.setItem("taskJSON",JSON.stringify(list));
    resetIndex()
    return

}

export {updateTask}