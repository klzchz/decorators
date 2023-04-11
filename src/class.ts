const setApiVersion =(setApiVersion:string)=>{
    return (constructor:any)=>{
        return class extends constructor {
            version = setApiVersion;
        }
    }
}


const factory = (prefix:string) =>{
    return (target:any) =>{
        console.log(prefix,target);

    }
}


// @setApiVersion('v1.0.1')
// @factory('Webhook Version 01')
// class API {}


@factory('Webhook Version 01')
@setApiVersion('v1.0.2')
class Webhook {}

console.log(new Webhook);

export default {};