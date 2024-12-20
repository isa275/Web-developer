
// Получения элементов со страницы

const screenCounter = document.getElementById('screen-counter'),
    audio = document.getElementById('audio'),
    playBtn = document.getElementsByClassName('btn-play')[0],
    countBtn = document.getElementsByClassName('btn-count')[0],
    resetBtn = document.getElementsByClassName('btn-reset')[0],
    btnRun = document.getElementsByClassName('btn-run')[0],
    btnLeft = document.getElementsByClassName('btn-left')[0],
    btnRight = document.getElementsByClassName('btn-right')[0],
    counter = document.getElementsByClassName('counter')[0],
    colorCounter = document.getElementsByClassName('color-counter')[0],
    screenPlay = document.getElementsByClassName('screen-play')[0],
    sectionPlay = document.getElementsByClassName('section-play')[0],
    sectionTests = document.getElementsByClassName('section-tests')[0],
    modalWindow = document.querySelector('.modal-window'),
    modalBackground = document.getElementById('modalBackground'),
    modalBtns = document.getElementsByClassName('btns');

// Изначальное значение счетчика 

screenCounter.textContent = '0';

// Увеличение числа на один

countBtn.addEventListener('click', function () {
    screenCounter.textContent = (parseInt(screenCounter.textContent) + 1).toString();
});

// Перезапуск счетчика

resetBtn.addEventListener('click', function () {
    screenCounter.textContent = '0';
});

// Воспроизведение аудиофайла

playBtn.addEventListener('click', function () {
    btnRun.classList.toggle('rectangular');

    if (audio.paused) {
        screenPlay.innerHTML = 'Аль-Бакара - البقرة';
        audio.play();
        modalBtns[0].disabled = true;
        modalBtns[1].disabled = true;
        modalBtns[2].disabled = true;

        modalBtns[0].style.color = 'black';
        modalBtns[1].style.color = 'black';
        modalBtns[2].style.color = 'black';
    } else {
        audio.pause();
        modalBtns[0].disabled = false;
        modalBtns[1].disabled = false;
        modalBtns[2].disabled = false;
    }
});

// Переключение между аудиофайлами

const audioCounter = [
    'mp3/audio.mp3',
    'mp3/Sura_Lukman (mp3cut.net).mp3',
    'mp3/Prekrasnoe_chtenie_Korana.mp3',
    'mp3/Sura__Al_Mulk.mp3'
];


const audioCounterText = [
    'Аль-Бакара - البقرة',
    'Сура Лукман - لقمان',
    'Коран - القرآن',
    'Сура Аль-Мульк - الملك'
];

let a = 0;

function audioCounterSwitch(index) {
    if (index >= 0 && index < audioCounter.length) {
        a = index;
        audio.src = audioCounter[a];
        audio.play();
        screenPlay.innerHTML = audioCounterText[a];
    }
}

btnLeft.addEventListener('click', function () {
    if (!audio.paused) {
        let newIndex = a - 1;
        if (newIndex < 0) newIndex = audioCounter.length - 1;
        audioCounterSwitch(newIndex);
    }
});

btnRight.addEventListener('click', function () {
    if (!audio.paused) {
        let newIndex = a + 1;
        if (newIndex >= audioCounter.length) newIndex = 0;
        audioCounterSwitch(newIndex);
    }
});

screenPlay.innerHTML = 'بسم الله الرحمن <br>Во имя Аллаха, Милостивого, Милосердного!';
screenPlay.style.fontSize = '25px';
screenPlay.style.display = 'flex';
screenPlay.style.justifyContent = 'center';
screenPlay.style.alignItems = 'center';
screenPlay.style.textAlign = 'center';

// Переключение между цветами

const colors = [
    '#A52A2A',
    '#006400',
    '#3357FF',
    '#8E44AD',
    '#3498DB',
    '#FFFFFF',
    '#3e4953',
    '#000000',
    '#F2F54F',
    '#3E4953'
];

let color = 0;

colorCounter.addEventListener('click', function () {
    counter.style.backgroundColor = colors[color];

    color = (color + 1) % colors.length;
});

// Модальное окно

window.addEventListener('load', function () {
    setTimeout(function () {
        modalBackground.classList.add('show');
        modalWindow.classList.add('show');
    }, 500);
});

function hideModal() {
    modalWindow.classList.remove('show');
    modalBackground.classList.remove('show');

    setTimeout(function () {
        modalBackground.style.visibility = 'hidden';
    }, 500);
}

modalBackground.addEventListener('click', function (event) {
    if (event.target === modalBackground) {
        hideModal();
    }
});

// Переключение между секциями

const blockModuls = [
    sectionPlay,
    sectionTests,
    counter
];

function hideAllBlocks() {
    blockModuls.forEach(block => block.style.display = 'none');
}

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function () {
        hideAllBlocks();

        switch (i) {
            case 0:
                counter.style.display = 'block';
                modalBtns[0].innerHTML = 'SEND';
                break;
            case 1:
                sectionTests.style.display = 'flex';
                modalBtns[0].innerHTML = 'COUNTER';
                break;
            case 2:
                sectionPlay.style.display = 'block';
                modalBtns[0].innerHTML = 'COUNTER';
                break;
            default:
                break;
        }
    });
}