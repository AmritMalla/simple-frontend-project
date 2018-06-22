
window.onscroll = function() {myFunction();};

var navstick = document.getElementById("navstick");
var sticky = navstick.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navstick.classList.add("sticky")
  } else {
    navstick.classList.remove("sticky");
  }
}