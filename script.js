// Smooth Scroll for Nav Links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Toggle Project Details
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', function () {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        document.getElementById('formFeedback').style.display = 'block';
        this.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Scroll Reveal Animations
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});
