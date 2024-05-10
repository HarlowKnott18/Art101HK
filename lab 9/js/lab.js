// *
//*
//* Lab 9: This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 //*
 //*   Requirements: jQuery must be loaded for this script to work.
 //*
//* Author: Harlow Knott and Maya Pahre
 //* May 2024
 //*

 
// add button to challenge section
 // Append buttons to sections
 $('#challenge').append('<button class="btn" id="challenge-btn">Challenge!</button>');
 $('#problems').append('<button class="btn" id="problems-btn">Problems!</button>');
 $('#results').append('<button class="btn" id="results-btn">Results!</button>');

 // Example click event handler for the buttons
 $('#challenge-btn').click(function() {
   alert('The challenge of this lab was to experiment with jQuery and create buttons on our website! ');
 });

 $('#problems-btn').click(function() {
   alert('We had a few problems when it came to this lab, and most of them were actually CSS related issues. We tried to make a border on our webpage, and got a bit confused on how to do so. Using the lab reference and a bit of help from a friend, we made a cool gradient border. We got our buttons up and running, but also had problems making our buttons look neat on our page. Using ChatGPT we found how to customize what our buttons look like. Lastly, we had a problem uploading a background image, but our friend Jacky helped us out!');
 


});

 $('#results-btn').click(function() {
   alert('Hit all of the buttons to check out our results on this lab! Enjoy!');
 });
;
