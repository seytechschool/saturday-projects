var openButton = document.querySelector('.hit');
var modal = document.querySelector('.modal');
var closeButton = document.querySelector('#close');

document.addEventListener('click', function(event) {
    if ( event.target.tagName !== 'BUTTON' &&
        event.target.closest('.modal') === null)  {
        modal.style.display ='none';
    }
})

openButton.addEventListener('click', function(event) {
    modal.style.display = 'block'
})
closeButton.addEventListener('click', function(event) {
    modal.style.display = 'none'
})
