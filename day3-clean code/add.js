// const sum=(firstNo: number,secondNo:number)=>{
// return firstNo+secondNo;
// }
function sum(firstNo, secondNo) {
    return firstNo + secondNo;
}
//console.log(sum(10.67,20.98978977777777));
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.numbers = [];
    }
    Calculator.prototype.add = function () {
        var total = 0;
        this.numbers.forEach(function (number) {
            total = total + number;
        });
        return total;
    };
    Calculator.prototype.divide = function () {
    };
    Calculator.prototype.multiply = function () {
    };
    return Calculator;
}());
var calc = new Calculator();
calc.numbers = [4, 7];
console.log(calc.add());
