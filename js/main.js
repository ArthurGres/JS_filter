
let text = 'Сегодня целый день, ромашка, звучат, пион тревоги ромашка';

console.log(text);
console.log(badWordFilter(text));



function badWordFilter (badWord) {
    if (badWord.includes('ромашка')){
        while (text.includes('ромашка')) {
            text = text.replace('ромашка', '*******');
        }
    }
    
    return text;
}