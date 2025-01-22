function getProjects(){
    let projects = []
    if (localStorage.getItem("taskJSON")===null){
        return projects
    } else {
        let list = JSON.parse(localStorage.getItem('taskJSON'));
        for (let i=0; i< list.length;i++){
            if(projects.indexOf(list[i]['project'])==-1){
                projects.push(list[i]['project'])
            }
        }
    }
    console.log(projects)
}
export{getProjects}