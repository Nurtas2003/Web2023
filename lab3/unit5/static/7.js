//проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

// из такой строки выделять числовое значение и возвращать его.
// alert( extractCurrencyValue('$120') === 120 );
function extractCurrencyValue(str) {
    return +str.slice(1);
}