import { arrTasks } from './task_DatabaseMS.js';
import { populateTaskList } from './task_UI_Manager.js';
import { addIconEvent, addInputDescEvent } from './event_handlers.js';

const renderUI = () => {
  populateTaskList();
  if (arrTasks.length === 0) {
    for (let i = 0; i < arrTasks.length; i += 1) {
      addIconEvent(arrTasks[i].index);
      addInputDescEvent(arrTasks[i].index);
    }
  }
};

export default renderUI;