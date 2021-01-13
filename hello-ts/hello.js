var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.log = function () {
        console.log("Person: Mr " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var p1 = new Person('John', 'Smith');
var p2 = new Person('Martha', 'Stewart');
p1.log();
p2.log();
