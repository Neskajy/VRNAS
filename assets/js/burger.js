const burger = document.getElementById('burger__menu');
const burger__window = document.getElementById('burger__menu__window');
const burgerNavElems = document.querySelectorAll('.burger__nav__elem');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burger__window.classList.toggle('active');
    document.body.classList.toggle('body-no-scroll');
});

burgerNavElems.forEach((elem) => {
    elem.addEventListener('click', () => {
        burger.classList.toggle('active');
        burger__window.classList.toggle('active');
        document.body.classList.toggle('body-no-scroll');
    });
});

burger__window.addEventListener('animationend', () => {
    if (burger__window.style.display === 'flex') {
        burger__window.style.display = 'none';
    }
    else {
        burger__window.style.display = 'flex';
    }
});

burger__window.addEventListener('animationstart', () => {
    if (burger__window.style.zIndex === '101') {
        burger__window.style.display = '-100000';
    }
    else {
        burger__window.style.zIndex = '101';
    }
});