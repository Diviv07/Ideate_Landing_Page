const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.event-card, .stats div, .experience-copy, .orbit, .manifesto p').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  reveal.observe(el);
});
