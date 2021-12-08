
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 490 || document.documentElement.scrollTop > 490) {
    document.getElementById("header").style.background = "var(--rainbow)"
    document.getElementById("header").style.transitionDuration = "1s"
 
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}




