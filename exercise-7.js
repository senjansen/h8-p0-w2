/* 1. Menyusun Barisan Bintang */
var rows1 = 5;

for (var i = 1; i <= rows1; i++) {
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
var flag = 1;

while (flag <= rows2) {
    let flag2 = 1;
    let asterisks = '';
    while (flag2 <= rows2) {
        asterisks = asterisks + '*';
        flag2++; 
    }
    console.log(asterisks);
    flag++;
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var flag3 = 0;

while (flag3 < rows3) {
  let asterisks = '';
  let counterSpasi = rows3 - flag3 - 1 ;
  while (counterSpasi > 0) {
    counterSpasi --;
  }
  let counterBintang = 0;
  while (counterBintang <= flag3) {
    asterisks += '*';
    counterBintang++;
  }
  console.log(asterisks);
  flag3++;
}