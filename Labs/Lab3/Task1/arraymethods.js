/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.* */
function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }


/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array. */

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr1 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr1, 1, 4);
  
  alert( filtered ); 
  
  alert( arr1 );

/* */
function filterRangeInPlace(arr2, a, b) {

    for (let i = 0; i < arr2.length; i++) {
      let val = arr2[i];
  
      
      if (val < a || val > b) {
        arr2.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4);
  
  alert( arr2 ); 

/** Sort in decreasing order*/

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3 );

/* Copy and sort array*/

function copySorted(arr4) {
    return arr4.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  alert( sorted );
  alert( arr4 );

  /* calculator*/
  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

/* map to names*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );
/* map to objects*/
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/* Sort users by age*/
function sortByAge(arr5) {
    arr5.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr5 = [ pete, john, mary ];
  
  sortByAge(arr5);

/**Shuffle an array */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr6 = [1, 2, 3];
  shuffle(arr6);
  
  /**average age */

  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr9 = [ john, pete, mary ];

  /* Filter unique array members*/
  function unique(arr7) {
    let result = [];
  
    for (let str of arr7) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  /* Create keyed object from array*/
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  } 