"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./globals");
function createCounter(n) {
    let previousValue = {
        current: 0
    };
    return function () {
        let finalResult = n + previousValue.current;
        previousValue.current = previousValue.current + 1;
        return finalResult;
    };
}
function sleep(millis) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, millis);
        });
    });
}
function reduce(nums, fn, init) {
    let result = 0;
    for (let i = init; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}
function compose(funcs) {
    return function (x) {
        let start = x;
        for (let i = funcs.length - 1; i >= 0; i--) {
            start = funcs[i](start);
        }
        return start;
    };
}
if (1) {
    console.log("damn 0 is true");
}
