// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Sticky Navbar & Active Link
window.onscroll = () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active Link Highlighting
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navlist li a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.parentElement.classList.remove('active');
                document.querySelector('.navlist li a[href*=' + id + ']').parentElement.classList.add('active');
            });
        }
    });

    // Remove menu icon toggle when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
};

// ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-info, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills-column', { origin: 'bottom' });
ScrollReveal().reveal('.home-info h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-info p, .about-content', { origin: 'right' });
