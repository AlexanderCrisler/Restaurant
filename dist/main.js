/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "About";
    
    return element; 
}

const picture = () => {
    const pic = document.createElement('img');

    pic.src = 'https://knollaspizza.com/wp-content/uploads/2020/08/pizza-header.jpg';

    return pic;
}

const text = () => {
    const text = document.createElement('p');

    text.innerHTML = 
        " \
        We have always been here, \
        We will always be here, \
        You are the invader. \
        It's Pizza Time. \
        ";
    
    return text;
}

const createAboutPageDiv = () => {
    const div = document.createElement('div');

    div.appendChild(title());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutPageDiv);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "Hello Restaurant";
    
    return element; 
}

const navBar = () => {
    const navBar = document.createElement('div');
    const homeButton = document.createElement('button');
    const orderButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    
    homeButton.innerHTML = 'Home';
    orderButton.innerHTML = 'Order';
    aboutButton.innerHTML = 'About';

    homeButton.id = 'homeButton';
    orderButton.id = 'orderButton';
    aboutButton.id = 'aboutButton';

    navBar.appendChild(homeButton);
    navBar.appendChild(orderButton);
    navBar.appendChild(aboutButton);

    return navBar
}

const picture = () => {
    const pic = document.createElement('img');

    pic.src = 'https://knollaspizza.com/wp-content/uploads/2020/08/pizza-header.jpg';

    return pic;
}

const text = () => {
    const text = document.createElement('p');

    text.innerHTML = 
        " \
        Hello Restauraunt is a modern take on \
        Pizza. From our world reknown chefs from Italy, \
        we bring you the perfect pizza for your lifestyle. \
        ";
    
    return text;
}

const createHomepageDiv = () => {
    const div = document.createElement('div');

    div.id = 'page';

    div.appendChild(title());
    div.appendChild(navBar());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepageDiv);

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "Order";
    
    return element; 
}

const picture = () => {
    const pic = document.createElement('img');

    pic.src = 'https://knollaspizza.com/wp-content/uploads/2020/08/pizza-header.jpg';

    return pic;
}

const text = () => {
    const text = document.createElement('p');

    text.innerHTML = 
        " \
        Please call 555-1234 to place your order \
        ";
    
    return text;
}

const createOrderPageDiv = () => {
    const div = document.createElement('div');

    div.appendChild(title());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOrderPageDiv);

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
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.js */ "./src/order.js");




const createPage = (createFunc) => {
    let mainPage = document.getElementById('content');

    if (document.getElementById("page") != null) {
        mainPage.removeChild(document.getElementById("page"));
    }
    mainPage.append(createFunc());

    const homeButton = document.getElementById("homeButton");
    const orderButton = document.getElementById("orderButton");
    const aboutButton = document.getElementById("aboutButton");

    homeButton.onclick = (createHomepageDiv) => { createPage(createHomepageDiv); };
    orderButton.onclick = (createOrderPageDiv) => { createPage(createOrderPageDiv); };
    aboutButton.onclick = (createAboutPageDiv) => { createPage(createAboutPageDiv); };
}

