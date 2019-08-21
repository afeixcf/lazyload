module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domVisibleObserver = __webpack_require__(1);

var _domVisibleObserver2 = _interopRequireDefault(_domVisibleObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lazyload(_ref) {
    var _ref$container = _ref.container,
        container = _ref$container === undefined ? document : _ref$container,
        el = _ref.el,
        src = _ref.src,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0 : _ref$threshold,
        _ref$effect = _ref.effect,
        effect = _ref$effect === undefined ? '' : _ref$effect;

    var errorMsg = checkParamIterator(checkElTag, checkImgSrc, checkThreshold)({ el: el, src: src, threshold: threshold });

    if (errorMsg) return;

    var defaultSrc = el.src;

    return (0, _domVisibleObserver2.default)({
        container: container,
        el: el,
        threshold: threshold,
        show: function show() {
            if (el.src !== defaultSrc) return;
            proxyImage(src, function () {
                el.src = src;
                if (effect === 'fadein') {
                    el.style.opacity = 0;
                    setTimeout(function () {
                        el.style.transition = '.3s all linear';
                        el.style.webkitTransition = '.3s all linear';
                        el.style.opacity = 1;
                    }, 50);
                }
            });
        },
        hide: function hide() {}
    });
}

function proxyImage(src, cb) {
    var Img = new Image();
    Img.src = src;
    Img.onload = cb;
}

function checkElTag(param) {
    var el = param.el;

    if (!el || !el.tagName || el.tagName.toLowerCase() !== 'img') {
        return 'missing el parameter or el is not a ' + new Image().toString();
    }
}
function checkImgSrc(param) {
    var src = param.src;

    if (!src || !/^(http:|data:|https:)/.test(src)) {
        return 'missing src parameter or src is not a correct Picture address';
    }
}
function checkThreshold(param) {
    if (typeof param.threshold !== 'number') {
        return 'threshold must be a number';
    }
}
function checkParamIterator() {
    var args = [].slice.call(arguments);
    var msg = '';
    return function (param) {
        for (var i = 0; i < args.length; i++) {
            msg = args[i](param);
            msg && console.error(msg);
        }
        return msg;
    };
}

exports.default = lazyload;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @description: 侦测dom是否在当前可视窗口
 * @param
 *  container 滚动容器
 *  el 侦测的dom
 *  threshold 差值 number类型
 *  show 当el显示在当前可视窗口时的回调函数
 *  hide 当el不在当前可视窗口时的回调函数
 * @return
 *  destory 取消此次侦测
 */
function visibleObserver(_ref) {
    var _ref$container = _ref.container,
        container = _ref$container === undefined ? document : _ref$container,
        el = _ref.el,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0 : _ref$threshold,
        show = _ref.show,
        hide = _ref.hide;

    var init = throttle(function (e) {
        var scrollTop = getScrollTop(container);
        var offsetTop = getOffsetTop(el, container);
        var offsetHeight = el.offsetHeight;
        var windowHeight = getWindowHeight(container);

        if (scrollTop + windowHeight > offsetTop - threshold && offsetTop + offsetHeight + threshold > scrollTop) {
            show && show();
        } else {
            hide && hide();
        }
    }, 100);
    init();

    container.addEventListener('scroll', init, {
        passive: true
    });

    var destroy = function destroy() {
        container.removeEventListener('scroll', init);
    };

    return { destroy: destroy };
}

function throttle(func, wait) {
    var lastTime = null;
    var timeout = void 0;
    return function () {
        var _arguments = arguments;

        var context = this;
        var now = new Date();
        if (now - lastTime - wait > 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context, arguments);
            lastTime = now;
        } else if (!timeout) {
            timeout = setTimeout(function () {
                // 改变执行上下文环境
                func.apply(context, _arguments);
            }, wait);
        }
    };
}

function getScrollTop(target) {
    if (target === document) {
        return window.pageYOffset || //用于FF
        document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    return target.scrollTop;
}

function getScrollHeight(elem) {
    if (elem === document) {
        return document.documentElement.scrollHeight || document.body.scrollHeight;
    }

    return elem.scrollHeight;
}

function getWindowHeight(elem) {
    if (elem === document) {
        return document.documentElement.clientHeight;
    }

    return elem.offsetHeight;
}

function getOffsetLeft(elem) {
    return elem.offsetParent ? elem.offsetLeft + getOffsetLeft(elem.offsetParent) : elem.offsetLeft;
}

function getOffsetTop(elem, container) {
    return elem.offsetParent && elem.offsetParent !== container ? elem.offsetTop + getOffsetTop(elem.offsetParent, container) : elem.offsetTop;
}

/* harmony default export */ __webpack_exports__["default"] = (visibleObserver);

/***/ })
/******/ ]);

/***/ })
/******/ ]);