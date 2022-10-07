class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
        this.left = left
        this.right = right
        this.val = val
    }
}

class Tree{
    Root : TreeNode | null
    constructor(root : TreeNode | null){
        this.Root = root
    }
    public invertTree() : TreeNode | null{
        if(this.Root){
            let nodesToVisit : TreeNode[] = [this.Root]
            while(nodesToVisit.length > 0){
                let newNodesToVisit : TreeNode[] = []
                nodesToVisit.map((node) => {
                    if(node){
                        let rightNode = node.right
                        let leftNode = node.left
                        node.right = leftNode
                        node.left = rightNode
                        if(leftNode){
                            newNodesToVisit.push(leftNode)
                        }
                        if(rightNode){
                            newNodesToVisit.push(rightNode)
                        }
                    }
                })
                nodesToVisit = newNodesToVisit
            }
        }
        return this.Root
    }
}