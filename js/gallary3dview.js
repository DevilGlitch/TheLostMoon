document.addEventListener("DOMContentLoaded", function() {
	var slides = document.querySelectorAll(".slide");
	var index = 0;
	
	function showSlide() {
	  slides[index].style.display = "none";
	  index = (index + 1) % slides.length;
	  slides[index].style.display = "block";
	}
	
	setInterval(showSlide, 5000);
  });
  