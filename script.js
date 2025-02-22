

window.addEventListener('load', function() {
  
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.content').style.visibility = 'visible';
      document.querySelector('.content').style.opacity = 1;
  }, 2000); 
});





const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }
        else
        {
            entry.target.classList.remove('show')
        }

    });
});

const hidElements=document.querySelectorAll('.hidden')
hidElements.forEach((el) => observer.observe(el));




const toggleBtn= document.querySelector('.toggle-btn');
const toggleIcon= document.querySelector('.toggle-btn i');
const dropdown= document.querySelector('.dropdown');

toggleBtn.onclick= function(){
    
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleIcon.classList = isOpen ? 'bx bx-cross bx-spin' : 'bx bx-menu'

}

const themeButton1 = document.getElementById('theme1');
const stylesheet1 = document.getElementById('stylesheet');

themeButton1.addEventListener('click', () => {
 
    if (stylesheet1.getAttribute('href') === 'styles.css') {
        stylesheet1.setAttribute('href', 'light.css');

      
    } else {
        stylesheet1.setAttribute('href', 'styles.css');

    }
});


const themeButton2 = document.getElementById('theme2');
const stylesheet2 = document.getElementById('stylesheet');

themeButton2.addEventListener('click', () => {
 
    if (stylesheet2.getAttribute('href') === 'styles.css') {
        stylesheet2.setAttribute('href', 'light.css');
      
    } else {
        stylesheet2.setAttribute('href', 'styles.css');

    }
});