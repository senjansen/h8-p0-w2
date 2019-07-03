function konversiMenit(menit) {
    var keMenit = Math.floor(menit / 60);
    var keDetik = menit % 60;
    if (keDetik >= 0 && keDetik <= 9) {
        keDetik = '0' + keDetik;
    }
    return keMenit + ':' + keDetik; 
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00