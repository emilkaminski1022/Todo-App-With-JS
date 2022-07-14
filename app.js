const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");

  todoDiv.appendChild(todoLi);
  todoInput.value = "";
  saveLocalTodos(todoInput.value); // add to localstorage

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
  completedBtn.classList.add("completedBtn");

  todoDiv.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
  trashBtn.classList.add("trashBtn");

  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trashBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("drop");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  if (item.classList[0] === "completedBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}


