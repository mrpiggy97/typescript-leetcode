type ReturnObj = {
    increment : () => number
    decrement : () => number
    reset : () => number
}

export default function counter(init : number) : ReturnObj{
    let initCopy : number = init
    let increment = () => {
        initCopy = initCopy+1
        return initCopy
    }
    let decrement = () => {
        initCopy = initCopy-1
        return initCopy
    }
    let reset = () => {
        initCopy = init
        return initCopy
    }
    return {
        increment : increment,
        decrement : decrement,
        reset : reset
    }
}