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
let counterFirstSymbols = 0;

let firstReplace = '';
generateString.split('').forEach(letter => {
    if( letterCodes.find(code => letter.charCodeAt(0) == code )){
        firstReplace += `${firstSymbol}`;
        counterFirstSymbols++;
    }
    else{
        firstReplace += letter;
    }
})

let secondSymbol = prompt('Введите второй символ для замены:');
let counterSecondSymbols = 0;

let secondReplace = '';
firstReplace.split('').forEach(letter => {
    if( numberCodes.find(code => letter.charCodeAt(0) == code )){
        secondReplace += `${secondSymbol}`;
        counterSecondSymbols++;
    }
    else{
        secondReplace += letter;
    }
})

console.log(`Получившаяся строка: ${secondReplace}`);
console.log(`Количество повторений 1-го символа: ${counterFirstSymbols}`);
console.log(`Количество повторений 2-го символа: ${counterSecondSymbols}`);
console.log(`Количество символов, которые не были заменены: ${generateString.length - counterFirstSymbols - counterSecondSymbols}`);