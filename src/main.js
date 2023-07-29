// When scrolling down the page, apply dark styling to the header
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// When scrolling down the page, make the home section transparent
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// When scrolling down, make the arrow-up button transparent
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
    arrowUp.style.cursor = 'pointer';
  } else {
    arrowUp.style.opacity = 0;
    arrowUp.style.cursor = 'default';
  }
});

// Handle Navbar toggle button click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
