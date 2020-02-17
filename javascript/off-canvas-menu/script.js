var navBar = document.querySelector('#nav');
var aside = document.querySelector('#side');
var closeIcon = document.querySelector('#close');
var openIcon = document.querySelector('#open');

closeIcon.addEventListener('click', function(event){
   // event.target.navBar.style.display = 'none';
    // aside.style.width = '100%';
    aside.style.margin ='0 20px 20px 20px';
    navBar.style.display = 'none'
})

openIcon.addEventListener('click', function(event) {
    //event.target.navBar.style.display = 'block';
    // aside.style.width = '70%';
    aside.style.margin = '0 20px 20px 280px';
    navBar.style.display = 'block'
})



