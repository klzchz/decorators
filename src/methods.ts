const Get = (url:string)=>{
    return (target:any,key:string, descriptor:PropertyDescriptor) => {
        console.log(descriptor.value);

        const originalMethod = descriptor.value;
        const currentUrl = '/test';
        if(url === currentUrl){
            originalMethod.apply();
        }
        return ;

    }

}

class HomeController { 
    @Get('/')
    public index() {
        console.log('HomeController@index');
    }
}

(new HomeController)

export default{};