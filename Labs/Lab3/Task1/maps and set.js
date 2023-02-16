/**Filter unique array members */

function unique(arr) {
    return Array.from(new Set(arr));
  }
  /* Filter anagrams*/

  function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );
/* Iterable keys*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");