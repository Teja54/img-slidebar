var images = [
  "images/a1.jpg",
  "images/a2.jpg",
  "images/a3.jpg",
  "images/a4.jpg",
  "images/a5.jpg",
];
var num = 0;
function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
