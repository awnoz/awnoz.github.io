// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const about = document.getElementById('about');
  const features = document.getElementById('features');
  const featureItems = document.querySelectorAll('.feature');
  const backToTop = document.getElementById('backToTop');
  const toggleBtn = document.getElementById('toggleDarkMode');
  const toggleIcon = document.getElementById('toggleIcon');

  // ---- DARK MODE ----
  const applyTheme = (mode) => {
    const dark = mode === 'dark';
    body.classList.toggle('dark-mode', dark);
    header.classList.toggle('dark-mode', dark);
    footer.classList.toggle('dark-mode', dark);
    if (about) about.classList.toggle('dark-mode', dark);
    if (features) features.classList.toggle('dark-mode', dark);
    featureItems.forEach(item => item.classList.toggle('dark-mode', dark));

    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);

    toggleBtn.setAttribute('aria-pressed', dark);
    toggleIcon.src = dark ? 'Images/moon.png' : 'Images/sun.png';
    toggleIcon.alt = dark ? 'Switch to light mode' : 'Switch to dark mode';
  };

  // Check saved theme or system preference
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  // Toggle button
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ---- BACK TO TOP ----
  if (backToTop) {
    backToTop.setAttribute('aria-label', 'Back to top');

    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
      backToTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
