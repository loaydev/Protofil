const elements = document.querySelectorAll('.animate__animated');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
      el.classList.add('animate__fadeInUp');
    }
  });
});