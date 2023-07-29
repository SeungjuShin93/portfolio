// When scrolling down the page, apply dark styling to the header
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log('안녕');
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
