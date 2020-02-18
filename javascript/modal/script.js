
var btn = document.querySelectorAll('.btn')[0];

var modal = document.querySelector('#modal');

var close = document.querySelector('#close');

modal.style.display = 'none';

document.addEventListener('click', function(e) {
    if(e.target.tagName !== 'BUTTON' 
    && e.target.closest('#modal') == null) {
        modal.style.display = 'none';   
    }
})

close.addEventListener('click', function(){
    modal.style.display = 'none';
})

btn.addEventListener('click', function(){
    modal.style.display = 'block';
})



