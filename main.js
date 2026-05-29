/* ===========================
   NAVBAR scroll
=========================== */
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===========================
   VIDEO AUTOPLAY — silent fallback
   If browser blocks autoplay, videos stay hidden
   and placeholders remain visible.
=========================== */
document.querySelectorAll('video').forEach(v => {
  v.play().catch(() => {
    // autoplay blocked — placeholder stays
  });
});

/* ===========================
   PROJECT CARDS — pause/play video on hover
=========================== */
document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('.pcard-video');
  const ph    = card.querySelector('.pcard-ph');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
    if (ph) ph.style.opacity = '0';
  });
  card.addEventListener('mouseleave', () => {
    video.pause();
    if (ph) ph.style.opacity = '1';
  });
});

/* ===========================
   FADE IN sections on scroll
=========================== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-block, .about-teaser, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  io.observe(el);
});
