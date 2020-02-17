var navBar = document.querySelector('#nav');
var aside = document.querySelector('#side');
var closeIcon = document.querySelector('#close');
var openIcon = document.querySelector('#open');

closeIcon.addEventListener('click', function(event){
   // event.target.navBar.style.display = 'none';
    // aside.style.width = '100%';
    aside.style.margin ='0 20px 20px 20px';
    // navBar.style.display = 'none';
    navBar.style.width = '0';
    navBar.style.visibility = 'hidden';
    closeIcon.style.visibility = 'hidden';
    // aside.style.zIndex = '2';
    aside.style.transition = 'all .5s'
    navBar.style.transition = 'all .5s'
    
})

openIcon.addEventListener('click', function(event) {
    //event.target.navBar.style.display = 'block';
    // aside.style.width = '70%';
    aside.style.margin = '0 20px 20px 280px';
    // navBar.style.display = 'block';
    navBar.style.width = '270px';
    closeIcon.style.visibility = 'visible';
    navBar.style.visibility = 'visible';
    aside.style.transition = 'all .5s'
    // navBar.style.transition = 'all .5s'
})


