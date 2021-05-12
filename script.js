function myFunction(x) {
  x.classList.toggle("change");
}

function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  console.log("opened");
}

function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

// var fortunes = ["you will get an A on a test.", "you will be rich.", "good fortune will be yours.", "you will have many friends.", "do a good deed today.", "someone will call you today.", "you will go to a party soon.", "be careful on Tuesday.", "you will have very good luck today."];
// var appInfo;
//
// window.addEventListener("DOMContentLoaded", function() {
// var instagramToggle;
// instagramToggle = document.getElementById('InstagramApp');
// instagramToggle.addEventListener("click", appInfoPicker);
// });
//
// function appInfoPicker() {
//   console.log("Hello");
// }
