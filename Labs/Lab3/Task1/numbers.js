/*Create a script that prompts the visitor to enter two numbers and then shows their sum. */

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

/*How to round 6.35 the right way? */
alert( Math.round(6.35 * 10) / 10 );

/* Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.*/
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(readNumber());

  /* */

  function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


/*Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability. */

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );