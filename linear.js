let array = [3,6,9,12,15,18,21,24,27,30]
let value = 12;

function li(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {

            return true;
        }
    }
    return false;
}
let data = li(array, value);


// =========== conditatoin trur or false =============
if (data == true) {
    console.log("element is exist in array");
}
else {
    console.log("element is not exist in array");
}


