let arr1 = [-1, -2, -3, 4, 5, 6, 7, 8, 9, 10] 
let result = 0;
let i = 0;
while (i < arr1.length) {
    if (arr1[i] > 0) {
      result = result + arr1[i]
    }
    i++;
} console.log (result);
