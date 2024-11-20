let screenCounter = document.getElementById('screen-counter'),
    playBtn = document.getElementsByClassName('btn-play'),
    countBtn = document.getElementsByClassName('btn-count'),
    resetBtn = document.getElementsByClassName('btn-reset'),
    btnRun = document.getElementsByClassName('btn-run')

screenCounter.innerHTML = '0';

countBtn[0].addEventListener('click', function () {
    screenCounter.innerHTML = + screenCounter.innerHTML + 1;
});

resetBtn[0].addEventListener('click', function () {
    screenCounter.innerHTML = '0';
})
