toDoApp.controller('ToDoController', function() {
  var toDoList = this;

  toDoList.toDos = [
    {text: 'ToDo1', completed: false},
    {text: 'ToDo2', completed: true},
    {text: 'ToDo3', completed: false},
  ];

  toDoList.addToDo = function() {
    toDoList.toDos.push({text: this.newToDo, completed: false});
    this.newToDo = '';
  };

  toDolist.removeToDo = function (){
    toDolist
  };
});
