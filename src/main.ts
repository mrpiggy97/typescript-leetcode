import "./globals"
import fibonacci from "./generator/fibonnaci"

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

type Fna = () => Promise<any>

function timeLimit(fn : Fna, t : number){
    let timeOutPromise = new Promise((_,reject) => {
        setTimeout(() => reject("Time Limit Exceeded"),t)
    })
    Promise.race([
        fn(),
        timeOutPromise
    ]).then((res) => console.log(res)).catch((err) => console.log(err))
}

function example() : Promise<any>{
    return new Promise((resolve) => {
        setTimeout(() => resolve(23),1000) 
    })
}

timeLimit(example,5000)

function* myGenerator(): Generator<string, number, string> {
    let i = 0;
    while (true) {
      const value = yield `Value ${i}`;
      if (value === "motherfucker") {
        return i*50;
      }
      i++;
    }
  }

const iterator: Generator<string, number, string> = myGenerator();

console.log(iterator.next(),iterator.next(), iterator.return(5), iterator.next())

const myFibo : Generator<number,any,number> = fibonacci()

for(let i=0; i < 10; i++){
    console.log(myFibo.next())
}

let a : number[] = [1,2,3]
let b : number[] = [1,2,3,5]
let c : number[] = [1,2,3]
let r : number[][] = [a,b]
console.log(r.includes(c))