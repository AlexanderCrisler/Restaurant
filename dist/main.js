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

    div.id = 'page';

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
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepageDiv);


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navBar = () => {
    const navBar = document.createElement('nav');
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

    navBar.id = 'navBar';

    return navBar
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);


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

    div.id = 'page';

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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");





const loadPage = (page) => {
    const mainPage = document.getElementById('content');

    if (document.getElementById("page") != null) {
        mainPage.removeChild(document.getElementById("navBar"))
        mainPage.removeChild(document.getElementById("page"));
    }

    mainPage.append((0,_navbar__WEBPACK_IMPORTED_MODULE_3__["default"])()); // TODO: Move to load page function and copy once before create page call
    mainPage.append(page());

    const homeBtn = document.getElementById('homeButton');
    const orderBtn = document.getElementById('orderButton');
    const aboutBtn = document.getElementById('aboutButton');

    homeBtn.addEventListener('click', () => {loadPage(_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])});
    orderBtn.addEventListener('click', () => {loadPage(_order__WEBPACK_IMPORTED_MODULE_1__["default"])});
    aboutBtn.addEventListener('click', () => {loadPage(_about__WEBPACK_IMPORTED_MODULE_2__["default"])});
}

const mainPage = document.getElementById('content');
mainPage.append((0,_navbar__WEBPACK_IMPORTED_MODULE_3__["default"])());
mainPage.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])());

const homeBtn = document.getElementById('homeButton');
const orderBtn = document.getElementById('orderButton');
const aboutBtn = document.getElementById('aboutButton');

