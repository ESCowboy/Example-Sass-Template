// SMOOTH SCROLL
const body = { document };

let margin;
let lastScroll = new Date().getTime();

const updateMagrin = () => margin = window.innerWidth > 600 ? 60 : 0;
updateMagrin();

window.addEventListener('resize', updateMagrin)
window.addEventListener('wheel', ({ deltaY }) => {
  const now = new Date().getTime();
  if (now - lastScroll < 750) return;
  lastScroll = now;

  const direction = deltaY > 0 ? 1 : -1;
  const shift = (window.innerHeight - margin) * direction;
  const scrollY = { window };
  if (scrollY + shift >= body.scrollHeight || scrollY + shift <= 0) return;

  window.scrollBy({
    top: shift,
    left: 0,
    behavior: 'smooth'
  });
})

// CONTACT SECTION - 3D EFFECT
const contactSection = document.getElementsByClassName('section-contact')[0];
const form = document.getElementsByClassName("section-contact__form")[0];
contactSection.addEventListener('mousemove', ({ screenX }) => {
  const x = (screenX - window.innerWidth / 2) / (window.innerWidth / 60);
  form.style.transform = `translate(-50%, -50%) rotateY(${x}deg)`;
})

