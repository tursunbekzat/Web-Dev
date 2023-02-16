/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.*/

function isEmpty(obj){
    for(let test in obj){
        return false;
    }
    return true;
}

/*We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
} */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let test in salaries)
{
    sum = sum + salaries.test;
}

alert(sum);


/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  function multiplyNumeric(menu)
  {
    for(let key in menu){
        if(typeof(menu.key == Number)){
            {
                key = key*2;
            };
        };

    }

  }