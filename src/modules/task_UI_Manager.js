import { arrTasks } from './task_DatabaseMS.js';
import { resetTasks } from './reset_functions.js';
import { addIconEvent, addInputDescEvent } from './event_handlers.js';                                                                           // eslint-disable-line

const compileTaskItem = (task) => {
  // Compiling Task Card
  const liTask = document.createElement('li');
  liTask.id = `task-${task.index}`;
  liTask.className = 'tasks';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.selected;
  checkbox.id = task.index;

  const inputDesc = document.createElement('input');
  inputDesc.id = `desc-${task.index}`;
  inputDesc.type = 'text';
  inputDesc.value = task.description;
  inputDesc.className = 'task-desc';

  const iCon = document.createElement('i');
  iCon.classList.add('item-btns', 'bi', 'bi-three-dots-vertical');
  iCon.id = `icon-${task.index}`;

  liTask.append(checkbox, inputDesc, iCon);
  return liTask;
};

const populateTaskList = () => {
  resetTasks();
  const ulTasks = document.getElementById('ul-tasks');
  for (let i = 0; i < arrTasks.length; i += 1) {
    ulTasks.appendChild(compileTaskItem(arrTasks[i]));
    addIconEvent(arrTasks[i].index);
    addInputDescEvent(arrTasks[i].index);
  }
};

export { populateTaskList, compileTaskItem };
