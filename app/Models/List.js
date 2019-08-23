export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this 

    constructor(data) {
        this.name = data.name
        this.description = data.description || null
        this.tasks = data.tasks || []
    }


    // template for drawing the lists 

    getTemplate(index) {
        let template = `
     <div class="col-4">
                <h1>${this.name}</h1>
                <p>${this.description}</p>
                <ul>`
        template += this.drawTasks(index)
        template += `
                </ul>
                <form onclick="app.controllers.listController.addTask(event, ${index})>
                    <div class="form-group">
                        <label for "task">task</label>
                        <input type="text" class="form-control" name="task" placeholder="Enter task">
                    </div>
                    <button type="submit" >+</button>
                </form>
                <button type="btn btn-danger" onclick="app.controllers.listController.deleteList(${index})">X</button>
                </div>
            </div>
        `
        return template

    }
    //
    //TODO Finish coding for delete button
    //NOTE may be done
    // draws the list of tasks and allows for deletion

    drawTasks(listIndex) {
        let taskTemplate = ""
        this.tasks.forEach((tsks, taskIndex) => {
            taskTemplate += `<li> ${tsks} <span onclick = "app.controllers.listController.deleteTask(${listIndex},${taskIndex})">x </span></li>`
        });
        return taskTemplate
    }


}