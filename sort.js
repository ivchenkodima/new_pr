let unsortedArray = [597, 2e2, 0, 2084907, 5, 1.5, 18, 2, -44];

let whiskeySort = (tempArray, length = tempArray.length) => {
    let sortedArray = [];
    let array = tempArray.slice();

    for(let i = 0; i < length; i++) {
        sortedArray.push(+array.splice(array.indexOf(Math.min.apply(Math, array)), 1).join(""));
    }

    return sortedArray;
}

console.log(whiskeySort(unsortedArray)); // Array [ -44, 0, 1.5, 2, 5, 18, 200, 597, 2084907 ]