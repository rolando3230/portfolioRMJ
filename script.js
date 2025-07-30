console.log('Script is running');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

console.log('Sections:', section);
console.log('Nav Links:', navLinks);

window.onscroll = () => {
    console.log('Scrolling detected');
    let top = window.scrollY; // Corrected here
    console.log('ScrollY:', top);

    section.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log('Section:', id, 'Offset:', offset, 'Height:', height);

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            console.log('Active Link:', activeLink);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '90px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Desktop Developer', 'Mobile App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const contactForm = document.getElementById('contact');
const submitButton = contactForm.querySelector('input[type="submit"]');

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Show success message
    Swal.fire({
        icon: 'success',
        title: 'Submitted Successfully!',
        text: 'Your message has been sent.',
        timer: 3000, // Close after 3 seconds
        timerProgressBar: true,
        showConfirmButton: false
    });

    // Reset form fields
    contact.reset();
});
