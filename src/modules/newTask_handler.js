import { compileTaskItem } from './task_UI_Manager.js';
import { arrTasks, Task, addTask } from './task_DatabaseMS.js';
import { addIconEvent, addInputDescEvent } from './event_handlers.js';

const newTaskListener = () => {
  const textInput = document.getElementById('new-task');
  textInput.addEventListener('change', (event) => {
    event.preventDefault();
    if (textInput.value.trim() === '') {
      alert('Sorry! Task Cannot be Empty \n Tasks Not added');
    } else {
      addTask(Task(textInput.value.trim()));
      const ulTasks = document.getElementById('ul-tasks');
      const newTaskAdded = arrTasks[arrTasks.length - 1];
      ulTasks.appendChild(compileTaskItem(newTaskAdded));
      addIconEvent(newTaskAdded.index);
      addInputDescEvent(newTaskAdded.index);
    }
    textInput.value = '';
    textInput.blur();
    event.stopPropagation();
  });
};

export default newTaskListener;
