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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.log = function () {
        console.log("Person: " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var Exmployee = /** @class */ (function (_super) {
    __extends(Exmployee, _super);
    function Exmployee(firstName, lastName, birthDate, employeeNumber) {
        var _this = _super.call(this, firstName, lastName, birthDate) || this;
        _this.employeeNumber = employeeNumber;
        return _this;
    }
    Exmployee.prototype.log = function () {
        _super.prototype.log.call(this);
        console.log(this.employeeNumber);
    };
    return Exmployee;
}(Person));
var e1 = new Exmployee('John', 'Smith', new Date(1980, 6, 12), 5012);
e1.log();
var p1;
p1 = e1;
console.log(p1.fullName);
p1.fullName = 'Kobi Hari';
e1.log();
