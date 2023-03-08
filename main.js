/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tooltip.js
class Tooltip {
  constructor() {
    this._tooltip = this._createTooltip();
  }
  _createTooltip() {
    //tooltip
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    //tooltipTitle
    const tooltipTitle = document.createElement("h3");
    tooltipTitle.classList.add("tooltip-title");
    tooltipTitle.textContent = "Tooltip title";

    //tooltipText
    const tooltipText = document.createElement("div");
    tooltipText.classList.add("tooltip-text");
    tooltipText.textContent = "And here iss some amazing content. It is very engaging. Right?";
    tooltip.prepend(tooltipTitle);
    tooltip.append(tooltipText);
    return tooltip;
  }
  addTooltip(element) {
    document.body.append(this._tooltip);
    const {
      left
    } = element.getBoundingClientRect();
    this._tooltip.style.bottom = this._tooltip.offsetHeight + element.offsetHeight + 10 + "px";
    this._tooltip.style.left = left + (element.offsetWidth - this._tooltip.offsetWidth) / 2 - 8 + "px";
  }
  removeTooltip() {
    const currentTooltip = document.querySelector(".tooltip");
    currentTooltip.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_button = document.querySelector(".btn");
const tooltip = new Tooltip();
app_button.addEventListener("click", () => {
  if (document.querySelector(".tooltip") === null) {
    tooltip.addTooltip(app_button);
  } else {
    tooltip.removeTooltip();
  }
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;