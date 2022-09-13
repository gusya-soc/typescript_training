var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter = __decorate([
        classDecorator
    ], Greeter);
    return Greeter;
}());
console.log(new Greeter("world"));
function sealed(constructor) {
    console.log(constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter2 = /** @class */ (function () {
    function Greeter2(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter2 = __decorate([
        sealed
    ], Greeter2);
    return Greeter2;
}());
console.log(new Greeter2("world"));
// 方法装饰器的传参就是普通参数，返回修改方法的属性。
function functionDecorator(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = value;
        console.log(target, '\n', propertyKey, '\n', descriptor);
    };
}
var GoodMan = /** @class */ (function () {
    function GoodMan() {
    }
    GoodMan.prototype.sayHello = function () {
        return "hello";
    };
    __decorate([
        functionDecorator(false)
    ], GoodMan.prototype, "sayHello", null);
    return GoodMan;
}());
console.log(new GoodMan().sayHello());
