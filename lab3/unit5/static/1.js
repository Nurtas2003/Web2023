let num = 1.23456;
alert( num.toFixed(2) ); // 1.23  утирден кейін 2 сан


let str = "Hello";
alert( str.toUpperCase() ); // HELLO

alert( 0.1.toFixed(20) ); // 0.10000000000000000555

alert( 0.1 + 0.2 ); // 0.30000000000000004
alert( 0.1 + 0.2 == 0.3 ); // false

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024