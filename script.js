// -- GLOBAL --
const LOCAL_STORAGE_PREFIX = "ADVANCED-TODO-LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;

const template = document.querySelector("#list-item-template");
const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const todos = [];

// Add todos
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user input
  const todoName = todoInput.value;

  // Return if user input = ''
  if (todoName === "") return;

  // Add user inputs to todos array
  todos.push(todoName);

  // Render todos to list
  renderTodo(todoName);

  // Save todos to local storage
  saveTodos(todos);

  // Clear and focus input after user submit
  todoInput.value = "";
  todoInput.focus();
});

function renderTodo(todoName) {
  // Get HTML template
  const templateClone = template.content.cloneNode(true);

  // Get particular span from template and set content to todo
  const newTodo = templateClone.querySelector("[data-list-item-text]");
  newTodo.textContent = todoName;

  // Append todos on list
  list.append(templateClone);
}

// Delete todos
// Complete todos
// Save todos; convert todos from a JSON array into a string with JSON.stringify()
function saveTodos(todos) {
  localStorage.setItem(`${TODOS_STORAGE_KEY}`, JSON.stringify(todos));
  // localStorage.clear();
}

// Load todos
