
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var exm = array[0];
    var left = []; 
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if(array[i]<exm){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
    }
    result = quickSort(left) 
    result = result.concat(exm)  
    result = result.concat(quickSort(right)) 
    
    return result;
    
};

var unsortedArray = [9,12,18,3,24,6,21,15,27,30];
console.log(quickSort(unsortedArray)); 
