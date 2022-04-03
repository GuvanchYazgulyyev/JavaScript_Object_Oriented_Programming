// Demo : Numeric Range

var number = {
    min: 0,
    max: 100,
    checkNumericRange: function(value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return value >= this.min && value <= this.max;
        }
    }
}

console.log(number.checkNumericRange(25));
console.log(number.checkNumericRange(-50));

var num1 = { min: 10, max: 150 };
console.log(number.checkNumericRange.call(num1, 300));
console.log(number.checkNumericRange.apply(num1, [20]));
var checkNumber = number.checkNumericRange.bind(num1);
console.log(checkNumber(66));