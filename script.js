window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".content").style.visibility = "visible";
    document.querySelector(".content").style.opacity = 1;
  }, 1500);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidElements = document.querySelectorAll(".hidden");
hidElements.forEach((el) => observer.observe(el));

const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-btn i");
const dropdown = document.querySelector(".dropdown");

toggleBtn.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");

  toggleIcon.classList = isOpen ? "bx bx-cross bx-spin" : "bx bx-menu";
};

  const stylesheet = document.getElementById("stylesheet");
  const btnLight = document.getElementById("theme1"); 
  const btnDark = document.getElementById("theme2"); 

  btnLight.addEventListener("click", () => {
    stylesheet.setAttribute("href", "light.css");
  });

  btnDark.addEventListener("click", () => {
    stylesheet.setAttribute("href", "styles.css");
  });


