// 1. Comenta tu codigo JavaScript

//console.log("hola")

/*
let variable = 5;
console.log(variable);
*/

// 2. Declare JavaScript variables
var myName;

// 3. Storing Values with the Assignment Operator
var a;
a = 7;

// 4. Assigning the Value of One Variable to Another

var a;
a = 7;
var b;

b = a;

// 5. Initializing Variables with the Assignment Operator
var myVar = 0;
var a = 9;

// 6. Declare String Variables
var myFirstName = "Facundo";
var myLastName = "Almaraz";

// 7. Understanding Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// 8. Understanding Case Sensitivity in Variables

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9. Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// 10. Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// 11. Add Two Numbers with JavaScript
var sum = 10 + 10;

// 12. Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// 13. Multiply Two Numbers with JavaScript
const multi = 8 * 10;

// 14. Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// 15. Increment a Number with JavaScript
let myVar = 87;
myVar++;

// 16. Decrement a Number with JavaScript
let myVar = 11;
myVar--;

// 17. Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
const myDecimal = 1.2;

// 18. Multiply Two Decimals with JavaScript
const product = 5.0 * 1.0;

// 19. Divide One Decimal by Another with JavaScript
const divi = 4.4 / 2.0;

// 20. Finding a Remainder in JavaScript
const remainder = 11 % 3;

// 21. Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// 22. Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// 23. Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// 24. Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

//25. Escaping Literal Quotes in Strings
const myStr = 'I am a "double quoted" string inside "double quotes".';

// 26. Quoting Strings with Single Quotes
const myString = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27. Escape Sequences in Strings
const myString2 = "FirstLine\n\t\\SecondLine\nThirdLine";

// 28. Concatenating Strings with Plus Operator
const myString3 = "This is the start. " + "This is the end.";

// 29. Concatenating Strings with the Plus Equals Operator
let myString4 = "This is the first sentence. ";
myString4 += "This is the second sentence.";

// 30. Constructing Strings with Variables
const myName = "Facundo";
const myString5 = "My name is " + myName + "and I am well!";

// 31. Appending Variables to Strings

const someAdjective = "programarlo";
let myString6 = "Si puedes imaginarlo, puedes ";

myStr += someAdjective;

// 32. Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// 33. Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastNam = "Lovelace";

firstLetterOfLastName = lastNam[0];

// 34. Understand String Immutability

let myString7 = "Jello World";

myString7 = "Hello World";

// 35. Use Bracket Notation to Find the Nth Character in a String


const apellido = "Lovelace";
const thirdLetterOfLastName = apellido[2]

// 36. Use Bracket Notation to Find the Last Character in a String
const ape = "Lovelace";
const lastLetterOfLastName = ape[ape.length - 1] 

// 37. Use Bracket Notation to Find the Nth-to-Last Character in a String
const apel = "Lovelace";
const secondToLastLetterOfLastName = apel[apel.length - 2] 

// 38. Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// 39. Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Facundo", 25];

// 40. Nest one Array within Another Array
const myArray2 = [["Facundo", 1], ["Facu", 2]];

// 41. Access Array Data with Indexes
const myArray3 = [50, 60, 70];

const myData = myArray3[0]

// 42. Modify Array Data With Indexes

const myArray4 = [18, 64, 99];
myArray4[0] = 45

// 43. Access Multi-Dimensional Arrays With Indexes
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData5 = myArray5[2][1];
  
// 44. Manipulate Arrays With push()


const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3])

// 45. Manipulate Arrays With pop()

const myArray7 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray7.pop()

// 46. Manipulate Arrays With shift()
const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray8.shift()

// 47. Manipulate Arrays With unshift()

const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(["Paul", 35])

// 48. Shopping List
const myList = [["Jabon", 1]];

myList.push(["Galletitas", 3])
myList.push(["Gaseosas", 2])
myList.push(["Servilletas", 4])
myList.push(["Golosinas", 10])

// 49. Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World")
  }
  
reusableFunction()
  
// 50. Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
    console.log(a + b)
}
  
functionWithArgs(1, 2)






