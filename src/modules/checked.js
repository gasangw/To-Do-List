import { arrTasks, saveLocal } from './task_DatabaseMS.js';

const checkToggle = (event) => {
  // evenhandling
  const checkID = event.target.id;
  const checkValue = document.getElementById(checkID).checked;
  arrTasks[checkID - 1].completed = checkValue;
  saveLocal();
  const icon = document.getElementById(`icon-${checkID}`);
  const textDesc = document.getElementById(`desc-${checkID}`);
  textDesc.classList.toggle('completed');
  icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
  if (checkValue) {
    icon.classList.add('bi-trash3');
  } else {
    icon.classList.add('bi-three-dots-vertical');
  }
};

const checkChanged = (eID) => {
  const chk = document.getElementById(`${eID}`);
  chk.addEventListener('change', checkToggle);
};

export default checkChanged;