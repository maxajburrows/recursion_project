

//Merge sort algorithm
function mergeSort(array) {
    if (array.length <= 1) return array; //Base case: return if array is just a singular element or is empty.
    let arrayLeft;
    let arrayRight;
    //Sort left and right halves of array separately.
    if (array.length%2 === 0) {
        arrayLeft = mergeSort(array.slice(0, array.length/2));
        arrayRight = mergeSort(array.slice(array.length/2, array.length));
    } else {
        arrayLeft = mergeSort(array.slice(0, Math.round(array.length/2)));
        arrayRight = mergeSort(array.slice(Math.round(array.length/2), array.length));
    } 
    let arrayMerged = [];
    while (arrayLeft.length > 0 && arrayRight.length > 0) {
        if (arrayLeft[0] <= arrayRight[0]) {
            arrayMerged.push(arrayLeft.shift());
        } else {
            arrayMerged.push(arrayRight.shift());
        }
    }
    if (arrayLeft.length > 0) {
        arrayMerged = [...arrayMerged, ...arrayLeft];
    } else { 
        arrayMerged = [...arrayMerged, ...arrayRight];
    }
    return arrayMerged
}

//Arrays for testing the merge sort function
let array1 = [8, 7, 10, 4, 3, 2, 17, 6];
let array2 = [87, 94, 12, 8, 7, 10, 4, 3, 2, 17, 6];
let array3 = [4];