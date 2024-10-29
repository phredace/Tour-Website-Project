var slideIndex = 0;
var slideTimer;

// Start the slideshow when the page loads
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  // Clear the previous timer and set a new one
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Add a click event listener to the "Discover More" button
var discoverBtn = document.getElementById("discover-btn");
if (discoverBtn) {
  discoverBtn.addEventListener("click", discoverMore);
}

function discoverMore() {
  // Do something when the Discover More button is clicked
  // For example, redirect the user to another page
  window.location.href = "packages.html";
}
