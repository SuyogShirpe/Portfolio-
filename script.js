// script.js

window.addEventListener('load', function() {
  // Hide loader after 2 seconds or when the page finishes loading
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.content').style.visibility = 'visible';
      document.querySelector('.content').style.opacity = 1;
  }, 2000); // Ensure loader lasts for at least 2 seconds
});
