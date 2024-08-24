const windowepta = document.getElementById('window_epta'); 
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

presentation.style.height = (presentation__inner.offsetHeight / 1.57) + 'px';

// presentation.style.height = String(removeStr(presentation__inner.style.height) / 2) + 'px';

windowepta.addEventListener('click', () => {
  // Очищаем элемент с помощью цикла while
    
    const iframe = document.createElement('iframe');
    iframe.width = document.getElementById('windowepta').offsetWidth;
    iframe.height = '500';

    while (windowepta.firstChild) {
        windowepta.removeChild(windowepta.firstChild);
    }
    windowepta.style.height = '500px';

    // Создаем iframe

    console.log(iframe.width);

    iframe.src = "https://www.youtube.com/embed/6rHuNVxoz08?si=9_hMOXugpLs_HWaY";
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerpolicy = "strict-origin-when-cross-origin";
    iframe.allowfullscreen = true;

    // Находим родительский элемент (например, div с ID 'video-container')
    const videoContainer = document.getElementById('video-container');

    // Добавляем iframe в родительский элемент
    windowepta.appendChild(iframe);

});