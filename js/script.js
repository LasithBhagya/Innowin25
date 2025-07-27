// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        mobileMenu.classList.add('hidden');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ accordion
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('i');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

// Agree to Rules & Guidelines
const checkbox = document.getElementById('rulesAndGuidelines');
const link = document.getElementById('applicationLink');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // Enable the link
        link.classList.remove('pointer-events-none', 'cursor-not-allowed', 'border-darksilver', 'text-darksilver', 'cursor-default');
        link.classList.add('cursor-pointer', 'border-gold', 'hover:border-darkgold', 'hover:bg-gold', 'hover:text-black', 'text-gold');
        link.setAttribute('href', 'https://forms.gle/vsudhYbuMBU133Zb8');
    } else {
        // Disable the link
        link.classList.add('pointer-events-none', 'cursor-not-allowed', 'border-darksilver', 'text-darksilver', 'cursor-default');
        link.classList.remove('cursor-pointer', 'border-gold', 'hover:border-silver', 'hover:bg-gold', 'hover:text-black', 'text-gold');
        link.setAttribute('href', 'https:///google.com');
    }
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Check if the URL contains an anchor (e.g., #home)
if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}