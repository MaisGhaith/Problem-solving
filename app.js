/////////////////// Question 1 \\\\\\\\\\\\\\\\\\\\\

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
console.log(fibonacci(-1)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13


/////////////////// Question 2 \\\\\\\\\\\\\\\\\\\\\

// the sum of array elements
// way 1
function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1))
    }
}
console.log(sum([1, 3, 5]))

// // way 2
// function array_sum(my_array) {
//     if (my_array.length === 1) {
//         return my_array[0]
//     } else {
//         return my_array.pop() + array_sum(my_array)
//     }
// }
// console.log(array_sum([1, 2, 6]));



/////////////////// Question 3 \\\\\\\\\\\\\\\\\\\\\

//way 1
// function reverseString(str) {
//     let splitString = str.split('')
//     let reverseString = splitString.reverse();
//     let joinArray = reverseString.join("");

//     return joinArray;
// }
// console.log(reverseString("hello"));

// // way 2
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("siaM"));
