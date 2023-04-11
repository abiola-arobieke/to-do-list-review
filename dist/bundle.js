/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './checkbox.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




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

  Object(function webpackMissingModule() { var e = new Error("Cannot find module './checkbox.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7O0FBRVA7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRU87Ozs7Ozs7VUNiUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFJRTtBQUNXOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFZO0FBQ2Q7QUFDQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0EsQ0FBQztBQUNELHlCQUF5QixnQkFBZ0IsSUFBSSxpQkFBaUI7QUFDOUQseUJBQXlCLGVBQWU7QUFDeEMsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLE1BQU07QUFDekUsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0RBQVk7QUFDdEI7QUFDQSxjQUFjLHFEQUFXO0FBQ3pCLGNBQWMsc0RBQVE7QUFDdEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksOENBQUk7QUFDaEI7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSCxFQUFFLDRJQUFLO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE1BQU0scURBQVc7QUFDakIsSUFBSSxxREFBVztBQUNmLElBQUksd0RBQVU7QUFDZCxJQUFJO0FBQ0osSUFBSSxxREFBVztBQUNmLElBQUksd0RBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixxREFBVztBQUMzQjtBQUNBLEVBQUUsbURBQVM7QUFDWCxFQUFFLHNEQUFRO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVc7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxxQkFBcUIscURBQVc7QUFDaEMsSUFBSSxxREFBVztBQUNmO0FBQ0EsTUFBTSxtREFBUztBQUNmLEtBQUs7QUFDTCxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3NhdmV0YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFzaycpKSB8fCBbXTtcbmV4cG9ydCBjb25zdCB0b2RvVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8taWQnKSkgfHwge307XG5cbi8vIHNhdmUgdGFzayBpZFxuZXhwb3J0IGNvbnN0IHNhdmVUYXNrSWQgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWlkJywgSlNPTi5zdHJpbmdpZnkodG9kb1Rhc2spKTtcbn07XG5cbi8vIHVwZGF0ZSB0YXNrIGFycmF5XG5leHBvcnQgY29uc3Qgc2F2ZVRhc2sgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrJywgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGFzayA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2snKSkgfHwgW107XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgdGFzaywgdG9kb1Rhc2ssXG4gIHNhdmVUYXNrSWQsIHNhdmVUYXNrLFxufSBmcm9tICcuL3NhdmV0YXNrLmpzJztcbmltcG9ydCBjaGVjayBmcm9tICcuL2NoZWNrYm94LmpzJztcblxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xubGV0IG1vcmVCdG47XG5cbi8vIGNyZWF0ZSBodG1sIHRhZ3MgYW5kIGxvYWQgZGF0YVxuY29uc3QgbG9hZFRhc2sgPSAoKSA9PiB7XG4gIC8vIHJlbW92ZSBvbGQgbGlzdCBpdGVtIHRoYXQgd2FzIGNyZWF0ZWRcbiAgd2hpbGUgKHRvZG9MaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG9MaXN0LmZpcnN0Q2hpbGQpO1xuICB9XG4gIC8vIEZldGNoIGRhdGEsIGNyZWF0ZSBhbmQgaW5zZXJ0IGRhdGEgbmV3bHkgY3JlYXRlZCBlbGVtZW50c1xuICB0YXNrLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInB4LTEwLXB5LTE1IHRleHQtZ3JheSBib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBpZD1cIiR7aW5kZXh9XCIgdmFsdWU9XCIke1xuICB0b2RvLmNvbXBsZXRlZFxufVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCIkeyF0b2RvLmNvbXBsZXRlZH1cIj4ke3RvZG8uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgIDxkZWwgY2xhc3M9XCIgJHt0b2RvLmNvbXBsZXRlZH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHt0b2RvLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2RlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gbW9yZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcC1idG4gYm9yZGVyLW5vbmUgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZWxsaXBzaXMtdiB0ZXh0LWdyYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVkaXQtY29udGFpbmVyIHB4LTEwLXB5LTE1IHRleHQtZ3JheSBib3JkZXItYm90dG9tIGJnLXllbGxvdyBoaWRlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZWRpdC10YXNrIGJnLXllbGxvd1wiIGlkPVwiJHtpbmRleH1cIiBcbiAgICAgICAgICB2YWx1ZT1cIiR7dG9kby5jb21wbGV0ZWR9XCIvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRleHQtZ3JheSBlZGl0LWlucHV0IGJvcmRlci1ub25lIGJnLXllbGxvd1wiIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgdmFsdWU9XCIke3RvZG8uZGVzY3JpcHRpb259XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gbW9yZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm9yZGVyLW5vbmUgYmcteWVsbG93XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW8gZnQtMjAgdGV4dC1ncmF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IGxpVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaVRhZy5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlUYWcpO1xuICB9KTtcbiAgLy8gR2V0IGFsbCBtb3JlIGJ1dHRvbnNcbiAgbW9yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLWJ0bicpO1xuICBtb3JlQnRuLmZvckVhY2goKGVhY2hNb3JlQnRuLCBidG5JbmRleCkgPT4ge1xuICAgIC8vIHRvZ2dsZSBtb3JlIGJ1dHRvbiB0byBlZGl0IG9yIGRlbGV0ZSBhIHRhc2tcbiAgICBlYWNoTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGdyYW5kUGFyZW50RWxlbWVudCA9IGVhY2hNb3JlQnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGRlbEJ0bkNvbnRhaW5lciA9IGdyYW5kUGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICBjb25zdCBjaGVja0NsYXNzTmFtZSA9IGRlbEJ0bkNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2hpZGUnKTtcbiAgICAgIGlmIChjaGVja0NsYXNzTmFtZSkge1xuICAgICAgICBkZWxCdG5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkZWxCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBncmFuZFBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIC8vIERlbGV0ZSBhIHRhc2tcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZGVsQnRuQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmlkO1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZGVsQnRuQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGFzay5mb3JFYWNoKCh0YXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGFza0luZGV4LCAxMCkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgIHRhc2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgc2F2ZVRhc2soKTtcbiAgICAgICAgICAgICAgbG9hZFRhc2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEVkaXQgYSB0YXNrXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSBkZWxCdG5Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB1cGRhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZVRhc2sudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRhID0ge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbiA9IHVwZGF0ZVRhc2sudmFsdWU7XG4gICAgICAgICAgICB0YXNrW2J0bkluZGV4XSA9IHRhc2tEYXRhO1xuICAgICAgICAgICAgdXBkYXRlVGFzay52YWx1ZSA9IHRhc2tEYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgc2F2ZVRhc2soKTtcbiAgICAgICAgICAgIGxvYWRUYXNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY2hlY2soKTtcbn07XG5cbi8vIE1ldGhvZCBmb3IgY3JlYXRpbmcgbmV3IHRhc2tcbmNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gIGlmICh0YXNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHRvZG9UYXNrLmlkID0gMTtcbiAgICBzYXZlVGFza0lkKCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kb1Rhc2suaWQgKz0gMTtcbiAgICBzYXZlVGFza0lkKCk7XG4gIH1cblxuICBjb25zdCB0YXNrRGF0YSA9IHtcbiAgICBpZDogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG5cbiAgdGFza0RhdGEuaWQgPSB0b2RvVGFzay5pZDtcbiAgdGFza0RhdGEuZGVzY3JpcHRpb24gPSBuZXdUYXNrLnZhbHVlO1xuICB0YXNrLnB1c2godGFza0RhdGEpO1xuICBzYXZlVGFzaygpO1xuICBuZXdUYXNrLnZhbHVlID0gJyc7XG4gIGxvYWRUYXNrKCk7XG59O1xuXG4vLyBBZGQgbmV3IHRhc2tcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgaWYgKG5ld1Rhc2sudmFsdWUpIHtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgY3JlYXRlVGFzaygpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIERlbGV0ZSBjb21wbGV0ZWQgdGFza1xuY29uc3QgZGVsQ2hlY2tlZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItdGFzaycpO1xuZGVsQ2hlY2tlZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICh0YXNrLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NoZWNrZWQ9Y2hlY2tlZF0nKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gW107XG4gICAgc2VsZWN0ZWQuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICBzZWxlY3RlZElkcy5wdXNoKE51bWJlcihzZWxlY3QuaWQpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFzay5maWx0ZXIoKHQsIGluZGV4KSA9PiAhc2VsZWN0ZWRJZHMuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICB0YXNrLmxlbmd0aCA9IDA7XG4gICAgbmV3VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGFzay5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIHNhdmVUYXNrKCk7XG4gICAgbG9hZFRhc2soKTtcbiAgfVxufSk7XG5cbmxvYWRUYXNrKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=