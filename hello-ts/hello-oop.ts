class Complex {
    private imgainary: number = 0;
    private real: number = 0;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imgainary = imaginary;
    }

    add(c2: Complex): Complex {
        var real = this.real + c2.real;
        var imaginary = this.imgainary + c2.imgainary;
        return new Complex(real, imaginary);
    }

    abs(): number {
        return Math.sqrt(this.real ** 2 + this.imgainary ** 2);
    }

    log() {
        console.log(`${this.real} + ${this.imgainary}i`);
    }

}


let c1 = new Complex(2, 3);
let c2 = new Complex(4, 5);

let c3 = c1.add(c2);

c3.log();

console.log(c3.abs());




