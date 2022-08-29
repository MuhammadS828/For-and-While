let arr1 = ['JavaScript', 'C++', 'Phyton', 'C#', 'Java', 'Scracth', 'Go', 'PHP', 'SQL', 'Kotlin']; 
let accumulator = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length > 3) {
        accumulator.push(arr1[i])
    }
} console.log(accumulator);
