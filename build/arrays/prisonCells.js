"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNextDay(cells) {
    let newCells = [];
    for (let i = 0; i < cells.length; i++) {
        if (i === 0) {
            newCells.push(0);
        }
        if (i === cells.length - 1) {
            newCells.push(0);
        }
        if (i !== 0 && i !== cells.length - 1) {
            let prev = cells[i - 1];
            let next = cells[i + 1];
            if (prev === next) {
                newCells.push(1);
            }
            else {
                newCells.push(0);
            }
        }
    }
    return newCells;
}
function getArrayFromString(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let subString = str[i];
        if (subString === "1") {
            arr.push(1);
        }
        if (subString === "0") {
            arr.push(0);
        }
    }
    return arr;
}
function prisoCells(cells, days) {
    let cellsClone = [];
    Object.assign(cellsClone, cells);
    let checker = new Map();
    // find cycle in the first 100 changes
    for (let i = 0; i < days; i++) {
        cellsClone = getNextDay(cellsClone);
        let exists = checker.has(cellsClone.toString());
        if (!exists && i < 100) {
            checker.set(cellsClone.toString(), i);
        }
        if (exists) {
            let selected = [];
            let remainder = days % i;
            if (remainder === 0) {
                remainder = i - 1;
            }
            else {
                remainder = remainder - 1;
            }
            checker.forEach((value, key) => {
                // value in this case represents index and key
                // a string of number[]
                if (value === remainder) {
                    selected = getArrayFromString(key);
                    return;
                }
            });
            return selected;
        }
    }
    return cellsClone;
}
exports.default = prisoCells;
