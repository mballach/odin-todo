import "./styles.css";
import {createTask} from "./scripts/task.js"
import{getProjects} from "./scripts/getprojects.js"
import { resetIndex } from "./scripts/resetindex.js";
import { renderAllTasks } from "./scripts/renderAllTasks.js";
import { renderProjectGrid } from "./scripts/renderprojectgrid.js";
import { renderHome } from "./scripts/renderhome.js";
import { initializeForm } from "./scripts/initializeform.js";

let newTaskButton = document.getElementById('newTask')
let tasksButton = document.getElementById('tasksButton')
let taskFormArea = document.getElementById('taskFormArea')
let taskForm = document.getElementById('taskForm')
let closeModal = document.getElementById('closeModal')
let submitTask = document.getElementById('submitTask')
let areaHeader = document.getElementById('area-header')
let homeButton = document.getElementById('homeButton')
let projectsButton = document.getElementById('projectsButton')
/*let subTask = document.getElementById('tableBody')
let tableHead = document.getElementById('tableHead')*/
let mainArea = document.getElementById('area')

tasksButton.addEventListener('click',()=>{
    resetIndex()
    renderAllTasks()
})

newTaskButton.addEventListener('click',()=>{
    taskForm.reset()
    initializeForm(true,false,false)
})

closeModal.addEventListener('click',(e)=>{
    taskForm.reset()
    taskFormArea.close();
})

projectsButton.addEventListener('click',()=>{
    renderProjectGrid();
})

homeButton.addEventListener('click',()=>{
    renderHome();
})

/*submitTask.addEventListener('click',()=>{
    let title = document.getElementById('taskTitle')
    let description = document.getElementById('taskDescription')
    let dueDate = document.getElementById('dueDate')
    let project = document.getElementById('project')
    let priority = document.getElementById('priority')
    
    let newTask = createTask(title.value, description.value, dueDate.value, project.value, priority.value, false, 0)
    renderAllTasks()
    resetIndex()
    getProjects()
    taskForm.reset()
    taskFormArea.close()
    
})*/

resetIndex()
renderHome()