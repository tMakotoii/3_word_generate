ans = []

function generatePermutations(phrase) {
    const words = phrase.split(' ');
    const n = words.length;

    function permute(prefix, remaining) {
        if (remaining.length === 0) {
            // console.log(prefix.join(' '));
            ans.push(prefix.join(' '));
            // console.log(ans.length)
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const word = remaining.splice(i, 1)[0]; // Удаляем слово из оставшегося массива
                permute([...prefix, word], remaining); // Рекурсивно добавляем его в текущую перестановку
                remaining.splice(i, 0, word); // Возвращаем слово обратно в оставшийся массив
            }
        }
    }

    permute([], words);
    // console.log('final')
}

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

const phrase = "слово1 слово2 слово3 слово4 слово5 слово6";
generateMainVariations(phrase);
console.log(ans)