
const union = ['о', 'ведь', 'как', 'или', 'без', 'над', 'под', 'при', 'про', 'но', 'да', 'ни', 'на', 'по', 'до', 'из', 'за', 'от', 'об', 'а', 'и', 'в', 'к', 'с', 'у', 'о']
const listElement = document.getElementById('result-block');
const button = document.querySelector('.check-button');
let ans = []

// Сортируем массив по длинне предлога, т.к. вместо удаления предлога "по" в конце, удалиться предлог "о"
union.sort(function(a, b) {
    return b.length - a.length
})

// Пушит все возможные вариации входной фразы в массив ans
function generatePermutations(phrase) {
    const words = phrase.split(' ');
    const n = words.length;

    function permute(prefix, remaining) {
        if (remaining.length === 0) {
            ans.push(unionEditor(prefix.join(' ')));
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const word = remaining.splice(i, 1)[0]; // Удаляем слово из оставшегося массива
                permute([...prefix, word], remaining); // Рекурсивно добавляем его в текущую перестановку
                remaining.splice(i, 0, word); // Возвращаем слово обратно в оставшийся массив
            }
        }
    }

    permute([], words);
}

// Генерирует всевозможные вариации входого массива слов
function generateMainVariations(phrase) {
    const words = phrase.split(' ');

    generatePermutations(phrase)
    function antiGradate(words) {

        if (words.length === 3) {
            return;
        }

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            words.splice(i, 1);
            antiGradate(words)
            generatePermutations(words.join(' '));
            words.splice(i, 0, word);
        }
    }
    antiGradate(words)
}

//Функция для добавления знака '+' перед союзами русского языка(массив union)
function unionEditor(phrase) {

    words = phrase.toLowerCase().split(" ")
    for (let i=0; i<words.length; i++) {
        for (let j=0; j<union.length; j++) {
            if (words[i] === union[j]) {
                words[i] = `+${union[j]}`
            }
        }
    }

    return Array.from(words).join(" ")
}

// Функция для вывода массива на страницу
function displayArray(array) {
    listElement.innerHTML = ''
    array.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    let inputField = document.getElementById('phrase-field').value.trim()
    let wordsInputField = inputField.split(' ')

    for (var i = 0; i < union.length; i++) {
        if (inputField.endsWith(union[i])) {
            var lastWordIndex = inputField.lastIndexOf(union[i]);
            var newPhrase = inputField.slice(0, lastWordIndex).trim();
            inputField = newPhrase;
        }
    }

    if (!inputField) {
        alert('Необходимо ввести фразу!')
    } else if (wordsInputField.length > 7) {
        alert('Фраза слишком длинная! Максимальное количество слов: 7')
    } else if (wordsInputField.length < 3) {
        alert('Фраза слишком короткая! Минимальное количество слов: 3')
    } else {
        generateMainVariations(inputField)

        displayArray(ans.sort(function(a, b) {
            return b.length - a.length;
        }));
        
        ans = [];
    }
})