createPage(_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FDeENqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDL0RoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCOzs7Ozs7VUNyQ2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNGO0FBQ0E7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BEOztBQUVBLFdBQVcsb0RBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDsgXG59XG5cbmNvbnN0IHBpY3R1cmUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwaWMuc3JjID0gJ2h0dHBzOi8va25vbGxhc3BpenphLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9waXp6YS1oZWFkZXIuanBnJztcblxuICAgIHJldHVybiBwaWM7XG59XG5cbmNvbnN0IHRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHRleHQuaW5uZXJIVE1MID0gXG4gICAgICAgIFwiIFxcXG4gICAgICAgIFdlIGhhdmUgYWx3YXlzIGJlZW4gaGVyZSwgXFxcbiAgICAgICAgV2Ugd2lsbCBhbHdheXMgYmUgaGVyZSwgXFxcbiAgICAgICAgWW91IGFyZSB0aGUgaW52YWRlci4gXFxcbiAgICAgICAgSXQncyBQaXp6YSBUaW1lLiBcXFxuICAgICAgICBcIjtcbiAgICBcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuY29uc3QgY3JlYXRlQWJvdXRQYWdlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwaWN0dXJlKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KCkpO1xuXG4gICAgcmV0dXJuIGRpdlxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFBhZ2VEaXY7IiwiY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiSGVsbG8gUmVzdGF1cmFudFwiO1xuICAgIFxuICAgIHJldHVybiBlbGVtZW50OyBcbn1cblxuY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgb3JkZXJCdXR0b24uaW5uZXJIVE1MID0gJ09yZGVyJztcbiAgICBhYm91dEJ1dHRvbi5pbm5lckhUTUwgPSAnQWJvdXQnO1xuXG4gICAgaG9tZUJ1dHRvbi5pZCA9ICdob21lQnV0dG9uJztcbiAgICBvcmRlckJ1dHRvbi5pZCA9ICdvcmRlckJ1dHRvbic7XG4gICAgYWJvdXRCdXR0b24uaWQgPSAnYWJvdXRCdXR0b24nO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXZCYXJcbn1cblxuY29uc3QgcGljdHVyZSA9ICgpID0+IHtcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHBpYy5zcmMgPSAnaHR0cHM6Ly9rbm9sbGFzcGl6emEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3BpenphLWhlYWRlci5qcGcnO1xuXG4gICAgcmV0dXJuIHBpYztcbn1cblxuY29uc3QgdGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgdGV4dC5pbm5lckhUTUwgPSBcbiAgICAgICAgXCIgXFxcbiAgICAgICAgSGVsbG8gUmVzdGF1cmF1bnQgaXMgYSBtb2Rlcm4gdGFrZSBvbiBcXFxuICAgICAgICBQaXp6YS4gRnJvbSBvdXIgd29ybGQgcmVrbm93biBjaGVmcyBmcm9tIEl0YWx5LCBcXFxuICAgICAgICB3ZSBicmluZyB5b3UgdGhlIHBlcmZlY3QgcGl6emEgZm9yIHlvdXIgbGlmZXN0eWxlLiBcXFxuICAgICAgICBcIjtcbiAgICBcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuY29uc3QgY3JlYXRlSG9tZXBhZ2VEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuaWQgPSAncGFnZSc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdkJhcigpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGljdHVyZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCgpKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZXBhZ2VEaXY7IiwiY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiT3JkZXJcIjtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDsgXG59XG5cbmNvbnN0IHBpY3R1cmUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwaWMuc3JjID0gJ2h0dHBzOi8va25vbGxhc3BpenphLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9waXp6YS1oZWFkZXIuanBnJztcblxuICAgIHJldHVybiBwaWM7XG59XG5cbmNvbnN0IHRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHRleHQuaW5uZXJIVE1MID0gXG4gICAgICAgIFwiIFxcXG4gICAgICAgIFBsZWFzZSBjYWxsIDU1NS0xMjM0IHRvIHBsYWNlIHlvdXIgb3JkZXIgXFxcbiAgICAgICAgXCI7XG4gICAgXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmNvbnN0IGNyZWF0ZU9yZGVyUGFnZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGljdHVyZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCgpKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JkZXJQYWdlRGl2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWVwYWdlRGl2IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZUFib3V0UGFnZURpdiBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBjcmVhdGVPcmRlclBhZ2VEaXYgZnJvbSAnLi9vcmRlci5qcyc7XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoY3JlYXRlRnVuYykgPT4ge1xuICAgIGxldCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpICE9IG51bGwpIHtcbiAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpKTtcbiAgICB9XG4gICAgbWFpblBhZ2UuYXBwZW5kKGNyZWF0ZUZ1bmMoKSk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnV0dG9uXCIpO1xuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlckJ1dHRvblwiKTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRCdXR0b25cIik7XG5cbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSAoY3JlYXRlSG9tZXBhZ2VEaXYpID0+IHsgY3JlYXRlUGFnZShjcmVhdGVIb21lcGFnZURpdik7IH07XG4gICAgb3JkZXJCdXR0b24ub25jbGljayA9IChjcmVhdGVPcmRlclBhZ2VEaXYpID0+IHsgY3JlYXRlUGFnZShjcmVhdGVPcmRlclBhZ2VEaXYpOyB9O1xuICAgIGFib3V0QnV0dG9uLm9uY2xpY2sgPSAoY3JlYXRlQWJvdXRQYWdlRGl2KSA9PiB7IGNyZWF0ZVBhZ2UoY3JlYXRlQWJvdXRQYWdlRGl2KTsgfTtcbn1cblxuY3JlYXRlUGFnZShjcmVhdGVIb21lcGFnZURpdik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9