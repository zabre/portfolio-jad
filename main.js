/* ===========================
   NAVBAR scroll
=========================== */
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===========================
   VIDEO AUTOPLAY
=========================== */
document.querySelectorAll('video').forEach(v => v.play().catch(() => {}));

/* ===========================
   EMBED MODAL — projects.html
=========================== */
const embedModal    = document.getElementById('embedModal');
const embedContent  = document.getElementById('embedContent');
const embedClose    = document.getElementById('embedClose');
const embedBackdrop = document.getElementById('embedBackdrop');
const madi3chModal    = document.getElementById('madi3chModal');
const madi3chClose    = document.getElementById('madi3chClose');
const madi3chBackdrop = document.getElementById('madi3chBackdrop');

function openEmbedModal(type, id) {
  if (!embedModal || !embedContent) return;
  embedContent.innerHTML = '';
  if (type === 'tiktok') {
    embedContent.innerHTML = `
      <blockquote class="tiktok-embed"
        cite="https://www.tiktok.com/@tiktok/video/${id}"
        data-video-id="${id}"
        style="max-width:360px;min-width:0;">
        <section></section>
      </blockquote>`;
    if (window.tiktokEmbed) { window.tiktokEmbed.lib.render(embedContent.querySelectorAll('.tiktok-embed')); }
    else {
      const s = document.createElement('script');
      s.src = 'https://www.tiktok.com/embed.js';
      embedContent.appendChild(s);
    }
  } else if (type === 'instagram') {
    embedContent.innerHTML = `
      <blockquote class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/${id}/"
        data-instgrm-version="14"
        style="width:360px;">
      </blockquote>`;
    if (window.instgrm) { window.instgrm.Embeds.process(); }
    else {
      const s = document.createElement('script');
      s.src = '//www.instagram.com/embed.js';
      embedContent.appendChild(s);
    }
  }
  embedModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEmbedModal() {
  if (!embedModal) return;
  embedModal.classList.remove('open');
  if (embedContent) embedContent.innerHTML = '';
  document.body.style.overflow = '';
}

if (embedClose) embedClose.addEventListener('click', closeEmbedModal);
if (embedBackdrop) embedBackdrop.addEventListener('click', closeEmbedModal);

function openMadi3ch() {
  if (!madi3chModal) return;
  madi3chModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMadi3ch() {
  if (!madi3chModal) return;
  madi3chModal.classList.remove('open');
  document.body.style.overflow = '';
}
if (madi3chClose) madi3chClose.addEventListener('click', closeMadi3ch);
if (madi3chBackdrop) madi3chBackdrop.addEventListener('click', closeMadi3ch);

document.querySelectorAll('.project-card').forEach(card => {
  const btn = card.querySelector('.open-embed');
  if (!btn) return;
  const type = card.dataset.embed;
  const id   = card.dataset.id;

  const trigger = () => {
    if (type === 'desc') { openMadi3ch(); }
    else { openEmbedModal(type, id); }
  };
  card.addEventListener('click', trigger);
  btn.addEventListener('click', e => { e.stopPropagation(); trigger(); });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeEmbedModal(); closeMadi3ch(); }
});

/* ===========================
   CONTACT FORM — feedback
=========================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.contact-submit');
    btn.textContent = 'Message envoyé ✓';
    btn.style.background = '#16a34a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Envoyer le message →';
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

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
}, { threshold: 0.08 });

document.querySelectorAll('.timeline-block, .about-teaser, .project-card, .contact-info-card, .contact-form-wrap, .contact-avail, .contact-socials').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  io.observe(el);
});
