const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLi = document.createElement("li");
  todoLi.innerText = "hhhh";
  todoLi.classList.add("todo-item");

  todoDiv.appendChild(todoLi);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
  completedBtn.classList.add("completedBtn");

  todoDiv.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
  trashBtn.classList.add("trashBtn");

  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv)
}
