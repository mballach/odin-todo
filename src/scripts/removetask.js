import { resetIndex } from "./resetindex";

function removeTask(index){
    console.log(index)
    if (localStorage.getItem("taskJSON")===null){
        return
    } else {
        let list = JSON.parse(localStorage.getItem('taskJSON'));
        console.log(list)
        list.splice(index,1)
        console.log(list)
        localStorage.setItem("taskJSON",JSON.stringify(list));
    }
    resetIndex()

}

export{removeTask}