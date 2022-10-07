"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}
class Tree {
    constructor(root) {
        this.Root = root;
    }
    invertTree() {
        if (this.Root) {
            let nodesToVisit = [this.Root];
            while (nodesToVisit.length > 0) {
                let newNodesToVisit = [];
                nodesToVisit.map((node) => {
                    if (node) {
                        let rightNode = node.right;
                        let leftNode = node.left;
                        node.right = leftNode;
                        node.left = rightNode;
                        if (leftNode) {
                            newNodesToVisit.push(leftNode);
                        }
                        if (rightNode) {
                            newNodesToVisit.push(rightNode);
                        }
                    }
                });
                nodesToVisit = newNodesToVisit;
            }
        }
        return this.Root;
    }
}
