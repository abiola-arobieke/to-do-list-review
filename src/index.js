import './style.css';
import {
  task, todoTask,
  saveTaskId, saveTask,
} from './savetask.js';
import check from './checkbox.js';

const todoList = document.querySelector('#todo');
const newTask = document.getElementById('new-task');
let moreBtn;

// create html tags and load data
const loadTask = () => {
  // remove old list item that was created
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  // Fetch data, create and insert data newly created elements
  task.forEach((todo, index) => {
    const htmlTemplate = `
      <div class="px-10-py-15 text-gray border-bottom">
          <input type="checkbox" class="checkbox" id="${index}" value="${
  todo.completed
}" />
          <span class="${!todo.completed}">${todo.description}</span>
          <del class=" ${todo.completed}">
              <span>${todo.description}</span>
          </del>
          <div class="dropdown more">
              <button class="drop-btn border-none bg-white">
                  <i class="fa fa-ellipsis-v text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
      <div class="edit-container px-10-py-15 text-gray border-bottom bg-yellow hide">
          <input type="checkbox" class="edit-task bg-yellow" id="${index}" 
          value="${todo.completed}"/>
          <input class="text-gray edit-input border-none bg-yellow" type="text" 
          value="${todo.description}" />
          <div class="dropdown more">
              <button class="border-none bg-yellow">
                  <i class="fa fa-trash-o ft-20 text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
    `;
    const liTag = document.createElement('li');
    liTag.innerHTML = htmlTemplate;
    todoList.appendChild(liTag);
  });
  // Get all more buttons
  moreBtn = document.querySelectorAll('.drop-btn');
  moreBtn.forEach((eachMoreBtn, btnIndex) => {
    // toggle more button to edit or delete a task
    eachMoreBtn.addEventListener('click', () => {
      const grandParentElement = eachMoreBtn.parentElement.parentElement;
      const delBtnContainer = grandParentElement.parentElement.lastElementChild;
      const checkClassName = delBtnContainer.className.includes('hide');
      if (checkClassName) {
        delBtnContainer.classList.remove('hide');
        delBtnContainer.classList.add('show');
        grandParentElement.classList.add('hide');

        // Delete a task
        const taskIndex = delBtnContainer.firstElementChild.id;
        const deleteTask = delBtnContainer.lastElementChild.firstElementChild;
        deleteTask.addEventListener('click', () => {
          task.forEach((tas, index) => {
            if (parseInt(taskIndex, 10) === index) {
              task.splice(index, 1);
              saveTask();
              loadTask();
            }
          });
        });
        // Edit a task
        const updateTask = delBtnContainer.firstElementChild.nextElementSibling;
        updateTask.addEventListener('blur', () => {
          if (updateTask.value) {
            const taskData = {
              description: '',
              completed: false,
            };

            taskData.description = updateTask.value;
            task[btnIndex] = taskData;
            updateTask.value = taskData.description;
            saveTask();
            loadTask();
          }
        });
      }
    });
  });

  check();
};

// Method for creating new task
const createTask = () => {
  if (task.length === 0) {
    todoTask.id = 1;
    saveTaskId();
  } else {
    todoTask.id += 1;
    saveTaskId();
  }

  const taskData = {
    id: '',
    description: '',
    completed: false,
  };

  taskData.id = todoTask.id;
  taskData.description = newTask.value;
  task.push(taskData);
  saveTask();
  newTask.value = '';
  loadTask();
};

// Add new task
const addTask = document.getElementById('new-task');
addTask.addEventListener('keyup', (event) => {
  if (newTask.value) {
    if (event.code === 'Enter') {
      createTask();
    }
  }
});

// Delete completed task
const delCheckedTask = document.getElementById('clear-task');
delCheckedTask.addEventListener('click', () => {
  if (task.length !== 0) {
    const selected = document.querySelectorAll('[checked=checked]');

    const selectedIds = [];
    selected.forEach((select) => {
      selectedIds.push(Number(select.id));
    });

    const newTasks = task.filter((t, index) => !selectedIds.includes(index));
    task.length = 0;
    newTasks.forEach((item) => {
      task.push(item);
    });
    saveTask();
    loadTask();
  }
});

loadTask();
