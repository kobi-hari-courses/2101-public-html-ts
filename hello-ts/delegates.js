function sum(a, b) {
    return a + b;
}
function runTwice(f1) {
    f1();
    f1();
}
function printHelloWorld() {
    console.log('Hello World');
}
runTwice(printHelloWorld);
var x = printHelloWorld;
// printHelloWorld();
x();
/* ---------------------------------------- */
function runOnAll(items, action) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        action(item);
    }
}
function sumAndLog(items, projection) {
    var res = 0;
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        res = res + projection(item);
    }
    console.log(res);
}
var numbers = [1, 1, 2, 3, 5, 8, 13, 21];
function printNumberSquared(i) {
    console.log(Math.pow(i, 2));
}
function timesThree(n) {
    return n * 3;
}
// runOnAll(numbers, printNumberSquared);
sumAndLog(numbers, function (n) { return n + 1; });
