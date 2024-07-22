// function unionEditor(phrase) {
//     const union = ['а', 'но', 'и', 'да', 'ни', 'как', 'или', 'ведь', 'в', 'к', 'с', 'у', 'о', 'на', 'по', 'до', 'из', 'за', 'без', 'над', 'под', 'при', 'про', 'от', 'об']

//     words = phrase.toLowerCase().split(" ")
//     console.log(words)
//     for (let i=0; i<words.length; i++) {
//         for (let j=0; j<union.length; j++) {
//             if (words[i] === union[j]) {
//                 console.log(union[j])
//                 words[i] = `+${union[j]}`
//                 console.log(union[j])
//             }
//         }
//         console.log(union.includes(words[i]));
//     }

//     result = new Set(words)
//     return Array.from(result).join(" ")
// }

// console.log(unionEditor('Я люблю энерАгетики под мАшиной под или'))