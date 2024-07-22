// const startTime = new Date().getTime();

// function removeWordsOneByOne(phrase) {
//     const words = phrase.split(" "); // Разбиваем фразу на слова
//     const result = []; // Массив для хранения промежуточных результатов

//     function generateCombo (combination) {
//         if (combination.length === 3) {
//             result.push(combination.join(" "));
//             return;
//         }

//         for (let i=0; i<combination.length; i++) {
//             const temp = [...combination];
//             temp.splice(i, 1);
//             generateCombo(temp);
//         }
        

//     }

//     generateCombo(words)
//     return result; // Возвращаем массив промежуточных результатов
// }


// const phrase = "слово1 слово2 слово3 слово4 слово5 слово6 слово7";
// ans = removeWordsOneByOne(phrase)
// console.log(ans);


// const endTime = new Date().getTime();

// const executionTime = endTime - startTime;
// console.log(`Время выполнения: ${executionTime} миллисекунд`);







// const listElement = document.getElementById('output');

// // Функция для вывода массива
// function displayArray(array) {
//     array.forEach(function(item) {
//         const listItem = document.createElement('li'); // Создаем новый элемент списка
//         listItem.textContent = item; // Устанавливаем текст элемента списка
//         listElement.appendChild(listItem); // Добавляем элемент списка в список на странице
//     });
// }

// // Вывод массива
// displayArray(new Set(ans.sort()));