/* 1. Melakukan Looping Menggunakan While */
var flag = 2;
var flag2 = 20;

console.log('LOOPING PERTAMA');
while (flag <= 20) {
    console.log(flag + ' - I love coding');
    flag += 2;
}

console.log('LOOPING KEDUA');
while (flag2 >= 2) {
    console.log(flag2 + ' - I will become fullstack developer');
    flag2 -= 2;
}

/* 2. Melakukan Looping Menggunakan For */
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var j = 20; j >= 1; j--) {
    console.log(j + ' - I will become fullstack developer');
}

/* 3. Angka Ganjil dan Genap */
var counter = 1;

while (counter <= 100) {
    console.log(counter);
    if (counter % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
    counter++;
}

/* Kelipatan */
var counter2 = 1;
var penambahan = 9; // untuk pertambahan counter
var kelipatan = 10; // untuk kelipatan

while (counter2 <= 100) {
    if (counter2 % kelipatan === 0) {
        console.log(counter2 + ' KELIPATAN ' + kelipatan);
    } else {
        console.log('');
    }
    counter2 += penambahan;
}