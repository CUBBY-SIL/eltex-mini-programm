let symbolsString = 'ABDEFGHIJKLMNOQRTUVWYZabdefghijklmnoqrtuvwyz0123456789$+-_~';
let letterCodes = [];
let numberCodes = [];

let startUppercaseSymbols = 65;                             // Код первой буквы в таблице ASCII
let endUppercaseSymbols = 90;                               // Код последней буквы в таблице ASCII
let exceptions = [67, 80, 83, 88, 99, 112, 115, 120];       // Коды букв исключений

// Собираю в массив коды всех букв
for(let i = startUppercaseSymbols; i < endUppercaseSymbols + 1; i++){
    if(exceptions.find(item => String.fromCharCode(item) === String.fromCharCode(i))){
        continue;
    }
    letterCodes.push(i);
    letterCodes.push(i+32);
}
// Собираю в массив коды всех цифр
for(let i = 48; i < 58; i++){
    numberCodes.push(i);
}

let lengthString = prompt('Введите число:')
let generateString = '';
let counter = 0;

// Генерирую строку
while(counter < lengthString){
    generateString += symbolsString.charAt(Math.floor(Math.random() * symbolsString.length));
    counter++;
}

console.log(`Сгенерированная строка: ${generateString}`);

let firstSymbol = prompt('Введите первый символ для замены:');
let firstReplace = generateString.split('').map(letter => replaceSymbol(letter, firstSymbol, letterCodes)).join('');

let secondSymbol = prompt('Введите второй символ для замены:');
let secondReplace = firstReplace.split('').map(letter => replaceSymbol(letter, secondSymbol, numberCodes)).join('');

let counterFirstSymbols = counterDuplicate(secondReplace, firstSymbol);
let counterSecondSymbols = counterDuplicate(secondReplace, secondSymbol);

console.log(`Получившаяся строка: ${secondReplace}`);
console.log(`Количество повторений 1-го символа: ${counterFirstSymbols}`);
console.log(`Количество повторений 2-го символа: ${counterSecondSymbols}`);
console.log(`Количество символов, которые не были заменены: ${generateString.length - counterFirstSymbols - counterSecondSymbols}`);

function replaceSymbol(letter, symbol, exceptions){
    return exceptions.find(code => letter.charCodeAt(0) == code ) ? symbol : letter;
}

function counterDuplicate(string, symbol){
    if(!symbol.length){
        return string.length ? string.length - 1 : 0
    }
    return string.split(symbol).length - 1;
}