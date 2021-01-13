class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    } 

    log() {
        console.log(`Person: Mr ${this.firstName} ${this.lastName}`);
    }
}

let p1 = new Person('John', 'Smith');
let p2 = new Person('Martha', 'Stewart');

p1.log();
p2.log();
