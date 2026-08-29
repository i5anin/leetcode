/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // Преобразуем строки с двоичными числами в BigInt
    const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    // Преобразуем результат обратно в строку двоичного числа
    return sum.toString(2);
};

console.log(addBinary(a = "11", b = "1"));

