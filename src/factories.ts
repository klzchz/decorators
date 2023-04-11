const factory = (prefix:string) =>{
    return (target:any) =>{
        console.log(prefix,target);

    }
}

@factory('print')
class  Example {

}


export default{};