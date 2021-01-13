abstract class Food {
    abstract getName(): string;

    abstract getCaloryCount(): number;

    log() {
        console.log(`${this.getName()} Calories: ${this.getCaloryCount()}`);
    }
}

interface Printable {
    print();
}

interface StringPrintable {
    print(s: string);
}

interface Scannable {
    scan();
}

class Apple extends Food {
    getName() {
        return 'Apple';
    }

    getCaloryCount(): number {
        return 12;
    }
}

class Chocolate extends Food implements Printable, Scannable, StringPrintable {
    type: 'White' | 'Milk' | 'Bitter';

    getName() {
        return 'Chocolate';
    }
    getCaloryCount(): number {
        return 200;
    }

    log() {
        super.log();
        console.log(`type: ${this.type}`);
    }

    print(s?: string) {
        if (typeof(s) !== 'undefined') {
            console.log(s);
        }

        this.log();
    }

    scan() {

    }

}


let f: Food = new Chocolate();

let p: Printable = new Chocolate();

f.log();

function printAndReport(mashu: Printable) {
    mashu.print();
    console.log('Printing completed');
}

printAndReport(new Chocolate());

