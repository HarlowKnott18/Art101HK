// *
//*
//* 
 //*Anon Functions and Callbacks
 //* experiment with anonymous functions and callbacks
 //*
 //* @author Harlow Knott and Maya Pahre
//* @since  May 2024
 //* liscense: public domain
 function isOdd(a) { 
       return (a % 2 !==0);
   } 
console.log("Is 3 odd? ", isOdd(3));
console.log("Is 2 odd? ", isOdd(2))
  


numArray = [5, 10, 15, 20, 25];
console.log("Our array", numArray);

var result = numArray.map(isOdd);
//should return [true, false, true, false, true]
console.log("Test out oddness of array:", result);


var result = numArray.map(function(a){
       return a ** 5;
})
//should return [3125, 100000, 759375, 3200000, 9765625]
console.log("array to the power of five:", result);
