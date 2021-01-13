var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (n) {
        this.items.push(n);
    };
    List.prototype.remove = function (n) {
        this.items = this.items.filter(function (i) { return i != n; });
    };
    List.prototype.exists = function (n) {
        return this.items.indexOf(n) >= 0;
    };
    List.prototype.log = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    return List;
}());
var l1 = new List();
l1.add(5);
l1.add(10);
l1.add(20);
l1.log();
var l2 = new List();
l2.add('Hello');
l2.add('World');
l2.log();
