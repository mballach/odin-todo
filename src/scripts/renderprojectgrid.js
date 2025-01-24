import { getProjects } from "./getprojects";
import { clearDOM } from "./cleardom";
import { renderProjectTasks } from "./renderProjectTasks";

function renderProjectGrid(){
    clearDOM()
    let projects = getProjects()
    console.log(projects)
    document.getElementById('area-header').innerText = 'Projects'
    
    let area = document.getElementById('area')
    let projectGrid = document.createElement('div')
    projectGrid.setAttribute('class','project-grid')
    projectGrid.setAttribute('id','project-grid')

    for (let i = 0; i<projects.length;i++) {
        let projectName = projects[i]['name']

        if(projectName==""){
            continue;
        }

        let projectCard = document.createElement('div')
        let projectTitle = document.createElement('div')
        let projectButtonWrapper = document.createElement('div')
        let projectTaskButton = document.createElement('div')

        projectCard.setAttribute('class','project-card')
        projectTitle.setAttribute('class','project-title')
        projectTitle.innerText = projectName
        projectButtonWrapper.setAttribute('class','project-button-wrapper')
        projectTaskButton.setAttribute('class','project-task-button')
        projectTaskButton.innerText = "See Project Tasks"
        projectTaskButton.addEventListener('click',() => {
            renderProjectTasks(projects[i])
        })

        projectButtonWrapper.appendChild(projectTaskButton)

        projectCard.appendChild(projectTitle)
        projectCard.appendChild(projectButtonWrapper)

        projectGrid.appendChild(projectCard)
    }

    area.appendChild(projectGrid)

}

export {renderProjectGrid}