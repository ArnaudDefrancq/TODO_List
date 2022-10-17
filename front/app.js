const newTodo = document.getElementById("newTodo");
const addTodo = document.getElementById("add-todo");

// ajouter quelquechose

addTodo.addEventListener("click", () => {
  const todo = newTodo.value;
  console.log(todo);

  const order = {
    content: todo,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:5000/api/todo", options)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  window.location.reload();
});

// Afficher les objets de la base de donnée

const fetchData = async () => {
  await fetch("http://localhost:5000/api/todo")
    .then((res) => res.json())
    .then((data) => createAllTodo(data))
    .catch((e) => console.log(e));
};

const createTodo = ({ content, _id }) => {
  const todoFeed = document.getElementById("todoFeed");

  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";
  todoFeed.appendChild(todoContainer);

  const todoNode = document.createElement("p");
  todoNode.className = "todo";
  todoNode.textContent = content;
  todoContainer.appendChild(todoNode);

  const optionTodo = document.createElement("div");
  optionTodo.className = "option-todo";
  todoContainer.appendChild(optionTodo);

  const btnValid = document.createElement("button");
  btnValid.className = "btn btn-valid";
  btnValid.id = "btnValid";
  btnValid.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
  optionTodo.appendChild(btnValid);

  btnValid.addEventListener("click", () => {
    if ((btnValid.style.color = "black")) {
      btnValid.style.color = "green";
    }
  });

  const btnDelete = document.createElement("button");
  btnDelete.className = "btn btn-delete";
  btnDelete.id = "btnDelete";
  btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  optionTodo.appendChild(btnDelete);

  btnDelete.addEventListener("click", () => {
    fetch("http://localhost:5000/api/todo/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));

    window.location.reload();
  });
};

const createAllTodo = (data) => {
  data.forEach((todo) => {
    createTodo(todo);
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
});
