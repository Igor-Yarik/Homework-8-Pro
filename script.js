
const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    let number;
    while (array.indexOf(item) != -1) {
        number = array.indexOf(item);
        array.splice(number, 1);
    }
}

removeElement(array, 5);
console.log(array);