import { retrieveTasksfromJSON } from "./retrievetasks"
import { Project } from "./project"

function getProjects(){
    let projects = []
    let tasks = retrieveTasksfromJSON()
    console.log(tasks)
    for (let i = 0;i<tasks.length;i++){
        let projectName = tasks[i]['project'];
        if(projects.indexOf(projectName)===-1){
            projects.push(projectName)
        }
    }
    let projectObjects=[]
    for (let i = 0;i<projects.length;i++){
        let projObject = new Project(projects[i],[])
        projectObjects.push(projObject)
    }
    for (let i = 0;i<tasks.length;i++){
        for (let j = 0;j<projectObjects.length;j++){
            if(tasks[i]['project']==projectObjects[j]['name']){
                let newProject = projectObjects[j];
                newProject.addTask(tasks[i])
                projectObjects[j]=newProject
            }
        }
    }
    return projectObjects;
}
export{getProjects}