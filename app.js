// /////////////////// Question 1 \\\\\\\\\\\\\\\\\\\\\

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 2) + fibonacci(n - 1);
//     }
// }
// console.log(fibonacci(-1)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13


// /////////////////// Question 2 \\\\\\\\\\\\\\\\\\\\\

// // the sum of array elements
// // way 1
// function sum(array) {
//     if (array.length === 0) {
//         return 0;
//     } else {
//         return array[0] + sum(array.slice(1))
//     }
// }
// console.log(sum([1, 3, 5]))

// // // way 2
// // function array_sum(my_array) {
// //     if (my_array.length === 1) {
// //         return my_array[0]
// //     } else {
// //         return my_array.pop() + array_sum(my_array)
// //     }
// // }
// // console.log(array_sum([1, 2, 6]));



// /////////////////// Question 3 \\\\\\\\\\\\\\\\\\\\\

// //way 1
// // function reverseString(str) {
// //     let splitString = str.split('')
// //     let reverseString = splitString.reverse();
// //     let joinArray = reverseString.join("");

// //     return joinArray;
// // }
// // console.log(reverseString("hello"));

// // // way 2
// function reverseString(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("siaM"));




// let text = "The best things in life are free";
// let pattern = /es/;  // will check if 'e' is exist    true
// // let pattern = /^e/; // will check if 'e' is not exist    flase because ^ meant not
// // let pattern = /m/;  // will check if 'm' is exist   false
// // let pattern = /best/;   // will check if 'best' is exist    ture
// // let pattern = /Best/;   // will check if 'Best' with B is exist, but it's not, because the RegEx is a sensitive case   false
// // let pattern = /BESt/i;  // will check if 'Best' with B is exist, it's not, but we use 'i' to make it insenstive case   true

// let result = pattern.test(text); // syntax to use 'test' method of the pattern in text

// console.log(result)














// let num1 = prompt("enter 1st number")
// let num2 = prompt("enter 2nd number")

// let multi = num1 * num2;
// let divide = num1 / num2


//////////////////////////////////////////////////////////

// the function names is the value of input button in html

// function multi() {
//     num1 = document.getElementById("num1").value;
//     num2 = document.getElementById("num2").value;

//     document.getElementById("math").innerHTML = num1 * num2;
// }


// function divide() {
//     num1 = document.getElementById("num1").value;
//     num2 = document.getElementById("num2").value;

//     document.getElementById("math").innerHTML = num1 / num2;
// }




// function absoluteNum(num) {
//     if (num <= 13) {
//         return 13 - num
//     } else {
//         return (num - 13) * 2
//     }
// }
// console.log(absoluteNum(5))


// // function newNum(num) {
// //     if (num <= 13) {
// //         return Math.abs(num - 13) * 2
// //     }
// // }
// // console.log(newNum(5))




// function newNum(num) {
//     if (num <= 13) {
//         return Math.abs(num - 13)
//     } else {
//         return (num - 13) * 2
//     }
// }
// console.log(newNum(15))





// Data structure 
////////////// question 2 \\\\\\\\\\\\\\
// Given a queue of integers, reverse the order of the elements in the queue.

function reverseQueue(queue) {
    const stack = [];
    while (queue.length > 0) {
        stack.push(queue.shift());
    }
    while (stack.length > 0) {
        queue.push(stack.pop());
    }
    return queue;
}


const queue = [1, 2, 3, 4, 5];
reverseQueue(queue);
console.log(queue); // [5, 4, 3, 2, 1]


////////////// question 3 \\\\\\\\\\\\\\
// Implement a Queue using 2 stacks s1 and s2.

class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(val) {
        this.s1.push(val);
    }

    dequeue() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        if (this.s2.length === 0) {
            return null; // or throw an error
        }
        return this.s2.pop();
    }
}


const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // null



// linked list
///////////// Q1 \\\\\\\\\\\\\\
// Create a function that takes a LinkedList and deletes the middle node in it and returns it
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(data) {
        const new_node = new Node(data);
        if (!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.length++;
    }


    deleteMiddleNode() {
        if (this.length < 2) {
            return this.head;
        }
        const middle = Math.floor(this.length / 2);
        let prevNode = null;
        let currNode = this.head;
        for (let i = 0; i < middle; i++) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = currNode.next;
        this.length--;
        return this.head;
    }


}


const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);


// Before deleting middle node
console.log(linkedList);

linkedList.deleteMiddleNode();

// After deleting middle node
console.log(linkedList);







//////////////// Q2 \\\\\\\\\\\\\\\\\
// Create a function that takes a LinkedList and reverses it
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }



    reverse(node1) {
        var prev = null;
        var current = node1;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node1 = prev;
        return node1;
    }
}
let node1 = new LinkedList(1);
let node2 = new LinkedList(2);
let node3 = new LinkedList(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list);

console.log(list.reverse(node1));
