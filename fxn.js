//write a function that accepts two numbers as parameters, and returns the sum
//Remember: parameteres are placeholders (ex num1, num2), arguments (ex: sum(10,25)); are what we feed in to fill in
//as parameters - its the data we're feeding in.
num1 = 5;
num2 = 9;

function sum(num1,num2) {
    return num1 + num2
}
    console.log(num1+num2)

//Write a function that accepts three numbers as parameters and returns the 
//largest of those numbers.
function largestofThree(arr) {
    return arr;
}
largestofThree([3,6,9])
function largestofThree(arr) {
    var largestofThree =[3,6,9];
    for(var i = 0; i < arr.length; i++){
        console.log(Math.max.apply(null, largestofThree))
    }
    return largestofThree
}

//Write a function that accepts one number as a parameter, and 
//returns whether that number is even or odd. (Return the string "even" or "odd");

function myparameter(data) {
    console.log(data)
}
myparameter(1)
var myparameter = 1
if (myparameter % 2 === 0) {
    console.log("even")
}
else {console.log("odd")}

//Optional challenges:
//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, 
//return the string concatenated with itself (string + string). If the string is more than twenty characters long, 
//return the first half of the string. You will need to use a string method or two:
//-slice()
//-concat() (optional)

//









