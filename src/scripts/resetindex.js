function resetIndex(){
    if (localStorage.getItem("taskJSON")===null){
        return
    } else 
    
    {
        let list = JSON.parse(localStorage.getItem('taskJSON'));
        for (var i=0; i<list.length;i++){
            for (var j=0;j<list[i].length;j++){
                list[i][j]['taskIndex']=j;
            }
            list[i]['projectIndex']=i;
        }
        localStorage.setItem("taskJSON",JSON.stringify(list));
    }
    
}

export{resetIndex}