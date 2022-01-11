// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


// Functions
function addTodo(event){
    event.preventDefault();
    // Creating the div that will house the todo items
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create the li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Create the check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);
    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    // Clear the input value
    todoInput.value = "";
}


// CREATE THE FUNCTION DELETECHECK
function deleteCheck(e){
    // Since the fuction event listeer is on the todoList and not on the buttons, we have to target sth
    const item = e.target;

    // delete todo
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        // Ainmation
        todo.classList.add("fall");
        // To allow the animation run complete before we remove item to stop it from disappearing from the screen due to the 0 opacity yet the item is still in the app
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
      
    }

    // CHECK MARK
    if (item.classList[0] === "completed-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



