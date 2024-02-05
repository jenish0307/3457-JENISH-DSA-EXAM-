
// ==================== insert =========================

// let array = [3,6,9,12,15,18,21,24,27,30];
// let position = 6;
// let element = 6;

// for (let j = array.length; j >= position; j--) {
//     array[j] = array[j - 1];
// }
// array[position - 1] = element;

// console.log(array);





// =========================== delete ==============================



let array = [3,6,9,12,15,18,21,24,27,30];
let index = 3;

for (let i = index; i < array.length-1; i++) {
    array[i] = array[i + 1];
}
array.length = array.length - 1;
console.log(array);

