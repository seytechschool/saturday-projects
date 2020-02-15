var open = document.querySelector('.open');
var close = document.querySelector('.close');

open.addEventListener('click', function () {
    document.querySelector('nav').style.width = '350px';
    document.querySelector('main').style.marginLeft = '370px';
});

close.addEventListener('click', function () {
    document.querySelector('nav').style.width = '0';
    document.querySelector('main').style.marginLeft = '20px';
});