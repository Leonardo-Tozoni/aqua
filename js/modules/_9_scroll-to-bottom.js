export default function initScrollBottom() {
  const scrollToTopButton = document.getElementById('scrollToTopBtn');

  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) { 
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  });
}