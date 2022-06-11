/* || ============== Reset Functions  ============= || */

const resetTasks = () => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = '';
};

const resetIcon = () => {
  const icons = Array.from(document.getElementsByClassName('item-btns'));
  icons.forEach((icon) => {
    icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
    icon.classList.add('bi-three-dots-vertical');
  });
};

export { resetTasks, resetIcon };
/* || ============== Reset Functions Ends ============= || */
