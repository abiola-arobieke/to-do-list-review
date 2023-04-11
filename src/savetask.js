export const task = JSON.parse(localStorage.getItem('allTask')) || [];
export const todoTask = JSON.parse(localStorage.getItem('todo-id')) || {};

// save task id
export const saveTaskId = () => {
  localStorage.setItem('todo-id', JSON.stringify(todoTask));
};

// update task array
export const saveTask = () => {
  localStorage.setItem('allTask', JSON.stringify(task));
};

export const fetchTask = () => JSON.parse(localStorage.getItem('allTask')) || [];
