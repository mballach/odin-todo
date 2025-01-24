function flattenProjects(projArray){
    let flatArray = []
    let ind=0
    for(let i=0;i<projArray.length;i++){
        let projTasks = projArray[i]['tasks']
        for(let j=0;j<projTasks.length;j++){
            projTasks[j]['index'] = ind
            ind++
            flatArray.push(projTasks[j])
        }
    }
    return flatArray
}

export {flattenProjects}