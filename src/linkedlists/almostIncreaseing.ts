class HNode {
    previous : HNode | null;
    value : number;
    constructor(prev : HNode | null, val : number){
        this.previous = prev;
        this.value = val;
    }
}

function solution(sequence : number[]) : boolean{
    let headNode : HNode | null = null;
    let numberSkipped : boolean = false;
    for(let i=0; i < sequence.length; i++){
        let currentNumber : number = sequence[i];
        if(i === 0){
            headNode = new HNode(null, currentNumber);
        }else{
            if(headNode){
                if(currentNumber > headNode.value){
                    let newNode : HNode = new HNode(headNode,currentNumber);
                    headNode = newNode;
                }else{
                    if(numberSkipped){
                        return false;
                    }
                    if(headNode.previous){
                        if(currentNumber > headNode.previous.value){
                            headNode = headNode.previous;
                            let newNode : HNode = new HNode(headNode,currentNumber);
                            headNode = newNode;
                            numberSkipped = true;
                        }else{
                            numberSkipped = true;
                        }
                    }else{
                        headNode = new HNode(null,currentNumber);
                        numberSkipped = true;
                    }
                }
            }
        }
    }
    return true;
}