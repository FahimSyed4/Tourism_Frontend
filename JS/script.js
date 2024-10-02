ScrollReveal({
  mobile: false, // Disable animations on mobile
});

// Reveal header
ScrollReveal().reveal('.header', {
  delay: 500,
  reset: false,
  mobile: false,
});

// Reveal h1 in showcase
ScrollReveal().reveal('.showcase-content h1', {
  scale: 2,
  duration: 3000,
  mobile: false,
});

// Reveal showcase content
ScrollReveal().reveal('.showcase-content', {
  scale: 2,
  duration: 3000,
  delay: 500,
  mobile: false,
});

// Reveal showcase search
ScrollReveal().reveal('.showcase-search', {
  duration: 1500,
  delay: 500,
});

// Reveal destinations section
ScrollReveal().reveal('.destinations h2', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});

// Reveal destinations cards
ScrollReveal().reveal('.destinations-cards', {
  duration: 1500,
});

// Reveal section titles
ScrollReveal().reveal('.section-title', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});

// Reveal hotel cards and other sections
ScrollReveal().reveal('.hotel-card , #tours, #activities', {
  duration: 1500,
  origin: 'left',
  distance: '50px',
});

// Reveal about section content
ScrollReveal().reveal('.about-content', {
  reset: true,
  duration: 1500,
  origin: 'left',
  distance: '50px',
});

// Reveal about section image
ScrollReveal().reveal('.about-img', {
  reset: true,
  duration: 1500,
  origin: 'right',
  distance: '50px',
});
