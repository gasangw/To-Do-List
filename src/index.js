import './style.css';
import newTaskListener from './modules/newTask_handler.js';
import renderUI from './modules/render_functions.js';
import delCompleted from './modules/clearAll.js';

const arrTasks = require('./modules/task_DatabaseMS.js');

renderUI();
newTaskListener();

document.getElementById('btn-clear').addEventListener('click', delCompleted);
