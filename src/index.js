import "./styles.css";
import {createTask} from "./scripts/task.js"
import{getProjects} from "./scripts/getprojects.js"
import {setLocalTasks} from "./scripts/setlocaltasks.js";
import { resetIndex } from "./scripts/resetindex.js";

let newTaskButton = document.getElementById('newTask')
let tasksButton = document.getElementById('tasksButton')
let taskFormArea = document.getElementById('taskFormArea')
let taskForm = document.getElementById('taskForm')
let closeModal = document.getElementById('closeModal')
let submitTask = document.getElementById('submitTask')
/*let subTask = document.getElementById('tableBody')
let tableHead = document.getElementById('tableHead')*/
let mainArea = document.getElementById('area')

tasksButton.addEventListener('click',()=>{
    setLocalTasks()
})

newTaskButton.addEventListener('click',(e)=>{
    taskFormArea.showModal()
})

closeModal.addEventListener('click',(e)=>{
    taskForm.reset()
    taskFormArea.close();
})

submitTask.addEventListener('click',()=>{
    let title = document.getElementById('taskTitle')
    let description = document.getElementById('taskDescription')
    let dueDate = document.getElementById('dueDate')
    let project = document.getElementById('project')
    let priority = document.getElementById('priority')
    
    let newTask = createTask(title.value, description.value, dueDate.value, project.value, priority.value, false, 0)
    setLocalTasks()
    resetIndex()
    /*taskFormArea.close()
    taskForm.reset()*/
})




getProjects()
resetIndex()