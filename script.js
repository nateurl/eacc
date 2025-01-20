document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic text animation for the home section
    const homeText = document.querySelector('#home p');
    const texts = ['Accelerating progress', 'Shaping the future', 'Embracing innovation'];
    let index = 0;

    setInterval(() => {
        homeText.style.opacity = 0;
        setTimeout(() => {
            homeText.textContent = texts[index];
            homeText.style.opacity = 1;
            index = (index + 1) % texts.length;
        }, 500);
    }, 3000);

    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
        const scrollPosition = wi
