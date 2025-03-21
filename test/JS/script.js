
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
    solutionTestBtns = document.getElementsByClassName('solution-test-btns')[0],
    sectionNumbersQuestions = document.getElementsByClassName('section-numbers-questions')[0],
    resultTitle = document.getElementsByClassName('result-title')[0],
    modalResultHome = document.getElementsByClassName('modal-result-home')[0],
    testBtnsLeft = document.getElementsByClassName('test-btns-left')[0],
    testBtnsRight = document.getElementsByClassName('test-btns-right')[0],
    numbersQuestions = document.getElementsByClassName('numbers-questions')[0],
    sectionRead = document.getElementsByClassName('section-read')[0],
    timerTest = document.getElementsByClassName('timer-test'),
    modalWindow = document.querySelector('.modal-window'),
    restartButton = document.querySelector('.restart-audio');
    modalBackground = document.getElementById('modalBackground'),
    currentTimeElement = document.getElementById('current-time'),
    durationTimeElement = document.getElementById('duration-time'),
    audioProgressBar = document.getElementById('audio-progress-bar'),
    progressElement = document.getElementById('progress'),
    resulsBtn = document.getElementById('resuls-btn'),
    resultsContainer = document.getElementById('results-container'),
    modalBtns = document.getElementsByClassName('btns'),
    testBtns = document.querySelectorAll('.test-btns'),
    number = document.getElementsByClassName('number'),
    btnsModal = document.querySelector('.btns-modal');

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
    'mp3/Sura__Al_Mulk.mp3',
    'mp3/Sura Al-Mu1minun .mp3'
];

const audioCounterText = [
    'Аль-Бакара - البقرة',
    'Сура Лукман - لقمان',
    'Коран - القرآن',
    'Сура Аль-Мульк - الملك',
    'Сура Ал-Мукминун - المؤمنون'
];

let isRestartActive = false;

restartButton.addEventListener('click', function () {
    isRestartActive = !isRestartActive;
    if (isRestartActive) {
        restartButton.style.backgroundColor = 'rgb(187, 187, 187)';
    } else {
        restartButton.style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

audio.addEventListener('ended', function () {
    if (isRestartActive) {
        audio.currentTime = 0;
        audio.play();
    } else {
        let newIndex = a + 1;
        if (newIndex >= audioCounter.length) newIndex = 0;
        audioCounterSwitch(newIndex);
    }
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
    '#000000',
    '#F2F54F',
    '#3E4953',
    '#ffff',
    '#A9A9A9'
];

let color = 0;

colorCounter.addEventListener('click', function () {
    counter.style.backgroundColor = colors[color];

    color = (color + 1) % colors.length;
});

// Модальное окно

const modalText = [
    'Скажи: Би-сми-Лля́хи-р-рахма́ни-р-рахи́м',
    'Скажи: Ашхаду алля иляха илляЛлах ва ашхаду анна Мухаммадан ‘абдуху ва расулюху',
    'Скажи: Аллахумма салли |аля Мухаммадин ва |аля али Мухаммад',
    'Скажи: СубханалЛахи ва бихамдихи, CубханалЛахи-ль-Азым',
    'Скажи: Ля хауЛя ва-Ля куввата илЛя биЛлях',
    'Скажи: АлхамдулиЛлах',
    'Скажи: Аллаху Акбар',
    'Скажи: ЛаилахаилЛалах',
    'Скажи: АстагфируЛлах',
    'Скажи: СубханАллах'
];

let currentIndex = 0;
let isModalOpen = false;
let modalTimeout;

function getNextModalText() {
    const text = modalText[currentIndex];
    currentIndex = (currentIndex + 1) % modalText.length;
    return text;
}

function showModal() {
    const nextText = getNextModalText();
    document.getElementById('modalText').innerText = nextText;
    modalBackground.classList.add('show');
    modalWindow.classList.add('show');
    isModalOpen = true;
}

function hideModal() {
    modalWindow.classList.remove('show');
    modalBackground.classList.remove('show');
    isModalOpen = false;

    modalTimeout = setTimeout(function () {
        showModal();
    }, 180000);
}

modalBackground.addEventListener('click', function (event) {
    if (event.target === modalBackground) {
        hideModal();
    }
});

window.addEventListener('load', function () {
    if (!isModalOpen) {
        setTimeout(showModal, 500);
    }
});

// Переключение между секциями

const blockModuls = [
    sectionPlay,
    sectionTests,
    counter,
    sectionRead
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
                modalBtns[0].innerHTML = 'HOME';
                break;
            case 1:
                sectionTests.style.display = 'flex';
                modalBtns[0].innerHTML = 'COUNTER';
                break;
            case 2:
                sectionPlay.style.display = 'block';
                modalBtns[0].innerHTML = 'COUNTER';
                break;
            case 3:
                sectionRead.style.display = 'block';
                modalBtns[0].innerHTML = 'COUNTER';    
            default:
                break;
        }
    });
}

// Переход на раздел тесты

startBtnTest.addEventListener('click', function () {
    testSolution.style.display = 'block';
    sectionNumbersQuestions.style.display = 'block';
    tests.style.display = 'none';
    modalBtns[0].style.display = 'none';
    modalBtns[1].style.display = 'none';
    modalBtns[2].style.display = 'none';
    modalBtns[3].style.display = 'none';
});

// Таймер 

let timer = 19 * 60 + 59;

const timeTest = document.querySelector('.timer-test');
const startButton = document.querySelector('.start-btn-test');
let timerInterval;

function timerCount() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    timeTest.textContent = formattedTime;

    if (timer <= 0) {
        clearInterval(timerInterval);
        stopTest();
    } else {
        timer--;
    }
}

