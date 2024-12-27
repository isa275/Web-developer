
// DOM-элементы со страницы 

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
    timeInfo = document.getElementsByClassName('time-info')[0],
    testText = document.getElementsByClassName('test-text')[0],
    tests = document.getElementsByClassName('tests')[0],
    testSolution = document.getElementsByClassName('test-solution')[0],
    startBtnTest = document.getElementsByClassName('start-btn-test')[0],
    textTitle = document.getElementsByClassName('text-title')[0],
    blockTest = document.getElementsByClassName('block-test')[0],
    timerTest = document.getElementsByClassName('timer-test'),
    modalWindow = document.querySelector('.modal-window'),
    modalBackground = document.getElementById('modalBackground'),
    currentTimeElement = document.getElementById('current-time'),
    durationTimeElement = document.getElementById('duration-time'),
    audioProgressBar = document.getElementById('audio-progress-bar'),
    progressElement = document.getElementById('progress'),
    modalBtns = document.getElementsByClassName('btns'),
    solutionTestBtns = document.getElementsByClassName('solution-test-btns')[0],
    sectionCounter = document.getElementsByClassName('section-counter');

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
    const isPaused = audio.paused;

    if (isPaused) {
        audio.play();
        timeInfo.style.display = 'block';
        screenPlay.innerHTML = audioCounterText[a];

        Array.from(modalBtns).forEach(btn => {
            btn.disabled = true;
            btn.style.color = 'black';
        });
    } else {
        audio.pause();
        Array.from(modalBtns).forEach(btn => {
            btn.disabled = false;
            btn.style.color = '';
        });
    }
});

// Переключение аудиофайлов

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

audio.addEventListener('ended', function () {
    let newIndex = a + 1;
    if (newIndex >= audioCounter.length) newIndex = 0;
    audioCounterSwitch(newIndex);
});

let a = 0;

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

function audioCounterSwitch(index) {
    if (index >= 0 && index < audioCounter.length) {
        a = index;
        audio.src = audioCounter[a];
        audio.play();
        screenPlay.innerHTML = audioCounterText[a];
    }
}

screenPlay.innerHTML = 'بسم الله الرحمن <br>Во имя Аллаха, Милостивого, Милосердного!';
screenPlay.style.fontSize = '25px';
screenPlay.style.display = 'flex';
screenPlay.style.justifyContent = 'center';
screenPlay.style.alignItems = 'center';
screenPlay.style.textAlign = 'center';

function updateAudioProgress() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    if (!isNaN(duration)) {
        const currentTimeFormatted = formatTime(currentTime);
        const durationTimeFormatted = formatTime(duration);
        currentTimeElement.textContent = currentTimeFormatted;
        durationTimeElement.textContent = durationTimeFormatted;

        const progressPercentage = (currentTime / duration) * 100;
        progressElement.style.width = progressPercentage + '%';
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

audioProgressBar.addEventListener('click', function (event) {
    const progressBarWidth = audioProgressBar.offsetWidth;
    const clickPosition = event.offsetX;
    const newTime = (clickPosition / progressBarWidth) * audio.duration;
    audio.currentTime = newTime;
});

audio.addEventListener('timeupdate', updateAudioProgress);

audio.addEventListener('loadedmetadata', function () {
    const duration = audio.duration;
    const durationFormatted = formatTime(duration);
    durationTimeElement.textContent = durationFormatted;
});


// Переключение между цветами

const colors = [
    '#A52A2A',
    '#228B22',
    '#3357FF',
    '#8E44AD',
    '#3498DB',
    '#FFFFFF',
    '#3e4953',
    '#000000',
    '#F2F54F',
    '#3E4953',
    '#A9A9A9'
];

let color = 0;

colorCounter.addEventListener('click', function () {
    counter.style.backgroundColor = colors[color];

    color = (color + 1) % colors.length;
});

// Модальное окно

// const modalText = [
//     'Би-сми-Лля́хи-р-рахма́ни-р-рахи́м Во имя Аллаха, Милостивого, Милосердного!',
//     'Ашхаду алля иляха илляЛлах ва ашхаду анна Мухаммадан ‘абдуху ва расулюху',
//     'АлхамдулиЛлах',
//     'Аллаху Акбар',
//     'ЛаилахаилЛалах',
//     'АстагфируЛлах',
//     'СубханАллах'
// ];

// let currentIndex = 0;
// let isModalOpen = false;
// let modalTimeout;

// function getNextModalText() {
//     const text = modalText[currentIndex];
//     currentIndex = (currentIndex + 1) % modalText.length;
//     return text;
// }

// function showModal() {
//     const nextText = getNextModalText();
//     document.getElementById('modalText').innerText = nextText;
//     modalBackground.classList.add('show');
//     modalWindow.classList.add('show');
//     isModalOpen = true;
// }

// function hideModal() {
//     modalWindow.classList.remove('show');
//     modalBackground.classList.remove('show');
//     isModalOpen = false;

//     modalTimeout = setTimeout(function () {
//         showModal();
//     }, 180000); 
// }

// modalBackground.addEventListener('click', function (event) {
//     if (event.target === modalBackground) {
//         hideModal();
//     }
// });

// window.addEventListener('load', function () {
//     if (!isModalOpen) {
//         setTimeout(showModal, 500);
//     }
// });

// Переключение между секциями

const blockModuls = [
      sectionPlay,
      sectionTests,
      counter
];

testText.innerHTML = 'بسم الله الرحمن <br>Во имя Аллаха, Милостивого, Милосердного!';
sectionTests.style.textAlign = 'center';

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

// Секция тесты

textTitle.innerHTML = 'بسم الله الرحمن  <br>Во имя Аллаха, Милостивого, Милосердного!';

startBtnTest.addEventListener('click', function () {
   tests.style.display = 'none';
   testSolution.style.display = 'block';
   modalBtns[0].style.display = 'none';
   modalBtns[1].style.display = 'none';
   modalBtns[2].style.display = 'none';
});

solutionTestBtns.addEventListener('click', function () {
    counter.style.display = 'block';
    modalBtns[0].style.display = 'block';
    modalBtns[1].style.display = 'block';
    modalBtns[2].style.display = 'block';
    testSolution.style.display = 'none';
});