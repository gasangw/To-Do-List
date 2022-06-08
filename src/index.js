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
