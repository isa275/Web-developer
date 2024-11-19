let screenCounter = document.getElementById('screen-counter'),
    colorBtn = document.getElementsByClassName('btn-color'),
    countBtn = document.getElementsByClassName('btn-count'),
    resetBtn = document.getElementsByClassName('btn-reset')

screenCounter.innerHTML = '0';

countBtn[0].addEventListener('click', function () {
    screenCounter.innerHTML = + screenCounter.innerHTML + 1;
});

resetBtn[0].addEventListener('click', function () {
    screenCounter.innerHTML = '0';
})
