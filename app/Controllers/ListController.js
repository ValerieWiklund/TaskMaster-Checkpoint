import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let lists = _listService.List

    console.log("List Controller checking in ")

    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    });
    document.querySelector("#lists").innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value,
            description: form.description.value
        }
        _listService.addList(newList)
        _drawLists()
    }

    addTask(event, listIndex) {
        event.preventDefault()
        console.log("adding task")
        let form = event.target
        let newTask = form.task.value
        _listService.addTask(newTask, listIndex)
        _drawLists()
    }

    deleteList(index) {
        _listService.deleteList(index)
        _drawLists()
    }

    deleteTask(listIndex, taskIndex) {
        _listService.deleteTask(listIndex, taskIndex)
        _drawLists()
    }



}