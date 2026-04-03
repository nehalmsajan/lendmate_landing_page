/**
 * LendMate Landing Webpage - Interactions & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once element is visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Navbar Background Blur Effect on Scroll
    const navbar = document.querySelector('.navbar');
    // 3. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 4. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 18, 18, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
