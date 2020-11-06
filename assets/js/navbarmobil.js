/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

$(document).ready(function(){

  $('.icon').click(function(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
  });

});
