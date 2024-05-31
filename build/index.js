/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const DEBUG_MODE = location.origin.indexOf('localhost') >= 0;
const Log = (...data) => {
  if (DEBUG_MODE == true) {
    console.log(data);
  }
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    rows,
    cols,
    colsArr,
    rowsArr
  } = attributes;
  /*useEffect(() => {
  	if (!rows) {
  		setAttributes({rows: 2})
  	}
  	if (!cols) {
  		setAttributes({cols: 2})
  	}
  		setAttributes({colsArr: Array.from({length: cols}, (_, index) => index)})
  	setAttributes({rowsArr: Array.from({length: rows}, (_, index) => index)})
  	}, [rows, cols, colsArr, rowsArr])*/

  if (!rows) {
    setAttributes({
      rows: 2
    });
  }
  if (!cols) {
    setAttributes({
      cols: 2
    });
  }
  if (!colsArr) setAttributes({
    colsArr: Array.from({
      length: cols
    }, (_, index) => "")
  });
  if (!rowsArr) setAttributes({
    rowsArr: Array.from({
      length: rows
    }, (_, index) => {
      text: "";
    })
  });
  const addRow = type => {
    Log("addRow", addRow, rowsArr);
    if (!rowsArr) setAttributes({
      colsArr: Array.from({
        length: rows
      }, (_, index) => {
        text: "simple text";
      })
    });
    const newRowsArr = [...rowsArr];
    let arr = [];
    if (colsArr) for (let i = 0; i < colsArr.length; i++) {
      if (type == "button") {
        arr.push({
          text: "click on me",
          type: type
        });
      } else {
        arr.push({
          text: "simple text",
          type: type
        });
      }
    }
    newRowsArr.push(arr);
    setAttributes({
      rowsArr: newRowsArr
    });
  };
  const addColumn = () => {
    Log("addColumn", addColumn, colsArr);
    if (!colsArr) setAttributes({
      colsArr: Array.from({
        length: cols
      }, (_, index) => "simple text")
    });
    const newColsArr = [...colsArr];
    newColsArr.push("simple text");
    setAttributes({
      colsArr: newColsArr
    });
    fixMatrix(newColsArr);
  };
  const fixMatrix = newColsArr => {
    if (!newColsArr || !rowsArr) {
      setAttributes({
        colsArr: [],
        rowsArr: []
      });
      return;
    }
    const newRowsArr = [...rowsArr];
    if (DEBUG_MODE) {
      debugger;
    }
    for (let i = 0; i < newRowsArr.length; i++) {
      for (let j = 0; j < newColsArr.length; j++) {
        if (!newRowsArr[i][j]) {
          if (!newRowsArr[i][0]) {
            newRowsArr[i][j] = {
              text: "simple text",
              type: "text"
            };
          } else {
            newRowsArr[i][j] = {
              text: "simple " + newRowsArr[i][0].type,
              type: newRowsArr[i][0].type
            };
          }
        }
        Log("i=" + i, "j=" + j, newRowsArr[i][j]);
      }
      Log("=======================i=");
      Log("i=" + i, newRowsArr[i]);
    }
    Log(newRowsArr);
    setAttributes({
      rowsArr: newRowsArr
    });
  };
  const removeRow = () => {
    Log("removeColumn", removeRow, rowsArr);
    if (!rowsArr) setAttributes({
      colsArr: Array.from({
        length: rows
      }, (_, index) => "")
    });
    const newRowsArr = [...rowsArr];
    newRowsArr.pop();
    setAttributes({
      rowsArr: newRowsArr
    });
  };
  const removeColumn = () => {
    Log("removeColumn", removeColumn, colsArr);
    if (!colsArr) setAttributes({
      colsArr: Array.from({
        length: cols
      }, (_, index) => "")
    });
    const newColsArr = [...colsArr];
    newColsArr.pop();
    setAttributes({
      colsArr: newColsArr
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "copyright-date-block")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646",
    onClick: () => addColumn()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: "\u062D\u0630\u0641 \u0633\u062A\u0648\u0646",
    onClick: () => removeColumn()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0631\u062F\u06CC\u0641",
    onClick: () => addRow("text")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: "\u062D\u0630\u0641 \u0631\u062F\u06CC\u0641",
    onClick: () => removeRow()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0627\u062A\u0646",
    onClick: () => addRow("button")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-responsive"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    class: "table table-primary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col"
  }, "\u0639\u0646\u0648\u0627\u0646"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col"
  }, "\u0622\u062F\u0631\u0633"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, rowsArr && rowsArr.map((row, rowIndex, arr) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, row.filter(f => f.type == "button").map((col, colIndex) => colIndex == 0 || colIndex >= colsArr.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    class: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    scope: "row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: rowsArr[rowIndex][colIndex].text,
    onChange: value => {
      rowsArr[rowIndex][colIndex].text = value;
      const newArr = [...rowsArr];
      setAttributes({
        newArr
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: rowsArr[rowIndex][colIndex].url,
    onChange: value => {
      rowsArr[rowIndex][colIndex].url = value;
      const newArr = [...rowsArr];
      setAttributes({
        newArr
      });
    }
  }))))))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "relative overflow-x-auto",
    dir: "rtl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    class: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
    class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, colsArr && colsArr.map((item, index, arr) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    class: "px-6 py-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    onChange: value => {
      colsArr[index] = value;
      setAttributes({
        colsArr
      });
    },
    value: colsArr[index],
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Write your paragraph...", "my-custom-block")
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, rowsArr && rowsArr.map((item, index, arr) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
  }, colsArr && colsArr.map((item, j, arr) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, j == 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "row",
    className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    onChange: value => {
      if (!rowsArr[index][j]) {
        rowsArr[index][j] = {};
      }
      rowsArr[index][j].text = value;
      setAttributes({
        rowsArr
      });
    },
    value: rowsArr[index][j].text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Write your paragraph...", "my-custom-block")
  })), j != 0 && rowsArr[index] && rowsArr[index][j] && rowsArr[index][j].type === "text" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "px-6 py-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    onChange: value => {
      if (!rowsArr[index][j]) {
        rowsArr[index][j] = {};
      }
      rowsArr[index][j].text = value;
      setAttributes({
        rowsArr
      });
    },
    value: rowsArr[index][j].text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Write your paragraph...", "my-custom-block")
  })), j != 0 && rowsArr[index] && rowsArr[index][j] && rowsArr[index][j].type === "button" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "px-6 py-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    href: "{rowsArr[index][j].url}"
  }, rowsArr[index][j].text))))))))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _build_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build-assets/index.css */ "./build-assets/index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    rowsArr,
    colsArr
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative overflow-x-auto",
    dir: "rtl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, colsArr && colsArr.map((col, colIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    key: colIndex,
    scope: "col",
    className: "px-6 py-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: col
  }))), " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, rowsArr && rowsArr.map((row, rowIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: rowIndex,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
  }, row.map((col, colIndex) => colIndex >= colsArr.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    key: colIndex,
    className: "px-6 py-4"
  }, !col.type || col.type == "text" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: col.text
  }), col.type && colIndex != 0 && col.type == "button" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "button button-primary"
  }, col.text), col.type && colIndex == 0 && col.type == "button" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: col.text
  })))))))));
}

/***/ }),

/***/ "./build-assets/index.css":
/*!********************************!*\
  !*** ./build-assets/index.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gomega-sell-block/gomega-sell-block","version":"0.1.0","title":"Gomega sell block ","category":"design","icon":"smiley","description":"Gomega sell block ","example":{},"supports":{"html":false},"attributes":{"rows":{"type":"number","default":2},"cols":{"type":"number","default":2},"colsArr":{"type":"array","default":[]},"rowsArr":{"type":"array","default":[{"name":"","url":"","type":""}]}},"textdomain":"gomega-sell-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":["file:../build-assets/index.css","file:./style-index.css"],"viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgomega_sell_block"] = globalThis["webpackChunkgomega_sell_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map