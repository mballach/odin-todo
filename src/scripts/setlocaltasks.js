import{listTasks} from "./listtasks.js"
import{getTasks} from "./gettasks.js"

function setLocalTasks() {
    let localTasks = getTasks();

    if(document.getElementById('task-table')){
        let table = document.getElementById('task-table')
        table.parentNode.removeChild(table)
    }

    let newTable = listTasks(localTasks)
}

export{setLocalTasks}