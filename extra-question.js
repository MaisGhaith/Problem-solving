//! Ex1: Write a function that takes a number as input and returns 
//! true if the number is less than or equal to zero, otherwise return false.
function inputs(num) {

    if (num <= 0) {
        return true;
    } else {
        return false;
    }

}

console.log(inputs(8))
console.log(inputs(0))


//! Ex2: Print the Next integer from the input number
//! (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

function nextNum(num) {
    return num + 1;
}
console.log(nextNum(5))



//!Ex3: Write a function that takes an array of strings and returns only the strings
//! with numbers in it as an array. And return an empty array, If there are no strings containing numbers. 

function stringsWithNumbers(arr) {
    const results = [];

    for (let str of arr) {
        if (/\d/.test(str)) {
            results.push(str);
        }
    }

    return results;
}


const arr = ['hello', 'world', '123', 'abc456'];
const result = stringsWithNumbers(arr);

console.log(result); // Output: ['123', 'abc456']


//! Ex4: Develop a JS Code to check if a number is even or odd using recursion 

function isEven(num) {
    if (num == 0) {
        return "even";
    } else if (num == 1) {
        return "odd";
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(9));
console.log(isEven(6));


//! Ex5: Write a function to swap all instances of string ch1 with string
//! ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

//? way 1 to solve Q5

function replaceCharacter(str, c1, c2) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != c1) {
            result += str[i];
        } else {
            result += c2
        }
    }
    return result
}

console.log(replaceCharacter("mqis", 'q', 'a'))




//? way 2 to solve Q5

function swapStrings(text, ch1, ch2) {
    // Use a regular expression with global flag to match all instances of the input strings
    const regex = new RegExp(ch1 + '|' + ch2, 'g');

    // Replace all instances of ch1 with ch2 and vice versa using a callback function
    const swappedText = text.replace(regex, (match) => {
        if (match === ch1) {
            return ch2;
        } else {
            return ch1;
        }
    });

    return swappedText;
}
console.log(swapStrings("mqis", "q", "a"))



//! Ex6: Return (print) all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”] using loops. 
//? way 1, if we want to print them in an array
let arrNames = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
let results = []
for (let i = 0; i < arrNames.length; i++) {
    results.push(arrNames[i] + "2") //! I add number 2 here to make sure that it's pushed a new array element
}
console.log(arrNames) // output -- ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"] 
console.log(results)  // output -- ['Rawan2', 'Jafar2', 'Muhammad2', 'Muhammad2', 'Esraa2', 'Dareen2']



//? way 2, if we want to print them without an array 
let arrName = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
for (let i = 0; i < arrName.length; i++) {
    (arrNames[i]) //! I add number 2 here to make sure that it's pushed a new array element
    console.log(arrName[i])
}
// output Rawan - Jafar - Muhammad - Muhammad - Esraa - Dareen

console.log("----------------------------------")


//! Ex7: Use forEach to  Return(print)  all the names in the previous array
let namesArr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];

namesArr.forEach(function (names) {
    console.log(names)
})


//! Ex8: Project an array of series into an array of {id, title} pairs using forEach()

function projectSeries() {
    let newSeries = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ]

    const result = [];
    newSeries.forEach((series) => {
        const { id, title } = series;
        result.push({ id, title })
    })
    return result

}
console.log(projectSeries())


//! Ex 9: Use map() now to implement the same previous functionality

function projectSeriesMap() {
    let newSeries = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ]

    let res = []
    newSeries.map((series) => {
        const { id, title } = series;
        res.push({ id, title })

    })
    return res

}
console.log(projectSeriesMap())


//! Ex 10: Use filter() to return the series with a rating under 5 

function projectSeriesFilter() {
    let newSeries = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ]

    let re = []
    newSeries.filter((series) => {
        const { rating, title } = series;
        if (rating < 5) {
            re.push(` the series with ratin less than 5 : ${title}`)
        }

    })
    return re

}
console.log(projectSeriesFilter())



//!Ex 11: Use reduce()  function to return the longest string in an array of strings.
//! ["Java", "JavaScript", "Python", "C++", "PHP"]

const array = ["Java", "JavaScript", "Python", "C++", "PHP"];

const longestString = array.reduce((a, b) => a.length > b.length ? a : b);

console.log(longestString); // Output: grapefruit


