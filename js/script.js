// Init Rellax
let rellax = new Rellax('.rellax');

// Select DOM Elements
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const menuResponsive = document.querySelector('.container');

/* Open Menu when clicked button */
openBtn.addEventListener('click', () => {
  menuResponsive.classList.add('show');
});

/* Close Menu when clicked button X */
closeBtn.addEventListener('click', () => {
  menuResponsive.classList.remove('show');
});

// Scroll mobile
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  console.log(scrolled);

  if (scrolled > 350) {
    openBtn.classList.add('open-btn-bg');
  } else if (scrolled < 350) {
    openBtn.classList.remove('open-btn-bg');
  }
});
