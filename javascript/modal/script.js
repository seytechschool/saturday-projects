var open = document.querySelector('.click');

var close = document.querySelector('#close');


document.addEventListener('click', function(event) {
    if ( event.target.tagName !== 'BUTTON' &&
        {
        modal.style.display ='none';
    }
})

open.addEventListener('click', function(event) {
    modal.style.display = 'block'
})
close.addEventListener('click', function(event) {
    modal.style.display = 'none'
})