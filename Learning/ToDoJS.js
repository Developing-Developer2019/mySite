var todos = ["Learn Javascript"];
var input = prompt("What would you like to do? New = New item, Quit = Quit app, List = List current Todo, Delete = Delete indexed item..")
while (input !== "Quit") {
    //handle input
    if (input === "List") {
        listTodos();
    } else if (input === "New") {
        addTodo();
    } else if (input === "Delete") {
        todoDelete();
    }
    input = prompt("What would you like to do? New = New item, Quit = Quit app")
}
console.log("Ok, app quit.")
function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}
function addTodo() {
    //Ask for new todo
    var newTodo = prompt("Enter new Todo");
    //Add to todos array
    todos.push(newTodo);
    console.log("Item added.")
}

function todoDelete() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Item deleted.")
}