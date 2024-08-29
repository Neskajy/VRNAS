const burger = document.getElementById('burger__menu');
const burger__window = document.getElementById('burger__menu__window');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burger__window.classList.toggle('active');
    document.body.classList.toggle('body-no-scroll');
});

burger__window.addEventListener('animationend', () => {
    if (burger__window.style.display === 'flex') {
        burger__window.style.display = 'none';
    }
    else {
        burger__window.style.display = 'flex';
    }
});