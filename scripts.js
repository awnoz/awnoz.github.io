document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my personal blog!');
    
    // Add smooth scrolling to anchor links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});