let arr1 = ['мансур', 'альви', 'изнаур', 'руслан', 'умар', 'ахьмад', 'мохьмад', 'анвар', 'ислам', 'асмус']; 
let accumulator = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] === 'a') {
        accumulator.push(arr1[i])
    }
} console.log(accumulator)