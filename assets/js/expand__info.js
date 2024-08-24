const lines = document.querySelectorAll('.line');

lines.forEach((line) => {
    line.addEventListener('click', () => {
        // Находим FAQ внутри line
        const faq = line.querySelector('.FAQ');
        faq.classList.toggle('active'); 
    });
});