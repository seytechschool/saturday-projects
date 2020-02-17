var navBar = document.querySelector('#nav');
var aside = document.querySelector('#side');
var closeIcon = document.querySelector('#close');
var openIcon = document.querySelector('#open');

closeIcon.addEventListener('click', function(event){
    aside.style.margin ='0 20px 20px 20px';
    navBar.style.display = 'none'
})

openIcon.addEventListener('click', function(event) {
    aside.style.margin = '0 20px 20px 280px';
    navBar.style.display = 'block'
})