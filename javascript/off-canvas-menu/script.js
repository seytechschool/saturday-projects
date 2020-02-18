document.body.style.backgroundColor = 'grey';

var nav = document.querySelectorAll('.nav')[0];
var content = document.querySelectorAll('.content')[0];

var closeIcon = document.querySelector('#close');
var openIcon = document.querySelector('#open');

openIcon.style.display = 'none';

closeIcon.addEventListener('click', function(){
    
    nav.style.flexGrow = '0';
    nav.style.transition = 'all 1s';
    nav.style.overflow = 'hidden';
    openIcon.style.display = 'inline-block';
})

openIcon.addEventListener('click', function(event){
    openIcon.style.display = 'none';
    nav.style.display = 'flex';
    nav.style.flexGrow = '2';
    nav.style.transition = 'all 1s';
})