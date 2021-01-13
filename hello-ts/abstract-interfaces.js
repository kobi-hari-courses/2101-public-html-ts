var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Food = /** @class */ (function () {
    function Food() {
    }
    Food.prototype.log = function () {
        console.log(this.getName() + " Calories: " + this.getCaloryCount());
    };
    return Food;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.getName = function () {
        return 'Apple';
    };
    Apple.prototype.getCaloryCount = function () {
        return 12;
    };
    return Apple;
}(Food));
var Chocolate = /** @class */ (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chocolate.prototype.getName = function () {
        return 'Chocolate';
    };
    Chocolate.prototype.getCaloryCount = function () {
        return 200;
    };
    Chocolate.prototype.log = function () {
        _super.prototype.log.call(this);
        console.log("type: " + this.type);
    };
    return Chocolate;
}(Food));
var f = new Chocolate();
f.log();
