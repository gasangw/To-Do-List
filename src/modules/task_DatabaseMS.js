// || =============== Tasks Manager ================== ||
const arrTaskss = JSON.parse(localStorage.getItem('arrTaskLocal')) || [];

let arrTasks = arrTaskss;                                                                                                                                                                                                                                                                                              // eslint-disable-line         

const saveLocal = () => {
  localStorage.setItem('arrTaskLocal', JSON.stringify(arrTasks));
};

const Task = (description) => ({ index: arrTasks.length + 1 || 1, description, completed: false });
const addTask = (task) => {
  arrTasks.push(task);
  saveLocal();
};

const updateIndex = () => {
  for (let i = 0; i < arrTasks.length; i += 1) {
    arrTasks[i].index = i + 1;
  }
  saveLocal();
};

const delTask = (arrIndex) => {
  arrTasks.splice(arrIndex, 1);
  updateIndex();
};

const clearCompleted = () => {
  arrTasks = arrTasks.filter((t) => t.completed === false);
  updateIndex();
};

export {
  arrTasks, Task, addTask, delTask, updateIndex, saveLocal, clearCompleted,
};