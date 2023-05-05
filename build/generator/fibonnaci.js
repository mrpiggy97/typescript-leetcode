"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* fibonacci() {
    let prev = 0;
    let current = 1;
    yield 0;
    yield 1;
    while (true) {
        let newVal = prev + current;
        prev = current;
        current = newVal;
        yield current;
    }
    return current;
}
exports.default = fibonacci;
