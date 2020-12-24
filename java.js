var images = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg"];
var num=0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num>=num.length) {
        num=0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}