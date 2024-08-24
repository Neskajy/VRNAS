let sliderImages = document.querySelectorAll('.slide'),
    sliderParent = document.querySelector('.slider'),
    dotsContainer = document.querySelector('.dots'),
    swiperSlider = document.getElementById('swiper-slider');

let sliderLength = sliderImages.length,
    sliderCount = 0,//Math.floor(sliderImages.length / 2)
    sliderWidth = swiperSlider.offsetWidth,
    windowWidth = window.screen.width,
    imgVisibleCount,
    startX,
    endX,
    autoplayInterval;

console.log(sliderWidth);

if (sliderWidth > 950) {
    imgVisibleCount = 3;
} else if (sliderWidth > 650 && sliderWidth < 950) {
    imgVisibleCount = 2;
} else if (sliderWidth < 650) {
    imgVisibleCount = 1;
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
});


function createDots() {
    for (let i = 0; i < sliderImages.length - (imgVisibleCount - 1); i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    };
}

createDots();
updateDots()

if (dotsContainer) {
    const dotChilds = Array.from(dotsContainer.children);
    for (let childCount = 0; childCount < dotChilds.length; childCount++) {
        dotChilds[childCount].addEventListener('click', () => {
            sliderCount = childCount;
            nextSlide(plusCount=false);
        });
    };
} else {
    console.error('Элемент с классом .dots не найден');
}


function updateDots() {
    // Удалить класс 'active' у всех точек
    Array.from(dotsContainer.children).forEach(dot => {
        dot.classList.remove('active');
    });

    // Убедиться, что sliderCount находится в допустимом диапазоне
    if (sliderCount >= 0 && sliderCount < dotsContainer.children.length) {
        dotsContainer.children[sliderCount].classList.add('active');
    }
}


function showSlide() {
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    sliderParent.style.gap = '0px';
    rollSlide();
}

showSlide();
// focusSlide();

function nextSlide(plusCount=true) {
    if (plusCount) sliderCount++;
    if (sliderCount > sliderImages.length - imgVisibleCount) sliderCount = 0;
    rollSlide();
    // unfocusSlide();
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - imgVisibleCount;
    rollSlide();

}

function rollSlide() {
    slider.style.transform = `translateX(${(-sliderCount * sliderWidth / imgVisibleCount) - Number(sliderParent.style.gap.replace('px', ''))}px)`;
    updateDots();
    // focusSlide();
}

function focusSlide() {
    [sliderImages[sliderCount].style.opacity, sliderImages[sliderCount + 2].style.opacity] = ['.5', '.5'];
}

function unfocusSlide() {
    [sliderImages[sliderCount - 1].style.opacity, sliderImages[sliderCount++].style.opacity] = ['1', '1'];
}

autoplayInterval = setInterval(nextSlide, 7000); // Меняйте слайды каждые 3 секунды

swiperSlider.addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
});

swiperSlider.addEventListener('mouseout', () => {
    autoplayInterval = setInterval(nextSlide, 7000);
});

slider.addEventListener('resize', showSlide);

sliderParent.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    initialPosition = sliderCount * (windowWidth / imgVisibleCount);
    sliderParent.addEventListener('mousemove', onMouseMove);
});

sliderParent.addEventListener('mouseup', () => {
    sliderParent.removeEventListener('mousemove', onMouseMove);
    if (endX !== undefined) {
        if (startX > endX + windowWidth / 2) {
            nextSlide();
        } else if (startX < endX - windowWidth / 2) {
            prevSlide();
        } else if (startX > endX + 50) {
            nextSlide();
        } else if (startX < endX - 50) {
            prevSlide();
        }
    }
    startX = undefined;
    endX = undefined;
});

function onMouseMove(e) {
    if (startX !== undefined) {
        endX = e.clientX;
        // slider.style.transform = `translateX(-${initialPosition - (endX - startX)}px)`;
    }
}
