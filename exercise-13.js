function xo(str) {
    var totalX = 0;
    var totalY = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            totalX++;
        } else if (str[i] === 'o') {
            totalY++;
        } else {
            return 'bukan x atau o';
        }
    }
    if (totalX === totalY) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true