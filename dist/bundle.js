/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _savetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetask.js */ "./src/savetask.js");


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

        _savetask_js__WEBPACK_IMPORTED_MODULE_0__.task[taskArrayIndex].completed = taskData.completed;
        (0,_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
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

        _savetask_js__WEBPACK_IMPORTED_MODULE_0__.task[taskArrayIndex].completed = taskData.completed;
        (0,_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);


/***/ }),

/***/ "./src/savetask.js":
/*!*************************!*\
  !*** ./src/savetask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTask": () => (/* binding */ fetchTask),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "saveTaskId": () => (/* binding */ saveTaskId),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "todoTask": () => (/* binding */ todoTask)
/* harmony export */ });
const task = JSON.parse(localStorage.getItem('allTask')) || [];
const todoTask = JSON.parse(localStorage.getItem('todo-id')) || {};

// save task id
const saveTaskId = () => {
  localStorage.setItem('todo-id', JSON.stringify(todoTask));
};

// update task array
const saveTask = () => {
  localStorage.setItem('allTask', JSON.stringify(task));
};

const fetchTask = () => JSON.parse(localStorage.getItem('allTask')) || [];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _savetask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savetask.js */ "./src/savetask.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.js */ "./src/checkbox.js");




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
  _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.forEach((todo, index) => {
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
          _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.forEach((tas, index) => {
            if (parseInt(taskIndex, 10) === index) {
              _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.splice(index, 1);
              (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)();
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
            _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task[btnIndex] = taskData;
            updateTask.value = taskData.description;
            (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)();
            loadTask();
          }
        });
      }
    });
  });

  (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

// Method for creating new task
const createTask = () => {
  if (_savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.length === 0) {
    _savetask_js__WEBPACK_IMPORTED_MODULE_1__.todoTask.id = 1;
    (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskId)();
  } else {
    _savetask_js__WEBPACK_IMPORTED_MODULE_1__.todoTask.id += 1;
    (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskId)();
  }

  const taskData = {
    id: '',
    description: '',
    completed: false,
  };

  taskData.id = _savetask_js__WEBPACK_IMPORTED_MODULE_1__.todoTask.id;
  taskData.description = newTask.value;
  _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.push(taskData);
  (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)();
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
  if (_savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.length !== 0) {
    const selected = document.querySelectorAll('[checked=checked]');

    const selectedIds = [];
    selected.forEach((select) => {
      selectedIds.push(Number(select.id));
    });

    const newTasks = _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.filter((t, index) => !selectedIds.includes(index));
    _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.length = 0;
    newTasks.forEach((item) => {
      _savetask_js__WEBPACK_IMPORTED_MODULE_1__.task.push(item);
    });
    (0,_savetask_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)();
    loadTask();
  }
});

