// Reveal animations
const faders = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-slow, .fade-in-section');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fade => appearOnScroll.observe(fade));
