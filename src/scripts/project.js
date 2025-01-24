class Project{
    constructor(name,tasks,projectIndex){
        this.name=name;
        this.tasks=[];
    }

    setDate(date){
        this.date=date;
    }

    setName(name){
        this.name=name;
    }

    addTask(task){
        this.tasks.push(task)
    }

    flipStatus(){
        this.status=!this.status;
    }
}

export {Project}