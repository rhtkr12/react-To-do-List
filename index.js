//select element
const form = document.getElementById('todoForm');
const newItem = document.getElementById('addAlist');
const addList = document.getElementById('list-group');

let todos = [];

//Submit
form.addEventListener('submit', function (event) {
  event.preventDefault();
  saveTodo();
  renderTodos();
});

// Save To Do
function saveTodo() {
  // Item Value
  const todoVal = newItem.value;
  // Check if Empty
  const isEmpty = todoVal === '';
  // Check if Duplicate
  const isDuplicate = todos.some((t) => t.value === todoVal);

  if (isEmpty) {
    alert('Item can not be null!');
  } else if (isDuplicate) {
    alert('Item already exist!');
  } else {
    todos.push({
      value: todoVal,
      checked: false,
      color: '#green',
    });
    newItem.value = '';
    console.log(todos);
  }
}

function renderTodos() {
  addList.innerHTML = '';
  todos.forEach((td, ind) => {
    addList.innerHTML += `
        <li class="item" id=${ind}>
            <i class="bi ${
              td.checked ? 'bi-check-circle-fill' : 'bi-circle'
            }" data-action="check">
            </i>
            <p class="" data-action="check">${td.value}</p>
        </li>`;
  });
}

addList.addEventListener('click', (event) => {
  const target = event.target;
  const parentEle = target.parentNode;
  if (parentEle.className !== 'item') return;
  const todo = parentEle;
  const todoId = Number(todo.id);

  // Action on Click
  const action = target.dataset.action;
  action === 'check' && checkTodo(todoId);
  console.log(todoId, action);
});

function checkTodo(todoId) {
  todos = todos.map((todo, ind) => ({
    ...todo,
    checked: ind === todoId ? !todo.checked : todo.checked,
  }));
}