homeBtn.addEventListener('click', () => {loadPage(_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])});
orderBtn.addEventListener('click', () => {loadPage(_order__WEBPACK_IMPORTED_MODULE_1__["default"])});
aboutBtn.addEventListener('click', () => {loadPage(_about__WEBPACK_IMPORTED_MODULE_2__["default"])});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QnRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7OztVQ3ZDbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNGO0FBQ0E7QUFDWDs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbURBQU0sS0FBSztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLFNBQVMsaURBQWlCLEVBQUU7QUFDekUsOENBQThDLFNBQVMsOENBQWtCLEVBQUU7QUFDM0UsOENBQThDLFNBQVMsOENBQWtCLEVBQUU7QUFDM0U7O0FBRUE7QUFDQSxnQkFBZ0IsbURBQU07QUFDdEIsZ0JBQWdCLHFEQUFpQjs7QUFFakM7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTLGlEQUFpQixFQUFFO0FBQ3JFLDBDQUEwQyxTQUFTLDhDQUFrQixFQUFFO0FBQ3ZFLDBDQUEwQyxTQUFTLDhDQUFrQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDsgXG59XG5cbmNvbnN0IHBpY3R1cmUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwaWMuc3JjID0gJ2h0dHBzOi8va25vbGxhc3BpenphLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9waXp6YS1oZWFkZXIuanBnJztcblxuICAgIHJldHVybiBwaWM7XG59XG5cbmNvbnN0IHRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHRleHQuaW5uZXJIVE1MID0gXG4gICAgICAgIFwiIFxcXG4gICAgICAgIFdlIGhhdmUgYWx3YXlzIGJlZW4gaGVyZSwgXFxcbiAgICAgICAgV2Ugd2lsbCBhbHdheXMgYmUgaGVyZSwgXFxcbiAgICAgICAgWW91IGFyZSB0aGUgaW52YWRlci4gXFxcbiAgICAgICAgSXQncyBQaXp6YSBUaW1lLiBcXFxuICAgICAgICBcIjtcbiAgICBcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuY29uc3QgY3JlYXRlQWJvdXRQYWdlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmlkID0gJ3BhZ2UnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwaWN0dXJlKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KCkpO1xuXG4gICAgcmV0dXJuIGRpdlxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFBhZ2VEaXY7XG4iLCJjb25zdCB0aXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJIZWxsbyBSZXN0YXVyYW50XCI7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7IFxufVxuXG5jb25zdCBwaWN0dXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcGljLnNyYyA9ICdodHRwczovL2tub2xsYXNwaXp6YS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvcGl6emEtaGVhZGVyLmpwZyc7XG5cbiAgICByZXR1cm4gcGljO1xufVxuXG5jb25zdCB0ZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZXh0LmlubmVySFRNTCA9IFxuICAgICAgICBcIiBcXFxuICAgICAgICBIZWxsbyBSZXN0YXVyYXVudCBpcyBhIG1vZGVybiB0YWtlIG9uIFxcXG4gICAgICAgIFBpenphLiBGcm9tIG91ciB3b3JsZCByZWtub3duIGNoZWZzIGZyb20gSXRhbHksIFxcXG4gICAgICAgIHdlIGJyaW5nIHlvdSB0aGUgcGVyZmVjdCBwaXp6YSBmb3IgeW91ciBsaWZlc3R5bGUuIFxcXG4gICAgICAgIFwiO1xuICAgIFxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5jb25zdCBjcmVhdGVIb21lcGFnZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5pZCA9ICdwYWdlJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGljdHVyZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCgpKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZXBhZ2VEaXY7XG4iLCJjb25zdCBuYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBob21lQnV0dG9uLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBvcmRlckJ1dHRvbi5pbm5lckhUTUwgPSAnT3JkZXInO1xuICAgIGFib3V0QnV0dG9uLmlubmVySFRNTCA9ICdBYm91dCc7XG5cbiAgICBob21lQnV0dG9uLmlkID0gJ2hvbWVCdXR0b24nO1xuICAgIG9yZGVyQnV0dG9uLmlkID0gJ29yZGVyQnV0dG9uJztcbiAgICBhYm91dEJ1dHRvbi5pZCA9ICdhYm91dEJ1dHRvbic7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG9yZGVyQnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuXG4gICAgbmF2QmFyLmlkID0gJ25hdkJhcic7XG5cbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhcjtcbiIsImNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIk9yZGVyXCI7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7IFxufVxuXG5jb25zdCBwaWN0dXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcGljLnNyYyA9ICdodHRwczovL2tub2xsYXNwaXp6YS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvcGl6emEtaGVhZGVyLmpwZyc7XG5cbiAgICByZXR1cm4gcGljO1xufVxuXG5jb25zdCB0ZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZXh0LmlubmVySFRNTCA9IFxuICAgICAgICBcIiBcXFxuICAgICAgICBQbGVhc2UgY2FsbCA1NTUtMTIzNCB0byBwbGFjZSB5b3VyIG9yZGVyIFxcXG4gICAgICAgIFwiO1xuICAgIFxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5jb25zdCBjcmVhdGVPcmRlclBhZ2VEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuaWQgPSAncGFnZSc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBpY3R1cmUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQoKSk7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yZGVyUGFnZURpdjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWVwYWdlRGl2IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGNyZWF0ZU9yZGVyUGFnZURpdiBmcm9tICcuL29yZGVyJztcbmltcG9ydCBjcmVhdGVBYm91dFBhZ2VEaXYgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2YmFyJztcblxuY29uc3QgbG9hZFBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VcIikgIT0gbnVsbCkge1xuICAgICAgICBtYWluUGFnZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkJhclwiKSlcbiAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpKTtcbiAgICB9XG5cbiAgICBtYWluUGFnZS5hcHBlbmQobmF2QmFyKCkpOyAvLyBUT0RPOiBNb3ZlIHRvIGxvYWQgcGFnZSBmdW5jdGlvbiBhbmQgY29weSBvbmNlIGJlZm9yZSBjcmVhdGUgcGFnZSBjYWxsXG4gICAgbWFpblBhZ2UuYXBwZW5kKHBhZ2UoKSk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdXR0b24nKTtcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlckJ1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0QnV0dG9uJyk7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRQYWdlKGNyZWF0ZUhvbWVwYWdlRGl2KX0pO1xuICAgIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2xvYWRQYWdlKGNyZWF0ZU9yZGVyUGFnZURpdil9KTtcbiAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkUGFnZShjcmVhdGVBYm91dFBhZ2VEaXYpfSk7XG59XG5cbmNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbm1haW5QYWdlLmFwcGVuZChuYXZCYXIoKSk7XG5tYWluUGFnZS5hcHBlbmQoY3JlYXRlSG9tZXBhZ2VEaXYoKSk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ1dHRvbicpO1xuY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXJCdXR0b24nKTtcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0QnV0dG9uJyk7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9hZFBhZ2UoY3JlYXRlSG9tZXBhZ2VEaXYpfSk7XG5vcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkUGFnZShjcmVhdGVPcmRlclBhZ2VEaXYpfSk7XG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkUGFnZShjcmVhdGVBYm91dFBhZ2VEaXYpfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=