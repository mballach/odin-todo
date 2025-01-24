import { addNewTask} from "./addnewtask";
import { renderAllTasks } from "./renderAllTasks";
import { resetIndex } from "./resetindex";
import { updateTask } from "./updatetask";

function initializeForm(newItem=true, task, index){
    let taskDialog = document.getElementById('taskFormArea');
    let taskForm = document.getElementById('taskForm');
    let formTitle = document.getElementById('form-title');
    let formButtons = document.getElementById('form-button-wrapper');
    let closeModal = document.getElementById('closeModal')

    let title = document.getElementById('taskTitle')
    let description = document.getElementById('taskDescription')
    let dueDate = document.getElementById('dueDate')
    let project = document.getElementById('project')
    let priority = document.getElementById('priority')
    let status = document.getElementById('completed')

    if(document.getElementById('submit-task')){
        let el = document.getElementById('submit-task')
        el.parentNode.removeChild(el)
    }

    let submitButton = document.createElement('button')
    submitButton.setAttribute('id','submit-task')
    submitButton.setAttribute('type','button')
    
    resetIndex()
    taskForm.reset()

    if(newItem==true){
        formTitle.innerText = "Add a New Task"
        title.setAttribute('value',"")
        description.innerText=""
        dueDate.setAttribute('value',"")
        project.setAttribute('value',"")
        priority.selectedIndex=0
        status.checked=false
        submitButton.innerText="Create Task!"
        submitButton.addEventListener('click',(e)=> {
            addNewTask()
            renderAllTasks()
            resetIndex()
            taskForm.reset()
            taskDialog.close()
            }
        )
    } else{
        title.setAttribute('value',task.title)
        description.innerText=task.description
        dueDate.value = task.dueDate
        project.value=task.project
        priority.value=task.priority
        status.checked=task.status
        
        formTitle.innerText = "Edit Task"
        submitButton.innerText="Update Task!"
        submitButton.addEventListener('click',(e)=>{
            updateTask(task, index)
            renderAllTasks()
            taskForm.reset()
            taskDialog.close()
        })
    }

    formButtons.prepend(submitButton)

    taskDialog.showModal()


}

export {initializeForm}
