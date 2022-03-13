var slideIndex = 1;
showSlidesImg(slideIndex);

function plusSlides(n) {
  showSlidesImg(slideIndex += n);
}

function slideLower(n) {
  showSlidesImg(slideIndex = n);
}
// showSlidesImg function
function showSlidesImg(n) {
  var i;
  // get value img slide
  var slides = document.getElementsByClassName("mySlides");
  var lowerimgdot = document.getElementsByClassName("lowerimg");
  // condition
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < lowerimgdot.length; i++) {
    lowerimgdot[i].className = lowerimgdot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  lowerimgdot[slideIndex-1].className += " active";
}
