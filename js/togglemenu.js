function toggleMenu() {
    var menuElement = document.getElementById('menu');
    var overlayElement = document.getElementById('overlay');
    
    menuElement.classList.toggle('show');
    overlayElement.classList.toggle('show'); // Add this line to toggle the overlay
}