window.addEventListener('DOMContentLoaded', function() {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;
    var timer = setInterval(nextSlide, 3000); // Switch slide every 3 seconds
  
    function nextSlide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    }
  
    function stopTimer() {
      clearInterval(timer);
    }
  
    function startTimer() {
      timer = setInterval(nextSlide, 3000);
    }
  
    // Pause timer on mouseenter, resume on mouseleave
    var carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopTimer);
    carousel.addEventListener('mouseleave', startTimer);
  });
  