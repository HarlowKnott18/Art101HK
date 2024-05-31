// *
//*
//* 
 //*Arrays and Objects: My Main Ride and My Transport
 //* coding arrays for transportation methods and objects for Toyota Yaris
 //*
 //* @author Harlow Knott and Maya Pahre
//* @since  April 2024
 //* liscense: public domain
 
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

// Define Variables
myTransport = ["Toyota Yaris", "car", "loop bus", "metro bus", "bicycle", "walking"];

// Create an object for my main ride
myMainRide = {
    Make: "Toyota",
    Model: "Yaris",
    Color: "Red",
    Year: 2018,
    Age: function() {
        var currentYear = new Date().getFullYear();
        return currentYear - this.Year;
    },
    ownIt: true
};

console.log("The car's age is: " + myMainRide.Age() + " years.");

// Output
document.writeln("<h2>What Kinds of Transportation I Use:</h2>");
document.writeln("<ul>");
myTransport.forEach(function(transport) {
    document.writeln("<li>" + transport + "</li>");
});
document.writeln("</ul>");

document.writeln("<h2>My Main Ride:</h2>");
document.writeln("<pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");