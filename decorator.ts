function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));

function sealed(constructor: Function) {
    console.log(constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
console.log(new Greeter2("world"));

// 方法装饰器的传参就是普通参数，返回修改方法的属性。
function functionDecorator(value:boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
        console.log(target,'\n',propertyKey,'\n',descriptor);
    }
}

class GoodMan{

    @functionDecorator(false)
    sayHello(){
        return "hello";
}
}
console.log(new GoodMan().sayHello());