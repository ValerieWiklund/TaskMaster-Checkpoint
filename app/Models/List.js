

export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this  DONE
    constructor(data) {
        this.name = data.name
        this.description = data.description || ""
        this.tasks = data.tasks || []
    }

    // template for drawing the lists 

    getTemplate(index) {
        let template = `
     <div class="col-3 border m-2">
             <div class="title d-flex justify-content-between">
                <h4>${this.name}</h4> <button class ="btn btn-outline-secondary btn-sm my-2" onclick="app.controllers.listController.deleteList(${index})"> x </button>
             </div>
                <p>${this.description}</p>
                <ul>`
        template += this.drawTasks(index)
        template += `
                </ul>
                <form class="form-inline" onsubmit="app.controllers.listController.addTask(event, ${index})">
                    <div class="form-group mb-1">
                        <label class="sr-only" for "task">task</label>
                        <input type="text" class="form-control" name="task" placeholder="Enter task">
                         <button class="ml-1" type="submit">+</button>
                    </div>
                   
                </form>
                
                </div>
            </div>
        `
        return template

    }

    // draws the list of tasks and allows for deletion

    drawTasks(listIndex) {
        let taskTemplate = ""
        this.tasks.forEach((tsks, taskIndex) => {
            taskTemplate += `<li> ${tsks} <span onclick = "app.controllers.listController.deleteTask(${listIndex},${taskIndex})"> x </span></li>`
        });
        return taskTemplate
    }


}