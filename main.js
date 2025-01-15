const starsContainer = document.getElementById('starsContainer');
for(let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}

// Osserva gli elementi quando entrano nel viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// Quando il DOM è caricato, aggiungi l'observer a tutte le hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroSections = document.querySelectorAll('.hero-section, footer');
    heroSections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});