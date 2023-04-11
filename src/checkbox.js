import { task, saveTask } from './savetask.js';

// check and cross selected item
const check = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    if (checkbox.value === 'true') {
      checkbox.setAttribute('checked', 'checked');
    }
    checkbox.addEventListener('change', (event) => {
      const btnGrandParent = event.target.parentElement.parentElement;
      const description = btnGrandParent.firstElementChild.children.item(1);
      const markedDesc = btnGrandParent.firstElementChild.children.item(2);
      const taskArrayIndex = event.target.id;

      if (event.target.checked) {
        event.target.value = true;
        markedDesc.classList.remove('false');
        markedDesc.classList.add('true');
        description.classList.remove('true');
        description.classList.add('false');

        const taskData = {
          completed: true,
        };

        task[taskArrayIndex].completed = taskData.completed;
        saveTask();
        event.target.setAttribute('checked', 'checked');
      } else {
        event.target.value = false;
        event.target.removeAttribute('checked');

        markedDesc.classList.remove('true');
        markedDesc.classList.add('false');
        description.classList.remove('false');
        description.classList.add('true');

        const taskData = {
          completed: false,
        };

        task[taskArrayIndex].completed = taskData.completed;
        saveTask();
      }
    });
  });
};

export default check;