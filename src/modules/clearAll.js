import { clearCompleted } from './task_DatabaseMS.js';
import { populateTaskList } from './task_UI_Manager.js';

const delCompleted = () => {
  clearCompleted();
  populateTaskList();
};

export default delCompleted;