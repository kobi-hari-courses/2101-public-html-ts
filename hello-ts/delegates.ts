function sum(a: number, b: number): number {
    return a + b;
}

function runTwice(f1: () => void) {
    f1();
    f1();
}

function printHelloWorld() {
    console.log('Hello World');
}

runTwice(printHelloWorld);


let x = printHelloWorld;

// printHelloWorld();
x();

/* ---------------------------------------- */
function runOnAll(items: number[], action: (n: number) => void) {
    for (const item of items) {
        action(item);
    }
}

function sumAndLog(items: number[], projection: (n: number) => number) {
    let res = 0;
    for (const item of items) {
        res = res + projection(item);
    }

    console.log(res);
}

var numbers = [1, 1, 2, 3, 5, 8, 13, 21];
function printNumberSquared(i: number) {
    console.log(i ** 2);
}

function timesThree(n: number): number {
    return n * 3;
}

// runOnAll(numbers, printNumberSquared);

sumAndLog(numbers, n => n + 1);