loadTask();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3NhdmV0YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2ssIHNhdmVUYXNrIH0gZnJvbSAnLi9zYXZldGFzay5qcyc7XG5cbi8vIGNoZWNrIGFuZCBjcm9zcyBzZWxlY3RlZCBpdGVtXG5jb25zdCBjaGVjayA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgaWYgKGNoZWNrYm94LnZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYnRuR3JhbmRQYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBidG5HcmFuZFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbi5pdGVtKDEpO1xuICAgICAgY29uc3QgbWFya2VkRGVzYyA9IGJ0bkdyYW5kUGFyZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuLml0ZW0oMik7XG4gICAgICBjb25zdCB0YXNrQXJyYXlJbmRleCA9IGV2ZW50LnRhcmdldC5pZDtcblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRydWU7XG4gICAgICAgIG1hcmtlZERlc2MuY2xhc3NMaXN0LnJlbW92ZSgnZmFsc2UnKTtcbiAgICAgICAgbWFya2VkRGVzYy5jbGFzc0xpc3QuYWRkKCd0cnVlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RydWUnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZmFsc2UnKTtcblxuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IHtcbiAgICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGFza1t0YXNrQXJyYXlJbmRleF0uY29tcGxldGVkID0gdGFza0RhdGEuY29tcGxldGVkO1xuICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG5cbiAgICAgICAgbWFya2VkRGVzYy5jbGFzc0xpc3QucmVtb3ZlKCd0cnVlJyk7XG4gICAgICAgIG1hcmtlZERlc2MuY2xhc3NMaXN0LmFkZCgnZmFsc2UnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZmFsc2UnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndHJ1ZScpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEYXRhID0ge1xuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGFza1t0YXNrQXJyYXlJbmRleF0uY29tcGxldGVkID0gdGFza0RhdGEuY29tcGxldGVkO1xuICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrO1xuIiwiZXhwb3J0IGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrJykpIHx8IFtdO1xuZXhwb3J0IGNvbnN0IHRvZG9UYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kby1pZCcpKSB8fCB7fTtcblxuLy8gc2F2ZSB0YXNrIGlkXG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tJZCA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8taWQnLCBKU09OLnN0cmluZ2lmeSh0b2RvVGFzaykpO1xufTtcblxuLy8gdXBkYXRlIHRhc2sgYXJyYXlcbmV4cG9ydCBjb25zdCBzYXZlVGFzayA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2snLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUYXNrID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFzaycpKSB8fCBbXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICB0YXNrLCB0b2RvVGFzaywgc2F2ZVRhc2tJZCwgc2F2ZVRhc2ssXG59IGZyb20gJy4vc2F2ZXRhc2suanMnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vY2hlY2tib3guanMnO1xuXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG5sZXQgbW9yZUJ0bjtcblxuLy8gY3JlYXRlIGh0bWwgdGFncyBhbmQgbG9hZCBkYXRhXG5jb25zdCBsb2FkVGFzayA9ICgpID0+IHtcbiAgLy8gcmVtb3ZlIG9sZCBsaXN0IGl0ZW0gdGhhdCB3YXMgY3JlYXRlZFxuICB3aGlsZSAodG9kb0xpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgLy8gRmV0Y2ggZGF0YSwgY3JlYXRlIGFuZCBpbnNlcnQgZGF0YSBuZXdseSBjcmVhdGVkIGVsZW1lbnRzXG4gIHRhc2suZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBodG1sVGVtcGxhdGUgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicHgtMTAtcHktMTUgdGV4dC1ncmF5IGJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIGlkPVwiJHtpbmRleH1cIiB2YWx1ZT1cIiR7XG4gIHRvZG8uY29tcGxldGVkXG59XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7IXRvZG8uY29tcGxldGVkfVwiPiR7dG9kby5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPGRlbCBjbGFzcz1cIiAke3RvZG8uY29tcGxldGVkfVwiPlxuICAgICAgICAgICAgICA8c3Bhbj4ke3RvZG8uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgIDwvZGVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBtb3JlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wLWJ0biBib3JkZXItbm9uZSBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lbGxpcHNpcy12IHRleHQtZ3JheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1jb250YWluZXIgcHgtMTAtcHktMTUgdGV4dC1ncmF5IGJvcmRlci1ib3R0b20gYmcteWVsbG93IGhpZGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJlZGl0LXRhc2sgYmcteWVsbG93XCIgaWQ9XCIke2luZGV4fVwiIFxuICAgICAgICAgIHZhbHVlPVwiJHt0b2RvLmNvbXBsZXRlZH1cIi8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwidGV4dC1ncmF5IGVkaXQtaW5wdXQgYm9yZGVyLW5vbmUgYmcteWVsbG93XCIgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICB2YWx1ZT1cIiR7dG9kby5kZXNjcmlwdGlvbn1cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBtb3JlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3JkZXItbm9uZSBiZy15ZWxsb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtbyBmdC0yMCB0ZXh0LWdyYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3QgbGlUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpVGFnLmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChsaVRhZyk7XG4gIH0pO1xuICAvLyBHZXQgYWxsIG1vcmUgYnV0dG9uc1xuICBtb3JlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3AtYnRuJyk7XG4gIG1vcmVCdG4uZm9yRWFjaCgoZWFjaE1vcmVCdG4sIGJ0bkluZGV4KSA9PiB7XG4gICAgLy8gdG9nZ2xlIG1vcmUgYnV0dG9uIHRvIGVkaXQgb3IgZGVsZXRlIGEgdGFza1xuICAgIGVhY2hNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZ3JhbmRQYXJlbnRFbGVtZW50ID0gZWFjaE1vcmVCdG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZGVsQnRuQ29udGFpbmVyID0gZ3JhbmRQYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3NOYW1lID0gZGVsQnRuQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnaGlkZScpO1xuICAgICAgaWYgKGNoZWNrQ2xhc3NOYW1lKSB7XG4gICAgICAgIGRlbEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGRlbEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIGdyYW5kUGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgLy8gRGVsZXRlIGEgdGFza1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBkZWxCdG5Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuaWQ7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkZWxCdG5Db250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0YXNrLmZvckVhY2goKHRhcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0YXNrSW5kZXgsIDEwKSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgdGFzay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgICAgICAgICBsb2FkVGFzaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRWRpdCBhIHRhc2tcbiAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRlbEJ0bkNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlVGFzay52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGEgPSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhc2tEYXRhLmRlc2NyaXB0aW9uID0gdXBkYXRlVGFzay52YWx1ZTtcbiAgICAgICAgICAgIHRhc2tbYnRuSW5kZXhdID0gdGFza0RhdGE7XG4gICAgICAgICAgICB1cGRhdGVUYXNrLnZhbHVlID0gdGFza0RhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgICAgICAgbG9hZFRhc2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjaGVjaygpO1xufTtcblxuLy8gTWV0aG9kIGZvciBjcmVhdGluZyBuZXcgdGFza1xuY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgaWYgKHRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgdG9kb1Rhc2suaWQgPSAxO1xuICAgIHNhdmVUYXNrSWQoKTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvVGFzay5pZCArPSAxO1xuICAgIHNhdmVUYXNrSWQoKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tEYXRhID0ge1xuICAgIGlkOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfTtcblxuICB0YXNrRGF0YS5pZCA9IHRvZG9UYXNrLmlkO1xuICB0YXNrRGF0YS5kZXNjcmlwdGlvbiA9IG5ld1Rhc2sudmFsdWU7XG4gIHRhc2sucHVzaCh0YXNrRGF0YSk7XG4gIHNhdmVUYXNrKCk7XG4gIG5ld1Rhc2sudmFsdWUgPSAnJztcbiAgbG9hZFRhc2soKTtcbn07XG5cbi8vIEFkZCBuZXcgdGFza1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICBpZiAobmV3VGFzay52YWx1ZSkge1xuICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBjcmVhdGVUYXNrKCk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gRGVsZXRlIGNvbXBsZXRlZCB0YXNrXG5jb25zdCBkZWxDaGVja2VkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci10YXNrJyk7XG5kZWxDaGVja2VkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKHRhc2subGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2hlY2tlZD1jaGVja2VkXScpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBbXTtcbiAgICBzZWxlY3RlZC5mb3JFYWNoKChzZWxlY3QpID0+IHtcbiAgICAgIHNlbGVjdGVkSWRzLnB1c2goTnVtYmVyKHNlbGVjdC5pZCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VGFza3MgPSB0YXNrLmZpbHRlcigodCwgaW5kZXgpID0+ICFzZWxlY3RlZElkcy5pbmNsdWRlcyhpbmRleCkpO1xuICAgIHRhc2subGVuZ3RoID0gMDtcbiAgICBuZXdUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0YXNrLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgc2F2ZVRhc2soKTtcbiAgICBsb2FkVGFzaygpO1xuICB9XG59KTtcblxubG9hZFRhc2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==