

window.addEventListener('load', function() {
  
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.content').style.visibility = 'visible';
      document.querySelector('.content').style.opacity = 1;
  }, 2000); 
});

const toggleBtn= document.querySelector('.toggle-btn');
const toggleIcon= document.querySelector('.toggle-btn i');
const dropdown= document.querySelector('.dropdown');

toggleBtn.onclick= function(){
    
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleIcon.classList = isOpen ? 'bx bx-cross bx-spin' : 'bx bx-menu'

}

const switchButton = document.getElementById('theme');
const stylesheet = document.getElementById('stylesheet');

switchButton.addEventListener('click', () => {
 
    if (stylesheet.getAttribute('href') === 'styles.css') {
        stylesheet.setAttribute('href', 'light.css');
      
    } else {
        stylesheet.setAttribute('href', 'styles.css');

    }
});