startButton.addEventListener('click', function () {
    if (!timerInterval) {
        timerInterval = setInterval(timerCount, 1000);
    }
});

window.addEventListener('load', function () {
    timerCount();
});

// Массив с вопросами 

const questions = [
    {
        question: "Где родился Пророк Мухаммад ﷺ ?",
        options: ["Медина", "Мекка", "Таиф", "Ясриб"],
        correctAnswer: 1
    },

    {
        question: "В каком возрасте Пророк Мухаммад ﷺ получил первое откровение?",
        options: ["25 лет", "30 лет", "40 лет", "50 лет"],
        correctAnswer: 2
    },
    {
        question: "Какой ангел передал Пророку Мухаммаду ﷺ первое откровение?",
        options: ["Микаил", "Джибрил", "Исрафил", "Азраил"],
        correctAnswer: 1
    },
    {
        question: "Как звали первого мужчину, принявшего ислам?",
        options: ["Али ибн Абу Талиб", "Умар ибн аль-Хаттаб", "Абу Бакр ас-Сиддик", "Усман ибн Аффан"],
        correctAnswer: 2
    },
    {
        question: "Сколько лет длилось пророчество Пророка Мухаммада ﷺ ?",
        options: ["20 лет", "23 года", "25 лет", "30 лет"],
        correctAnswer: 1
    },
    {
        question: "Кто была первой женой Пророка Мухаммада ﷺ ?",
        options: ["Аиша бинт Абу Бакр", "Сауда бинт Зам’а", "Хадиджа бинт Хувайлид", "Фатима бинт Мухаммад"],
        correctAnswer: 2
    },
    {
        question: "Как называлась первая битва мусульман против курайшитов?",
        options: ["Битва при Ухуде", "Битва при Табуке", "Битва при Бадре", "Битва при Хунейне"],
        correctAnswer: 2
    },
    {
        question: "В каком году произошел Хиджра — переселение мусульман из Мекки в Медину?",
        options: ["610 г.", "615 г.", "622 г.", "630 г."],
        correctAnswer: 2
    },
    {
        question: "Кто стал первым халифом после смерти Пророка Мухаммада ﷺ ?",
        options: ["Умар ибн аль-Хаттаб", "Абу Бакр ас-Сиддик", "Усман ибн Аффан", "Али ибн Абу Талиб"],
        correctAnswer: 1
    },
    {
        question: "Кто был известен как «Меч Аллаха» (Сайфуллах)?",
        options: ["Халид ибн аль-Валид", "Умар ибн аль-Хаттаб", "Али ибн Абу Талиб", "Салман аль-Фариси"],
        correctAnswer: 0
    },
    {
        question: "Сколько лет Пророк Мухаммад ﷺ прожил в Мекке после начала откровений?",
        options: ["10 лет", "13 лет", "15 лет", "20 лет"],
        correctAnswer: 1
    },
    {
        question: "Как звали лучшего друга и ближайшего сподвижника Пророка Мухаммада ﷺ ?",
        options: ["Усман ибн Аффан", "Али ибн Абу Талиб", "Абу Бакр ас-Сиддик", "Саад ибн Абу Ваккас"],
        correctAnswer: 2
    },
    {
        question: "Кто был назначен главнокомандующим в битве при Муте?",
        options: ["Зайд ибн Хариса", "Халид ибн аль-Валид", "Абдуррахман ибн Ауф", "Умар ибн аль-Хаттаб"],
        correctAnswer: 0
    },
    {
        question: "Какой сахаб был известен своей щедростью и богатством, использовав его для помощи исламу?",
        options: ["Усман ибн Аффан", "Абдуллах ибн Масуд", "Убай ибн Кааб", "Абу Убайда ибн аль-Джаррах"],
        correctAnswer: 0
    },
    {
        question: "В каком возрасте умер Пророк Мухаммад ﷺ ?",
        options: ["60 лет", "61 год", "63 года", "65 лет"],
        correctAnswer: 2
    },
    {
        question: "Какая битва стала поворотной для мусульман, несмотря на поражение?",
        options: ["Битва при Бадре", "Битва при Ухуде", "Битва при Табуке", "Битва при Хандаке"],
        correctAnswer: 1
    },
    {
        question: "Как звали дядю Пророка Мухаммада ﷺ , который защищал его в Мекке?",
        options: ["Абу Лахаб", "Абу Талиб", "Аббас ибн Абд аль-Мутталиб", "Хамза ибн Абд аль-Мутталиб"],
        correctAnswer: 1
    },
    {
        question: "Кто был первым ребёнком, принявшим ислам?",
        options: ["Хасан ибн Али", "Хусейн ибн Али", "Али ибн Абу Талиб", "Зайд ибн Хариса"],
        correctAnswer: 2
    },
    {
        question: "Кто был известен как «переводчик Корана» (Таржуман аль-Коран)?",
        options: ["Ибн Аббас", "Ибн Масуд", "Убай ибн Кааб", "Саад ибн Муад"],
        correctAnswer: 0
    },
    {
        question: "В каком году мусульмане вернулись в Мекку (Фатх Мекка)?",
        options: ["6 год хиджры", "8 год хиджры", "10 год хиджры", "12 год хиджры"],
        correctAnswer: 1
    },
    {
        question: "Как звали няню Пророка Мухаммада ﷺ ?",
        options: ["Умм Аиман", "Халима ас-Саадия", "Барка", "Умм Хабиба"],
        correctAnswer: 1
    },
    {
        question: "Кто был известен как «Амин аль-умма» (Хранитель уммы)?",
        options: ["Абу Бакр ас-Сиддик", "Абу Убайда ибн аль-Джаррах", "Саад ибн Муад", "Хамза ибн Абд аль-Мутталиб"],
        correctAnswer: 1
    },
    {
        question: "Сколько сахабов участвовало в битве при Бадре?",
        options: ["214", "313", "400", "1000"],
        correctAnswer: 1
    },
    {
        question: "Кто был известен своей красноречивой речью и умением распространять ислам?",
        options: ["Абдуллах ибн Масуд", "Мусаб ибн Умайр", "Саад ибн Абу Ваккас", "Зайд ибн Хариса"],
        correctAnswer: 1
    },
    {
        question: "Какое событие произошло в году, известном как «Год печали» (Ам аль-Хузн)?",
        options: ["Хиджра в Медину", "Смерть Абу Талиба и Хадиджи", "Битва при Табуке", "Фатх Мекка"],
        correctAnswer: 1
    },
    {
        question: "В каком году была Битва при Ухуде?",
        options: ["1 год хиджры", "3 год хиджры", "5 год хиджры", "7 год хиджры"],
        correctAnswer: 1
    },
    {
        question: "Как звали мать Пророка Мухаммада ﷺ ?",
        options: ["Амира бинт Абд аль-Уддар", "Амина бинт Уайхаб", "Халима бинт Саадия", "Умм Аиман"],
        correctAnswer: 1
    },
    {
        question: "Кто был первым рабом, принявшим ислам?",
        options: ["Зайд ибн Хариса", "Билал ибн Рабах", "Сумая бинт Хайят", "Абу Фахм"],
        correctAnswer: 1
    },
    {
        question: "Как назывался первый мусульманский календарь?",
        options: ["Хиджри", "Мекканский", "Лунный", "Суннитский"],
        correctAnswer: 0
    },
    {
        question: "Как называлась последняя битва, в которой участвовал Пророк Мухаммад ﷺ ?",
        options: ["Битва при Бадре", "Битва при Ухуде", "Битва при Табуке", "Битва при Хунейне"],
        correctAnswer: 2
    },
    {
        question: "Кто был первым человеком, принявшим ислам среди женщин?",
        options: ["Аиша бинт Абу Бакр", "Фатима бинт Мухаммад", "Хадиджа бинт Хувайлид", "Сауда бинт Зам"],
        correctAnswer: 2
    },
    {
        question: "Сколько раз Пророк Мухаммад ﷺ совершил хадж до переселения?",
        options: ["Один", "Два", "Три", "Четыре"],
        correctAnswer: 2
    },
    {
        question: "Как называется священная мечеть, расположенная в Медине и построенная для молитв Пророка Мухаммада ﷺ?",
        options: ["Мечеть аль-Харам", "Мечеть аль-Набави", "Мечеть аль-Акса", "Мечеть Кибла"],
        correctAnswer: 1
    },
    {
        question: "Кто из сподвижников Пророка Мухаммада ﷺ пал шахидом в битве при Ухуде?",
        options: ["Абдуллах ибн Масуд", "Хамза ибн Абд аль-Мутталиб", "Али ибн Абу Талиб", "Умар ибн аль-Хаттаб"],
        correctAnswer: 1
    },
    {
        question: "В каком году родился Пророк Мухаммад ﷺ ?",
        options: ["580 г.", "600 г.", "610 г.", "570 г."],
        correctAnswer: 3
    },
    {
        question: "Как называлась мечеть, в которой Пророк Мухаммад ﷺ совершил ночное путешествие и вознесение на небеса?",
        options: ["Мечеть аль-Харам", "Мечеть аль-Набави", " Мечеть аль-Акса", "Мечеть Табук"],
        correctAnswer: 2
    },
    {
        question: "Какое событие произошло в 630 году?",
        options: ["Битва при Ухуде", " Фатх Мекка (Открытие Мекки)", "Хиджра", "Битва при Бадре"],
        correctAnswer: 1
    },
    {
        question: "Какое событие произошло в Год слона (Ам аль-Фил)?",
        options: ["Построение Мечети аль-Харам", "Рождение Пророка Мухаммада ﷺ", "Первое откровение Пророку", "Открытие Мекки"],
        correctAnswer: 1
    },
    {
        question: "Кто был главнокомандующим мусульманской армии в битве при Бадре?",
        options: ["Пророк Мухаммад ﷺ", "Абу Бакр ас-Сиддик", "Халид ибн аль-Валид", "Али ибн Абу Талиб"],
        correctAnswer: 0
    },
    {
        question: "Какая из дочерей Пророка Мухаммада ﷺ считается одной из самых благородных фигур в исламе, являясь символом верности и терпения?",
        options: ["Асия бинт Мухаммад", "Халима бинт Мухаммад", "Фатима бинт Мухаммад", "Зейнаб бинт Мухаммад"],
        correctAnswer: 2
    }
];

