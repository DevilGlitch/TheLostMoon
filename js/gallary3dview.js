
var carousel = document.querySelector('.carousel');
var carouselInner = carousel.querySelector('.carousel-inner');
var carouselItems = carousel.querySelectorAll('.carousel-item');
var totalItems = carouselItems.length;
var currentIdx = 0;

function showNext() {
  var nextIdx = (currentIdx + 1) % totalItems;
  
  carouselItems[currentIdx].classList.remove('active');
  carouselItems[nextIdx].classList.add('active');
  
  carouselItems[currentIdx].classList.add('prev');
  carouselItems[nextIdx].classList.add('next');
  
  setTimeout(function() {
    carouselItems[currentIdx].classList.remove('prev');
    carouselItems[nextIdx].classList.remove('next');
  }, 600);
  
  currentIdx = nextIdx;
}
function showPrevious() {
  var prevIdx = (currentIdx - 1 + totalItems) % totalItems;
  
  carouselItems[currentIdx].classList.remove('active');
  carouselItems[prevIdx].classList.add('active');
  
  carouselItems[currentIdx].classList.add('next');
  carouselItems[prevIdx].classList.add('prev');
  
  setTimeout(function() {
    carouselItems[currentIdx].classList.remove('next');
    carouselItems[prevIdx].classList.remove('prev');
  }, 600);
  
  currentIdx = prevIdx;
}

carousel.addEventListener('click', function(e) {
  var isNext = e.clientX > carousel.getBoundingClientRect().width / 2;
  
  if (isNext) {
    showNext();
  } else {
    showPrevious();
  }
});
