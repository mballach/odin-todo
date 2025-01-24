import{renderTaskTable} from "./rendertasktable.js"
import { retrieveTasksfromJSON } from "./retrievetasks.js";

function clearDOM() {
    if(document.getElementById('task-table')){
        let table = document.getElementById('task-table')
        table.parentNode.removeChild(table)
    }

    if(document.getElementById('project-grid')){
        let projects = document.getElementById('project-grid')
        projects.parentNode.removeChild(projects)
    }

    if(document.getElementById('home-wrapper')){
        let projects = document.getElementById('home-wrapper')
        projects.parentNode.removeChild(projects)
    }


    /*let newTable = renderTaskTable(tasks)*/
}

export {clearDOM}