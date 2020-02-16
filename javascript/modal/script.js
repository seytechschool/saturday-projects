var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.layer').style.backgroundColor = '#B1B1B1';
    document.querySelector('main').style.backgroundColor = 'white';
});

var close = document.querySelector('a');

close.addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.layer').style.backgroundColor = 'white';
});