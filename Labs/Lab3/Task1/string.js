/*Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. */


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength. */

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
/*We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */
function extractCurrencyValue(str) {
    return +str.slice(1);
  }
/* */

