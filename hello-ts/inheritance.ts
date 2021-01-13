class Person {
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value: string) {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    constructor(
        protected firstName: string, 
        protected lastName: string, 
        protected birthDate: Date) {
    }

    log() {
        console.log(`Person: ${this.firstName} ${this.lastName}`);
    }
}

class Exmployee extends Person {
    
    constructor(
        firstName: string, 
        lastName: string, 
        birthDate: Date, 
        private employeeNumber: number
    ) {
        super(firstName, lastName, birthDate);
    }

    log() {
        super.log();
        console.log(this.employeeNumber);
    }
}


let e1 = new Exmployee('John', 'Smith', new Date(1980, 6, 12), 5012);
e1.log();

let p1: Person;

p1 = e1;

console.log(p1.fullName);

p1.fullName = 'Kobi Hari';
e1.log();

