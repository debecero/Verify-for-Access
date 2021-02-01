window.onscroll = function() {mySticky("myHeader")};

var header = document.getElementById("myHeader");
var mySticky = header.offsetTop;

function mySticky() {
  if ((window.pageYOffset) >= 50) {
    header.classList.add ("sticky");
  } else  {
    header.classList.remove ("sticky");
  }

  function newFunction() {
    ;
  }
}

window.addEventListener('scroll', checkScrollPosition);
function checkScrollPosition(){
  if ((window.pageYOffset) >= 240) {
  var hero = document.getElementById('myHeader')
  sticky.style.position = "fixed"
  sticky.style.top = "-140px"
}
}