//Capiitalise Keys:  Write a function capitaliseKeys, which takes an object 
//as an argument, and returns a new object
// with the same key-value pairs except all the keys have been capitalised.


function capitaliseKeys(obj) { 
   return Object.keys(obj).reduce((acc, key) => {
        acc[key.toUpperCase()] = obj[key];
        // console.log(acc);
        return acc;
    },
    {}); 
};
    
const myObject = {a:1, b:2, c:3, "hi":99};
let newObject = capitaliseKeys(myObject);
console.log(newObject);


// Write a function stringToObject

// stringToObject takes one parameter, a string. 
// The string is made up of key-value pairs formatted as follows: “key1:value1,key2:value2,…”

// stringToObject should return an object made up of the key-value pairs in the string. 
//Assume all values are strings.

function stringToObject(str) {
    let newArray = str.split("");
    return newArray;
}


const myString = "a:1,b:2,c:3,hello:world";
let stringObj = stringToObject(myString);
console.log(stringObj);



// Going shopping 
// Write a function shoppingList that accepts a single parameter, a string. 
//The string is a list of ingredients, separated by a comma, formatted as below:

// “2 tomatoes, 1 egg, 3 pumpkins”

// The function shoppingList should return an object where the keys are the ingredient names, 
//and the values are the number of the ingredients needed.



// Map Object 
// Write a function mapObject that takes two parameters: an object obj and a function fn.

// mapObject should return a new object whose keys are the same as those of obj, and whose values 
//are the result of calling fn with the values of obj.