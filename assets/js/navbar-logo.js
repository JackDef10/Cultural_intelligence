window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.querySelector(".cultural-logo").style.visibility = "hidden";
    document.querySelector(".cultural-logo-1").style.visibility = "visible";
 
  } else {
    document.querySelector(".cultural-logo").style.visibility = "visible";
    document.querySelector(".cultural-logo-1").style.visibility = "hidden";
  }
}