// Переключение вопросов и результаты теста

let currentQuestionIndex = 0;
let userAnswers = Array(questions.length).fill(null);
let answeredQuestions = Array(questions.length).fill(false);

function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;

    question.options.forEach((option, index) => {
        document.getElementById(`answer-${index + 1}`).textContent = option;
        const optionInput = document.getElementById(`option-${index + 1}`);
        optionInput.checked = userAnswers[currentQuestionIndex] === index;

        questionButtons.forEach(button => button.style.border = '');
        questionButtons[currentQuestionIndex].style.border = '2px solid black';
    });

    questionButtons.forEach((button, index) => {
        if (answeredQuestions[index]) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function checkIfTestCompleted() {
    const allAnswered = userAnswers.every(answer => answer !== null);
    const showResultsButton = document.getElementById('show-results-btn');

    if (allAnswered) {
        showResultsButton.style.display = 'inline-block';
    }
}

const showResultsButton = document.getElementById('show-results-btn');

showResultsButton.addEventListener('click', function () {
    resultsContainer.style.display = 'block';

    showResultsButton.style.display = 'none';
    resultTitle.style.display = 'block';

    showResults();
});

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    answeredQuestions[currentQuestionIndex] = true;
    updateQuestion();
    checkIfTestCompleted();
}

function stopTest() {
    modalResultHome.style.display = 'block';
    sectionTests.style.display = 'none';
    sectionNumbersQuestions.style.display = 'none';
}

function showResults() {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = '';
    resultsContainer.style.width = '500px';
    resultsContainer.style.margin = 'auto';

    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = userAnswers[index];
        if (selectedAnswer === question.correctAnswer) {
            correctAnswersCount++;
        }
    });

    const percentage = (correctAnswersCount / questions.length) * 100;

    let grade;
    let resultText;
    if (percentage >= 90) {
        grade = 5;
        resultText = "Отлично!";
    } else if (percentage >= 75) {
        grade = 4;
        resultText = "Хорошо!";
    } else if (percentage >= 50) {
        grade = 3;
        resultText = "Удовлетворительно";
    } else {
        grade = 2;
        resultText = "Плохо";
    }

    const resultTitle = document.createElement('h3');
    resultTitle.textContent = `Результат: ${percentage.toFixed(2)}%`;
    resultsContainer.appendChild(resultTitle);

    const gradeText = document.createElement('p');
    gradeText.textContent = `Оценка: ${grade} (${resultText})`;
    resultsContainer.appendChild(gradeText);

    questions.forEach((question, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');

        const questionText = document.createElement('p');
        questionText.textContent = `Вопрос: ${question.question}`;
        resultDiv.appendChild(questionText);

        const selectedAnswer = userAnswers[index];
        const selectedAnswerText = selectedAnswer !== null ? question.options[selectedAnswer] : 'Не выбран';
        const correctAnswerText = question.options[question.correctAnswer];

        const resultText = document.createElement('p');
        resultText.textContent = `Ответ: ${selectedAnswerText} (Правильный ответ: ${correctAnswerText})`;
        resultDiv.appendChild(resultText);

        if (selectedAnswer === question.correctAnswer) {
            resultDiv.classList.add('correct');
        } else {
            resultDiv.classList.add('incorrect');
        }

        resultsContainer.appendChild(resultDiv);
    });

    resultsContainer.style.display = 'block';
    resultTitle.style.display = 'block';
    testSolution.style.display = 'none';
    sectionNumbersQuestions.style.display = 'none';
}

testBtnsLeft.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
    } else {
        currentQuestionIndex = questions.length - 1;
    }
    updateQuestion();
});

testBtnsRight.addEventListener('click', function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
    } else {
        currentQuestionIndex = 0;
    }
    updateQuestion();
});

window.addEventListener('load', function () {
    updateQuestion();
});

const questionButtons = document.querySelectorAll('.numbers-questions');

function showQuestion(index) {
    currentQuestionIndex = index;
    updateQuestion();
}

questionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showQuestion(index);
    });
});

const answerInputs = document.querySelectorAll('input[type="radio"]');
answerInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        const answerIndex = parseInt(input.value);
        selectAnswer(answerIndex);
    });
});

const viewAnswersButton = document.getElementById('resuls-btn');
viewAnswersButton.addEventListener('click', function () {
    resultsContainer.style.display = 'block';
    resultTitle.style.display = 'block';
    testSolution.style.display = 'none';
    sectionNumbersQuestions.style.display = 'none';

    showResults();
});

resulsBtn.addEventListener('click', function () {
    modalResultHome.style.display = 'none';
});

// На главную

document.addEventListener("DOMContentLoaded", function () {
    testBtns.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = '/test';
        });
    });
});
