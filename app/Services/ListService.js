import List from "../models/List.js";

//Private
let _state = {
    lists: [new List({
        name: "Weekend To Do",
        description: "Everything I must do this weekend, before I can play",
        tasks: ["mow lawn", "laundry", "grocery shopping"]
    })]
}


//Public
export default class ListService {

    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log("ListService checking in")
        this.getLists()
    }

    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.lists)
    }

    addTask(newTask, listIndex) {
        _state.lists[listIndex].tasks.push(newTask);
        this.saveLists()
    }

    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }

    deleteTask(listIndex, taskIndex) {
        _state.lists[listIndex].tasks.splice(taskIndex, 1)
        this.saveLists()

    }


    get List() {
        return _state.lists.map(list => new List(list))
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
