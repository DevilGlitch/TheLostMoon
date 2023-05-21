window.addEventListener('DOMContentLoaded', function () {
    // Get the loading element
    var loadingElement = document.getElementById('loading');

    // Hide the loading element and show the main content
    function showContent() {
      var mainElement = document.getElementById('main');
      loadingElement.style.display = 'none';
      mainElement.classList.add('show');
    }

    // After a delay, fade out the loading element and show the main content
    setTimeout(function () {
      loadingElement.style.opacity = 0;
      setTimeout(showContent, 1000); // Wait for the fade-out animation to complete
    }, 2000);
  });

  function toggleMenu() {
    var menuElement = document.getElementById('menu');
    menuElement.classList.toggle('show');
  }