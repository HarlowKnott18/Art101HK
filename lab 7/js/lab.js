// *
//*
//* 
 //*Functions
 //* coding functions that takes user input and manipulates string
 //*
 //* @author Harlow Knott and Maya Pahre
//* @since  May 2024
 //* liscense: public domain
 //sortUserName
 function sortUserName() {
  var userName = window.prompt("Excusez-moi! What name doth you use?");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
 }

 document.writeln("Lovely name you've got there, dont worry I made it even better!: ",
        sortUserName(), "</br>");

var gif = document.getElementById('gif');

gif.style.display= 'block';
gif.style.margin = 'auto';

