import Task from './class-task.js';
import isStorageAvailable from './local-storage-checker.js';

const storageName = 'taskList';

export default class TaskList {
  constructor() {
    this.data = [];
    this.id = 1;
    this.initUpdate();
  }

  initUpdate() {
    if (isStorageAvailable('localStorage')) {
      const data = JSON.parse(localStorage.getItem(storageName));

      if (data && data.length !== 0) {
        this.data = JSON.parse(localStorage.getItem(storageName));

        const lastItem = this.data.reduce((prev, current) => {
          const val = prev.id > current.id ? prev : current;
          return val;
        });
        this.id = lastItem.id + 1;
      }
    }
  }

  addTask(task) {
    if (isStorageAvailable) {
      const taskObj = new Task(task, this.id);

      this.data.push(taskObj);
      localStorage.setItem(storageName, JSON.stringify(this.data));

      this.id += 1;
    }
  }

  removeTask(taskID) {
    this.data = this.data.filter((i) => i.id !== taskID);
    this.resetIds();
    localStorage.setItem(storageName, JSON.stringify(this.data));
  }

  updateStatus(taskID, status) {
    this.data = this.data.map((obj) => {
      if (obj.id === taskID) {
        return { ...obj, completed: status };
      }

      return obj;
    });
    localStorage.setItem(storageName, JSON.stringify(this.data));
  }

  renameTask(taskID, newTask) {
    this.data = this.data.map((obj) => {
      if (obj.id === taskID) {
        return { ...obj, description: newTask };
      }

      return obj;
    });
    localStorage.setItem(storageName, JSON.stringify(this.data));
  }

  clearCompleted() {
    this.data = this.data.filter((i) => i.completed === false);
    this.resetIds();
    localStorage.setItem(storageName, JSON.stringify(this.data));
  }

  resetIds() {
    let i = 1;
    this.data.forEach((e) => {
      e.id = i;
      i += 1;
    });
    this.id = i;
  }
}