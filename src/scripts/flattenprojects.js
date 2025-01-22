function flattenProjects(projArray){
    console.log(projArray)
    console.log
    let flatArray = []
    for(let i=0;i<projArray.length;i++){
        for(let j=0;j<projArray[i]['tasks'].length;j++){
            let item = projArray[i]['tasks'][j];
            flatArray.push(item)
        }
    }
    console.log(flatArray)
    return flatArray
}

export {flattenProjects}