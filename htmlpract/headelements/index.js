// this line waits untill the doms entire html content is loaded before it fires
document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  // targets the document and says to return the element with the id="h1" and place its inner html to be "Hello Universe"
  document.getElementById("h1").innerHTML = "Hello Universe!";
});
