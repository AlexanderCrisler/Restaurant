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

    homeButton.onclick = () => { createPage(_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"]); };
    orderButton.onclick = () => { createPage(_order_js__WEBPACK_IMPORTED_MODULE_2__["default"]); };
    aboutButton.onclick = () => { createPage(_about_js__WEBPACK_IMPORTED_MODULE_1__["default"]); };
}

createPage(_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FDeENqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDL0RoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCOzs7Ozs7VUNyQ2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNGO0FBQ0E7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsV0FBVyxvREFBaUI7QUFDN0Qsa0NBQWtDLFdBQVcsaURBQWtCO0FBQy9ELGtDQUFrQyxXQUFXLGlEQUFrQjtBQUMvRDs7QUFFQSxXQUFXLG9EQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7IFxufVxuXG5jb25zdCBwaWN0dXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcGljLnNyYyA9ICdodHRwczovL2tub2xsYXNwaXp6YS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvcGl6emEtaGVhZGVyLmpwZyc7XG5cbiAgICByZXR1cm4gcGljO1xufVxuXG5jb25zdCB0ZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZXh0LmlubmVySFRNTCA9IFxuICAgICAgICBcIiBcXFxuICAgICAgICBXZSBoYXZlIGFsd2F5cyBiZWVuIGhlcmUsIFxcXG4gICAgICAgIFdlIHdpbGwgYWx3YXlzIGJlIGhlcmUsIFxcXG4gICAgICAgIFlvdSBhcmUgdGhlIGludmFkZXIuIFxcXG4gICAgICAgIEl0J3MgUGl6emEgVGltZS4gXFxcbiAgICAgICAgXCI7XG4gICAgXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmNvbnN0IGNyZWF0ZUFib3V0UGFnZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGljdHVyZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCgpKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXRQYWdlRGl2OyIsImNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkhlbGxvIFJlc3RhdXJhbnRcIjtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDsgXG59XG5cbmNvbnN0IG5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIGhvbWVCdXR0b24uaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIG9yZGVyQnV0dG9uLmlubmVySFRNTCA9ICdPcmRlcic7XG4gICAgYWJvdXRCdXR0b24uaW5uZXJIVE1MID0gJ0Fib3V0JztcblxuICAgIGhvbWVCdXR0b24uaWQgPSAnaG9tZUJ1dHRvbic7XG4gICAgb3JkZXJCdXR0b24uaWQgPSAnb3JkZXJCdXR0b24nO1xuICAgIGFib3V0QnV0dG9uLmlkID0gJ2Fib3V0QnV0dG9uJztcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmNvbnN0IHBpY3R1cmUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwaWMuc3JjID0gJ2h0dHBzOi8va25vbGxhc3BpenphLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9waXp6YS1oZWFkZXIuanBnJztcblxuICAgIHJldHVybiBwaWM7XG59XG5cbmNvbnN0IHRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHRleHQuaW5uZXJIVE1MID0gXG4gICAgICAgIFwiIFxcXG4gICAgICAgIEhlbGxvIFJlc3RhdXJhdW50IGlzIGEgbW9kZXJuIHRha2Ugb24gXFxcbiAgICAgICAgUGl6emEuIEZyb20gb3VyIHdvcmxkIHJla25vd24gY2hlZnMgZnJvbSBJdGFseSwgXFxcbiAgICAgICAgd2UgYnJpbmcgeW91IHRoZSBwZXJmZWN0IHBpenphIGZvciB5b3VyIGxpZmVzdHlsZS4gXFxcbiAgICAgICAgXCI7XG4gICAgXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmNvbnN0IGNyZWF0ZUhvbWVwYWdlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmlkID0gJ3BhZ2UnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuYXZCYXIoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBpY3R1cmUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQoKSk7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVwYWdlRGl2OyIsImNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIk9yZGVyXCI7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7IFxufVxuXG5jb25zdCBwaWN0dXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcGljLnNyYyA9ICdodHRwczovL2tub2xsYXNwaXp6YS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvcGl6emEtaGVhZGVyLmpwZyc7XG5cbiAgICByZXR1cm4gcGljO1xufVxuXG5jb25zdCB0ZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZXh0LmlubmVySFRNTCA9IFxuICAgICAgICBcIiBcXFxuICAgICAgICBQbGVhc2UgY2FsbCA1NTUtMTIzNCB0byBwbGFjZSB5b3VyIG9yZGVyIFxcXG4gICAgICAgIFwiO1xuICAgIFxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5jb25zdCBjcmVhdGVPcmRlclBhZ2VEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBpY3R1cmUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQoKSk7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yZGVyUGFnZURpdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lcGFnZURpdiBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCBjcmVhdGVBYm91dFBhZ2VEaXYgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgY3JlYXRlT3JkZXJQYWdlRGl2IGZyb20gJy4vb3JkZXIuanMnO1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKGNyZWF0ZUZ1bmMpID0+IHtcbiAgICBsZXQgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKSAhPSBudWxsKSB7XG4gICAgICAgIG1haW5QYWdlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKSk7XG4gICAgfVxuXG4gICAgbWFpblBhZ2UuYXBwZW5kKGNyZWF0ZUZ1bmMoKSk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnV0dG9uXCIpO1xuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlckJ1dHRvblwiKTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRCdXR0b25cIik7XG5cbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IGNyZWF0ZVBhZ2UoY3JlYXRlSG9tZXBhZ2VEaXYpOyB9O1xuICAgIG9yZGVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IGNyZWF0ZVBhZ2UoY3JlYXRlT3JkZXJQYWdlRGl2KTsgfTtcbiAgICBhYm91dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4geyBjcmVhdGVQYWdlKGNyZWF0ZUFib3V0UGFnZURpdik7IH07XG59XG5cbmNyZWF0ZVBhZ2UoY3JlYXRlSG9tZXBhZ2VEaXYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==