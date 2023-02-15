// function sum(a, b) {
//     return a + b;
// }
// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3
//
//
// let str = `Hello`;
// // получаем первый символ
// alert( str[0] ); // H
// alert( str.at(0) ); // H
//
// // получаем последний символ
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) );
//
// for (let char of "Hello") {
//     alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
// }
//
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
//
//
// let str = 'Widget with id';
// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
// alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as'; // let's look for it
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     alert(`Found at ${foundPos}`);
//     pos = foundPos + 1;  // continue the search from the next position
// }

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert(pos);
// }


alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

//  str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );
alert( str.slice(2) ); // ringify, с позиции 2 и до конца
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert( str.slice(-4, -1) ); // gif

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert( str.substr(-4, 2) );


// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

// let str = '';
// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// alert( str );
// // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