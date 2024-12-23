

window.addEventListener('load', function() {
  
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.content').style.visibility = 'visible';
      document.querySelector('.content').style.opacity = 1;
  }, 2000); 
});



const switchButton = document.getElementById('theme');
const stylesheet = document.getElementById('stylesheet');

switchButton.addEventListener('click', () => {
 
    if (stylesheet.getAttribute('href') === 'styles.css') {
        stylesheet.setAttribute('href', 'light.css');
      
    } else {
        stylesheet.setAttribute('href', 'styles.css');

    }
});
