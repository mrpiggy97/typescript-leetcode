"use strict";
class HNode {
    constructor(prev, val) {
        this.previous = prev;
        this.value = val;
    }
}
function solution(sequence) {
    let headNode = null;
    let numberSkipped = false;
    for (let i = 0; i < sequence.length; i++) {
        let currentNumber = sequence[i];
        if (i === 0) {
            headNode = new HNode(null, currentNumber);
        }
        else {
            if (headNode) {
                if (currentNumber > headNode.value) {
                    let newNode = new HNode(headNode, currentNumber);
                    headNode = newNode;
                }
                else {
                    if (numberSkipped) {
                        return false;
                    }
                    if (headNode.previous) {
                        if (currentNumber > headNode.previous.value) {
                            headNode = headNode.previous;
                            let newNode = new HNode(headNode, currentNumber);
                            headNode = newNode;
                            numberSkipped = true;
                        }
                        else {
                            numberSkipped = true;
                        }
                    }
                    else {
                        headNode = new HNode(null, currentNumber);
                        numberSkipped = true;
                    }
                }
            }
        }
    }
    return true;
}
