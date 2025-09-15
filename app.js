document.addEventListener('DOMContentLoaded', () => {

    // Adiciona sombra ao header ao rolar a página
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Configuração do ScrollReveal para animações de scroll
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });

    // Aplica a animação a todos os elementos com o atributo 'data-sr'
    document.querySelectorAll('[data-sr]').forEach(element => {
        const delay = parseInt(element.getAttribute('data-sr-delay') || '0', 10);
        sr.reveal(element, { delay });
    });

    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});

