const listElement = document.getElementById('result-block');
const button = document.querySelector('.check-button');

// Функция для нахождения всевозможных вариантов фраз, состоящей из заданных в ней слов
function firstStagePermutations (sentences) {

    const words = sentences.split(" ")
    var results = [];

    function permute(arr, memo) {
        var cur;
        var memo = memo || [];

        for (var i = 0; i < arr.length; i++) {

            cur = arr.splice(i, 1);

            if (arr.length === 0) {
            results.push(memo.concat(cur));
            }

            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }
        return results;
    }
    return permute(words);
}

// Функция для генерации всевозможных вариантов фраз состоящих из 3 слов из заданной фразы
function generateThreeWordVariations(words) {

    const variations = [];

    function createVariation(index, variation) {
        if (variation.length === 3) {
            variations.push(unionEditor(variation.join(" ")));
            return;
        }

        if (index >= words.length) {
            return;
        }

        // Создаем новую вариацию, добавляя текущее слово
        createVariation(index + 1, [...variation, words[index]]);

        // Создаем новую вариацию, пропуская текущее слово
        createVariation(index + 1, variation);
    }

    createVariation(0, []);
    return variations;
}

//Функция для добавления знака '+' перед союзами русского языка(массив union)
function unionEditor(phrase) {
    const union = ['а', 'но', 'и', 'да', 'ни', 'как', 'или', 'ведь', 'в', 'к', 'с', 'у', 'о', 'на', 'по', 'до', 'из', 'за', 'без', 'над', 'под', 'при', 'про', 'от', 'об']

    words = phrase.toLowerCase().split(" ")
    console.log(words)
    for (let i=0; i<words.length; i++) {
        for (let j=0; j<union.length; j++) {
            if (words[i] === union[j]) {
                console.log(union[j])
                words[i] = `+${union[j]}`
                console.log(union[j])
            }
        }
        console.log(union.includes(words[i]));
    }

    result = new Set(words)
    return Array.from(result).join(" ")
}

// Функция для вывода массива на страницу
function displayArray(array) {
    listElement.innerHTML = ''
    array.forEach(function(item) {
        const listItem = document.createElement('li'); // Создаем новый элемент списка
        listItem.textContent = item; // Устанавливаем текст элемента списка
        listElement.appendChild(listItem); // Добавляем элемент списка в список на странице
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();

    let inputField = document.getElementById('phrase-field')
    const answer = firstStagePermutations(inputField.value)
    let finallyAns = []

    for (let i=0; i<answer.length; i++) {
        finallyAns.push(generateThreeWordVariations(answer[i]))
    }

    displayArray(new Set(finallyAns.flat().sort()));
    console.log(new Set(finallyAns.flat().sort()))
})