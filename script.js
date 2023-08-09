// -- GLOBAL --
const template = document.querySelector("#list-item-template");
const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");

// Add todos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = todoInput.value;
  if (todoName === "") return;

  renderTodo(todoName);

  todoInput.value = "";
  todoInput.focus();
});

function renderTodo(todoName) {
  const templateClone = template.content.cloneNode(true);
  const newTodo = templateClone.querySelector("[data-list-item-text]");
  newTodo.textContent = todoName;
  list.append(templateClone);
}

// Delete todos
// Complete todos
// Save todos

// Load todos
