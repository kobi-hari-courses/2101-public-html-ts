class List<T> {
    private items: T[] = [];


    add(n: T) {
        this.items.push(n);
    }

    remove(n: T) {
        this.items = this.items.filter(i => i != n);
    }

    exists(n: T): boolean {
        return this.items.indexOf(n) >= 0;
    }

    log() {
        for (const i of this.items) {
            console.log(i);
        }
    }
}

function first<T>(items: T[]): T {
    return items[0];
}


let l1 = new List<number>();
l1.add(5);
l1.add(10);
l1.add(20);
l1.log();

let l2 = new List<string>();
l2.add('Hello');
l2.add('World');
l2.log();

let n2: number[] = [1, 2, 3, 4];
let firstNumber = first(n2);

