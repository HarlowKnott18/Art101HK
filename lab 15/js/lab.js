//lab.js - yes or no AIP
//Requirements: jQuery must be loaded for this script to work.

//Author: Harlow Knott and Maya Pahre
//Date: May 2024
//*


// script.js

const responses = [
  {
      "answer": "yes",
      "forced": false,

  },
  {
      "answer": "no",
      "forced": false,

  }
];

const getRandomResponse = () => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

const displayResponse = () => {
  const response = getRandomResponse();
  const answerElement = document.getElementById('answer');
  const imageElement = document.getElementById('image');

  answerElement.textContent = response.answer;
  imageElement.src = response.image;
};

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('displayButton');
  button.addEventListener('click', displayResponse);
});
