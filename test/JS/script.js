let screenCounter = document.getElementById('screen-counter'),
    playBtn = document.getElementsByClassName('btn-play')[0],
    countBtn = document.getElementsByClassName('btn-count')[0],
    resetBtn = document.getElementsByClassName('btn-reset')[0],
    btnRun = document.getElementsByClassName('btn-run')[0],
    audio = document.getElementById('audio');

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
        audio.play(); 
    } else {
        audio.pause(); 
    }
});
