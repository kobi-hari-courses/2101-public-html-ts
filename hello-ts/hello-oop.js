var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.imgainary = 0;
        this.real = 0;
        this.real = real;
        this.imgainary = imaginary;
    }
    Complex.prototype.add = function (c2) {
        var real = this.real + c2.real;
        var imaginary = this.imgainary + c2.imgainary;
        return new Complex(real, imaginary);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imgainary, 2));
    };
    Complex.prototype.log = function () {
        console.log(this.real + " + " + this.imgainary + "i");
    };
    return Complex;
}());
var c1 = new Complex(2, 3);
var c2 = new Complex(4, 5);
var c3 = c1.add(c2);
c3.log();
console.log(c3.abs());
