toDoApp.factory('ToDoFactory', function() {
  var Todo = function(todoText){
    this.text = todoText;
    this.completed = false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;
});
