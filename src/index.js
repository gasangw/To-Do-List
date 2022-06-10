
import './styles.css';

import addElem from './modules/add-elem.js';
import TaskList from './modules/class-task-list.js';
import refreshList from './modules/refresh-list.js';

const taskList = new TaskList();

// DOM
const mainContainer = document.querySelector('.list-container');

// HTML skeleton
// Header (Title and input)
mainContainer.innerHTML = `<div class="row">
<h1>Today's To Do</h1>
<i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
</div>`;
const inputContainer = addElem('form', [], mainContainer);
const inputText = addElem('input', ['input-add-task'], inputContainer);
inputText.setAttribute('placeholder', 'Add to your list...');
addElem('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], inputContainer);
// Main (list)

const listContainer = addElem('div', [], mainContainer);
// Bottom (button)
const clearBtn = addElem('button', ['button'], mainContainer);
clearBtn.textContent = 'Clear all completed';

// Input
inputContainer.onsubmit = (e) => {
  e.preventDefault();
  taskList.addTask(inputText.value);

  inputContainer.reset();
  refreshList(taskList, listContainer);
};

// clear button
clearBtn.onclick = () => {
  // console.log('clear');
  taskList.clearCompleted();
  refreshList(taskList, listContainer);
};

// On load
refreshList(taskList, listContainer);

// import _ from 'lodash';
// import './style.css';

const container = document.querySelector('.todo-container');

const ToDoList = [
  {
    description: 'wash the utensils',
    completed: true,
    index: 0,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'attend all meetings',
    completed: true,
    index: 2,
  },
];

const generateTodo = ({ description }) => `
  <ul class="item">
  <li><i class="material-symbols-outlined">check_box_outline_blank</i></li>
  <p class="para">${description}</p>
  <li><i class="material-symbols-outlined">more_vert</i></li>
  <li><i class="material-symbols-outlined">delete</i></li>
  </ul>`;

container.innerHTML = ToDoList.map((todo) => generateTodo(todo)).join('');

