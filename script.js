const todoListingContainer = document.getElementById("todo-listing-container");
const userId = document.getElementById("userId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const saveBtn = document.getElementById("saveTodo");
const formData = {
  completed: false,
};
const textInputs = [userId, title];

/**
 * Utility helps us to fetch the todos data from the api
 * @returns []
 */
async function fetchTodos() {
  const bufferResponse = await fetch("http://localhost:5000/api/todo/");
  const payload = await bufferResponse.json();
  return payload.result;
}

/**
 * Utility helps us to render the todos in the container
 * @param {*} data array
 */
async function renderTodos() {
  let todosCard = [];
  const todos = await fetchTodos();
  for (let i = 0; i < todos.length; i++) {
    todosCard.push(createTodoCard(todos[i]));
  }
  todoListingContainer.innerHTML = "";
  todoListingContainer.append(...todosCard);
}

renderTodos();

/**
 *
 * @param {*} todo
 * @returns
 */
function createTodoCard(todo = {}) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `<div class="card-left-area">
         <h3>${todo.title}</h3>
         <div class="badge ${
           todo.completed ? "badge-success" : "badge-warning"
         }">${todo.completed ? "Completed" : "In Progress"}</div>
       </div>
       <div class="card-right-area">
         <button>Delete</button>
       </div>`;
  return cardDiv;
}

function saveTodo() {
  fetch("http://localhost:5000/api/todo/create", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200 && response.statusText === "OK") {
        renderTodos();
      }
    })
    .catch((err) => console.log(err));
}

for (let x = 0; x < textInputs.length; x++) {
  textInputs[x].addEventListener("keyup", (e) => {
    formData[e.target.id] = e.target.value;
  });
}

completed.addEventListener("change", (e) => {
  formData[e.target.id] = e.target.checked;
});

saveBtn.addEventListener("click", (e) => {
  if (formData.userId && formData.title) {
    saveTodo();
  }
});
