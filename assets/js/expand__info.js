const lines = document.querySelectorAll('.line');
const services = document.querySelectorAll('.service');

lines.forEach((line) => {
    line.addEventListener('click', () => {
        // Находим FAQ внутри line
        const faq = line.querySelector('.FAQ');
        faq.classList.toggle('active'); 
    });
});

services.forEach((service) => {
    service.addEventListener('click', () => {
        // Находим FAQ внутри line
        service.classList.toggle('active'); 
    });
});