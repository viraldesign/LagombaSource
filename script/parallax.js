let back = document.getElementById("back-parallax");
let mid = document.getElementById("mid-parallax");
let front = document.getElementById("front-parallax");
let titel = document.getElementById("titel-parallax");
let mobile = document.getElementById("mobile-parallax");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  back.style.top = value * 1.2 + "px";
  mid.style.top = value * 0.9 + "px";
  front.style.top = value * 0.3 + "px";
  titel.style.top = value * 1 + "px";
  mobile.style.top = value * 1.5 + "px";
});
