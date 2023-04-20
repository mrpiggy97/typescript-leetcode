import "./globals"

function createCounter(n : number) : ()=> number{
    let previousValue = {
        current : 0
    }
    return function() : number{
        let finalResult : number = n+previousValue.current
        previousValue.current = previousValue.current+1
        return finalResult
    }
}

async function sleep(millis : number) : Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, millis)
    })
}

type Fn = (accum : number, curr : number) => number

function reduce(nums : number[], fn : Fn, init : number) : number{
    let result : number = 0
    for(let i=init; i < nums.length; i++){
        result = fn(result, nums[i])
    }
    return result
}

type F = (x : number) => number

function compose(funcs : F[]) : F{
    return function(x : number) : number{
        let start : number = x
        for(let i=funcs.length-1; i >= 0; i--){
            start = funcs[i](start)
        }
        return start
    }
}

function filter(nums : number[], fn : (num : number, index : number) => any) : number[]{
    let filteredNums : number[] = []
    nums.forEach((num, index) => {
        let result : any = fn(num,index)
        if(result){
            filteredNums.push(num)
        }
    })
    return filteredNums
}

function map(arr : number[], fn : (num : number, index : number) => number) : number[]{
    let newArray : number[] = []
    arr.forEach((val, index) => {
        newArray.push(fn(val,index))
    })
    return newArray
}