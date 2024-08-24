const wheel = document.querySelector('.wheel');
const wheelContent = document.querySelector('.wheel__content'); //дочерний элемент

function rotateWheel(start, value) {
    let wheelWidth = parseFloat(wheel.getBoundingClientRect().height);
    let wheelContentWidth = parseFloat(wheelContent.getBoundingClientRect().height);
    function rotateElements(elements, start, value) {
        deg = start;
        elements.forEach((item) => {
            if (Array.from(elements).every((element, index) => element === document.querySelectorAll('.wheel__inner')[index])) {
                item.style.transform = `rotate(${deg}deg)`; // Используем обратные кавычки для форматирования
            } else {
                item.style.transform = `translateX(-50%) translateY(-${wheelWidth / 2 + wheelContentWidth / 2}px) rotate(${deg - start * 2}deg)`;
            }
            deg += value;
        });
    }
    rotateElements(document.querySelectorAll('.wheel__inner'), start, value);
    rotateElements(document.querySelectorAll('.wheel__content'), start, -value);
}
rotateWheel(-90, 30); //-90deg - это старт, откуда начинается первый элемент. 30deg - расстояние между элементами