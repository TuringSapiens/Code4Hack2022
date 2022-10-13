// Task 1
// Remove duplicates of the array and return an array of only unique elements.

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let dup = [...new Set(array)];
console.log(dup);


// Task 2
/* Find the intersection of two arrays. (An intersection would be the common elements that exist within both arrays).
The elements should be unique! */

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
let intersection = firstArray.filter(value=>secondArray.includes(value));
console.log(intersection);


// Task 3
// Remove empty values from the array.

const array1 = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];
let filtered = array1.filter((el)=>{
    return el !== null && typeof el !== 'undefined' && el !== '';
});
console.log(filtered);


// Task 4
//Write a JavaScript program to display whether the player is retired (i.e. display player name, nationality, and playing status) of the following players.

const cricket = [
    {
        name: 'Sachin Tendulkar',
        nationality: 'India',
        retired: true
    },
    {
        name: 'Shane Warne',
        nationality: 'Australia',
        retired: true
    },
    {
        name: 'Virat Kohli',
        nationality: 'India',
        retired: false
    }
];

// let cricket1 = [];
// cricket1 = cricket.filter(c=>c.retired===true);
// console.log(cricket1);

console.log(cricket.filter(c=>c.retired===true));


// Task 5
/* Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array:
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */

let ele = function(array,n){
    if(array==null)
    {
        return 0;
    }
    if(n==null)
    {
        return array[0];
    }
    if(n<0)
    {
        return [];
    }
    return array.slice(0,n);
}
console.log(ele([7,9,0,-2]));
console.log(ele([],3));
console.log(ele([7, 9, 0, -2],3));
console.log(ele([7, 9, 0, -2],6));
console.log(ele([7, 9, 0, -2],-3));


// Task 6
// To find whether the element is present in the array or not.

// Using indexOf() method.
let pele = ["Aryann",20,"!","Lakshya","~","Karma",10,"Affan","@"];
console.log(pele.indexOf("aryann"));
console.log(pele.indexOf("Aryann"));

// Using includes() method.
console.log(pele.includes("!"));
console.log(pele.includes("affan"));


// Task 7
// Remove the last element of an array (without using slice).
const a1 = [1, 2, 3];
console.log(a1.pop());


// Task 8
// Check If at Least one Array Element is greater than 5.

let arr = [1,2,9,10,5,76,199,36,0,4,16,2];
let arr5 = (arr,num)=>{
    return arr.map(v => v > num ? v : "").filter(Boolean);
}
console.log(arr5(arr,5));

/* Iterate the array using the map method and at every iteration, we check if the current value is greater than num or not?
If true, then we return the value as it. If false, then replace the item with an empty string (Or any falsy value).
After that using the filter method remove the falsy values. */


// Task 9
//Copy the object obj1 and create a new object obj2 and add a new property completed: false, without changing the original object.
const obj1 = {
    'testable': true,
    'removable': false,
    'printable': false,
    'changeable': true
};

let obj2 = obj1;
console.log(obj2);
obj2.completed = false;
console.log(obj2);


// Task 10
// Write a function to remove nth element of an array.

const array2 = [10, 20, 30, 40, 50, 60, 70];
let remove = (array2,n)=>{
    for(let i=n-1;i<array2.length;i+=n)
    {
        array2.splice(i,1);
    };
};
remove(array2,2);
console.log(array2);


// Task 11
// Remove the first 2 elements from an array using the spread operator.

const array3 = [10, 20, 30, 40, 50, 60, 70];
let rem = ([a,x, ...array3])=>array3;
console.log(rem(array3));


// Task 12
// Replace the first and second elements with 5 and 6 using splice.
const array4 = [1,2,3,4,5];
array4.splice(1,2,5,6);
console.log(array4);