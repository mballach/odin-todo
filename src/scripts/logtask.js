import { Project } from "./project.js";

function logTask(task){
    console.log(task)
    if (localStorage.getItem("taskJSON")===null){
        let list = []
        let newProj = new Project(task['project']);
        newProj.addTask(task)
        list.push(newProj)
        console.log(list)
        localStorage.setItem("taskJSON",JSON.stringify(list));
    }   else {
        let list = JSON.parse(localStorage.getItem('taskJSON'));
        if (list[task['project']]===null){
            let newProj = new Project(task['project']);
            newProj.addTask(task)
            list.push(task);
        } else {
            let retProj = new Project(list[task['project']['title']],list[task['project']['tasks']])
            retProj.addTask(task)
            list[task['project']]=retProj;
        }
        console.log(list)
        localStorage.setItem("taskJSON",JSON.stringify(list));
    }    
}
    

export {logTask}