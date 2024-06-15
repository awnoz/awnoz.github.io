document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const features = document.getElementById('features');
    const featureItems = document.querySelectorAll('.feature');
    const about = document.getElementById('about');

    // Check if dark mode is saved in local storage
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        if (features) features.classList.add('dark-mode');
        if (about) about.classList.add('dark-mode');
        featureItems.forEach(item => item.classList.add('dark-mode'));
         toggleIcon.src = 'Images/moon.png';
    }

    // Scroll to top functionality
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle dark mode functionality
    toggleDarkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        if (features) features.classList.toggle('dark-mode');
        if (about) about.classList.toggle('dark-mode');
        featureItems.forEach(item => item.classList.toggle('dark-mode'));
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'true');
            toggleIcon.src = 'Images/moon.png';
        } else {
            localStorage.setItem('dark-mode', 'false');
            toggleIcon.src = 'Images/sun.png';
        }
    });
});