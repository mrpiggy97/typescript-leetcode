export default function isInstance(obj : any, obj2 : any) : boolean{
    if(obj === null || obj2 === null){
        return false
    }
    if(obj === undefined || obj2 === undefined){
        return false
    }
    if(typeof obj2 !== "function"){
        return false
    }
    return Object(obj) instanceof Object(obj2)
}