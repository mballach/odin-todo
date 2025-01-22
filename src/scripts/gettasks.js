import { flattenProjects } from "./flattenprojects";

function getTasks(){
    if (localStorage.getItem("taskJSON")===null){
        return
    } else {

    }
    let list = JSON.parse(localStorage.getItem('taskJSON'));
    let l = flattenProjects(list)
    return l;

}

export{getTasks}