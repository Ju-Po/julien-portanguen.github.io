// Fichier : assets/js/theme.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Appliquer le thème sauvegardé au chargement de la page
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Écouter le changement sur l'interrupteur
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Sauvegarder le choix
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Sauvegarder le choix
        }
    });
});
