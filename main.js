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

// Quando il DOM è caricato, aggiungi l'observer a tutte le hero section e team section
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero-section, .team-section, footer');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentHash = window.location.hash || '#home';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
            link.style.textTransform = 'uppercase';
        } else {
            link.classList.remove('active');
            link.style.textTransform = 'none';
        }
    });
}

// Aggiorna il link attivo quando cambia l'hash dell'URL
window.addEventListener('hashchange', updateActiveNavLink);
