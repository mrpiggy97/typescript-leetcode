"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};
