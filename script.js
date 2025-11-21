// Attendre que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Fonction pour ouvrir/fermer le menu mobile
    hamburger.addEventListener('click', () => {
        // Basculer la classe 'nav-active' qui fait glisser le menu
        navLinks.classList.toggle('nav-active');

        // Animation des liens (apparaissent un par un)
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Petit délai entre chaque lien pour un effet sympa
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation de l'icône hamburger (transforme en X)
        hamburger.classList.toggle('toggle');
    });

    // Fermer le menu quand on clique sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                 navLinks.classList.remove('nav-active');
                 hamburger.classList.remove('toggle');
                 links.forEach((link) => { link.style.animation = ''; });
            }
        });
    });
});