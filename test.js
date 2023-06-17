

let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 150 &&
        section.offsetTop + section.offsetHeight > scrollpos + 150) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

