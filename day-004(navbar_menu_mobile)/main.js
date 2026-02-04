// Mobile Menu Toggle
const menuToggle = document.querySelector('.ctn-menu-mobile');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav .links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideMenu = nav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && nav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});
