const videosYt = document.querySelectorAll('.videoYt'); 
const presentation = document.getElementById('presentation');
const presentation__inner = document.getElementById('presentation__inner');

function removeStr(str) {
    result = [];
    for (let i = 0; i < str.length; i++) { // i < str.length, чтобы не выходить за пределы строки
        if (!isNaN(parseInt(str[i]))) { // Проверяем, является ли символ числом
            result.push(str[i]); 
        }
    }
    return result.join('');
}

function getRandomElement(array) {
    if (array.length === 0) {
        return null; // Если массив пустой, возвращаем null
    }
    const randomIndex = Math.floor(Math.random() * array.length); // Генерируем случайный индекс
    return array[randomIndex]; // Возвращаем элемент по случайно выбранному индексу
}

videoLinks = ['https://www.youtube.com/embed/x2s37zP0eqI?si=aYBWTH1XcSXVG5Gm', 'https://www.youtube.com/embed/nSzvLnKyEww?si=MN9n3prRLPjT_9Xr', 'https://www.youtube.com/embed/iE39q-IKOzA?si=_wDCpCJcmi-P5cie']

videosYt.forEach((video) => {
    video.addEventListener('click', () => {
    
        let wWidth = video.offsetWidth;
        let wHeight = video.offsetHeight;
        
        const iframe = document.createElement('iframe');
    
        while (video.firstChild) {
            video.removeChild(video.firstChild);
        }
        
        iframe.src = getRandomElement(videoLinks);
        iframe.title = "YouTube video player";
        iframe.frameborder = "0";
        iframe.width = `${wWidth}`;
        iframe.height = `${wHeight}`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerpolicy = "strict-origin-when-cross-origin";
        iframe.allowfullscreen = true;
    
        // Находим родительский элемент (например, div с ID 'video-container')
        const videoContainer = document.querySelector('.video-container');
    
        // Добавляем iframe в родительский элемент
        video.appendChild(iframe);
    
    });
});
