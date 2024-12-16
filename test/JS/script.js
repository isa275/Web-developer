let screenCounter = document.getElementById('screen-counter'),
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
    modalBtns = document.getElementsByClassName('btns');

screenCounter.innerHTML = '0';

countBtn.addEventListener('click', function () {
    screenCounter.innerHTML = + screenCounter.innerHTML + 1;
});

resetBtn.addEventListener('click', function () {
    screenCounter.innerHTML = '0';
});

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

const colors = [
    '#A52A2A',
    '#006400',
    '#3357FF',
    '#8E44AD',
    '#3498DB',
    '#FFFFFF',
    '#A9A9A9',
    '#000000',
    '#F2F54F',
    '#3E4953'
];

let color = 0;

colorCounter.addEventListener('click', function () {
    counter.style.backgroundColor = colors[color];

    color = (color + 1) % colors.length;
});

screenPlay.innerHTML = 'AUDIO';
screenPlay.style.fontSize = '25px';
screenPlay.style.display = 'flex';
screenPlay.style.justifyContent = 'center';
screenPlay.style.alignItems = 'center';
screenPlay.style.textAlign = 'center';

modalBtns[0].addEventListener('click', function () {
    if (counter.style.display === 'none') {
        counter.style.display = 'block';
        sectionPlay.style.display = 'none';
        modalBtns[0].innerHTML = 'AUDIO'
    } else {
        counter.style.display = 'none';
        sectionPlay.style.display = 'block';
        modalBtns[0].innerHTML = 'COUNTER'
    }
});

// Бисмилляяхир-рахмаанир-рахиим بسم الله الرحمن
