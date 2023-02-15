// А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:
let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123