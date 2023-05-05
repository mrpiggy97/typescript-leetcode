export default function* fibonacci() : Generator<number,any,number>{
    let prev : number = 0
    let current : number = 1
    yield 0
    yield 1
    while(true){
        let newVal : number = prev+current
        prev = current
        current = newVal
        yield current
    }
    return current
}