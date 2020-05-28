
document.querySelector('.open').addEventListener('click', openNav);



function openNav() {
    console.log("hamburger clicked")
    document.querySelector('nav').style.width = '257px';
    document.querySelector('main').style.marginLeft = "377px";
}

document.querySelector('.close').addEventListener('click', closeNav);

function closeNav() {
    document.querySelector('nav').style.width = "0px";
    document.querySelector('main').style.marginLeft = "13px";
}

