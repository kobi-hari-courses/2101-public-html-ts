var Book = /** @class */ (function () {
    function Book(numberOfPages) {
        this.numberOfPages = numberOfPages;
    }
    Book.prototype.log = function () {
        console.log('Document: ');
        console.log(this.numberOfPages);
    };
    return Book;
}());
function runTwoTimes(f1) {
    f1();
    f1();
}
var b1 = new Book(20);
runTwoTimes(function () { return b1.log(); });
// function firstOrDefault<T>(items: T[], condition: (n: T) => boolean): T | null {
//     for (const item of items) {
//         if (condition(item)) return item;
//     }
//     return null;
// }
// function select<T, K>(items: T[], projection: (item: T) => K): K[] {
//     let res: K[] = [];
//     for (const item of items) {
//         res.push(projection(item));
//     }
//     return res;
// }
// function where<T>(items: T[], condition: (item: T) => boolean): T[] {
//     let res: T[] = [];
//     for (const item of items) {
//         if (condition(item)) {
//             res.push(item)
//         }
//     }
//     return res;
// }
// let nums: number[] = [1, 4, 6, 8, 12, 15, 23];
// let largerThan10 = firstOrDefault(nums, n => n > 10);
// console.log(largerThan10);
// // let nameOfNums = select(nums, n => n.toString());
// let namesOfNums = nums.map(i => i.toString());
// // let evenNumbers = where(nums, n => n % 2 === 0);
// let evenNumbers = nums.filter(n => n % 2 === 0);
// largerThan10 = nums.find(n => n > 10);
// let myFunc: (i: number, j: number) => boolean;
// myFunc = (k1, k2) => k1 > k2;
