webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/nav.js":
/*!**********************************!*\
  !*** ./components/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\frontend\\landingpage\\ld-ethconnect\\components\\common\\nav.js";



var Nav = function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fix = _useState2[0],
      setFix = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $(document).ready(function () {
      console.log('ready');
      var scr = false;
      var ab = document.querySelector('#about').offsetTop - 60;
      var ico = document.querySelector("#ico").offsetTop - 60;
      var rm = document.querySelector("#rm").offsetTop - 60;
      var at = 0;
      window.addEventListener("scroll", function (e) {
        var w = window.pageYOffset;

        switch (true) {
          case w < ab && at != 0:
            at = 0;
            setActive(0);
            break;

          case w >= ab && w < ico && at != 1:
            at = 1;
            setActive(1);
            break;

          case w >= ico && w < rm && at != 2:
            at = 2;
            setActive(2);
            break;

          case w >= rm && at != 3:
            at = 3;
            setActive(3);
        }

        if (window.pageYOffset > 0) {
          if (!scr) {
            setFix(true);
            scr = true;
          }
        } else {
          if (scr) {
            setFix(false);
            scr = false;
          }
        }
      });
      $(document).on('click', 'a[href^="#"]', function (e) {
        // target element id
        var id = $(this).attr('href'); // target element

        var $id = $(id);

        if ($id.length === 0) {
          return;
        } // prevent standard hash navigation (avoid blinking in IE)


        e.preventDefault(); // top position relative to the document

        var pos = $id.offset().top; // animated top scrolling

        $('body, html').animate({
          scrollTop: pos
        });
      });
    });
    return function () {};
  }, [null]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center ".concat(fix ? 'bg-green-500 shadow fixed pin-t pin-l w-full z-20' : ''),
    style: {
      zIndex: 10,
      transition: "all .4s",
      height: fix ? "60px" : "91px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container mx-auto text-white px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/logo.png",
    alt: "",
    className: "".concat(fix ? 'w-48' : 'w-64'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 0 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#about",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 1 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "About US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#ico",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 2 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Ecosystem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#rm",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 3 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Roadmap"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://gfttoken.com/login",
    className: "font-bold h-12 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://gfttoken.com/register",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 3 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Register"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center lg:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "w-8 h-8 inline-block",
    onClick: function onClick() {
      return setShow(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "w-8 h-8",
    viewBox: "0 0 448 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "fixed top-0 left-0 w-full h-full z-50 px-8 py-24 lg:hidden ".concat(show ? '' : 'hidden'),
    style: {
      backgroundColor: 'rgba(0,0,0,.9)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "absolute top-0 right-0 -mt-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "inline-block w-12 h-12",
    onClick: function onClick() {
      return setShow(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 352 512",
    className: "w-12 h-12 text-red-500 fill-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return setShow(false);
    },
    href: "#",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 0 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return setShow(false);
    },
    href: "#about",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 1 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "About US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return setShow(false);
    },
    href: "#ico",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 2 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Ecosystem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return setShow(false);
    },
    href: "#rm",
    className: "font-bold h-12 px-4 flex items-center ".concat(active === 3 ? 'bg-gray-700' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Roadmap"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://gfttoken.com/login",
    className: "font-bold h-12 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://gfttoken.com/register",
    className: "font-bold h-12 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Register"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.c29adb8b5b1b89228fbc.hot-update.js.map