

//Merge sort algorithm
function mergeSort(array) {
    if (array.length <= 1) return array; //Base case: return if array is just a singular element or is empty.
    //Sort left and right halves of array separately.
    let arrayLeft = mergeSort(array.slice(0, Math.floor(array.length/2)));
    let arrayRight = mergeSort(array.slice(Math.floor(array.length/2), array.length));  
    //Merge the left and right lists
    return merge(arrayLeft, arrayRight)
}

//Merge two arrays
function merge(arrayLeft, arrayRight) {
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
let array4 = [];