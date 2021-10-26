const modal = document.querySelector ('.js-modal')
const modalClose = document.querySelector ('.js-modal-close')
const modalContainer = document.querySelector ('.js-modal-container')

function move(elm) {
    elm.style.possiton = 'absolute'
    elm.style.top = Math.floor(Math.random() * 50) + '%'
    elm.style.right = Math.floor(Math.random()* 50 ) + '%'
}

function showForm() {
    modal.classList.add('open')
}

function closeForm() {
    modal.classList.remove('open')
}

function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

var btn = document.querySelector('#no');
btn.addEventListener('mouseover', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#no');
btn.addEventListener('click', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#yes');
btn.addEventListener('click', showForm);

btn.addEventListener('click', function() {
    var audio = document.getElementById("music");
    audio.play();
})


modalClose.addEventListener('click', closeForm);
modalClose.addEventListener('click', function() {
    var audio = document.getElementById("music");
    audio.load();
})
modal.addEventListener('click', closeForm);
modal.addEventListener('click', function() {
    var audio = document.getElementById("music");
    audio.load();
})
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
    var audio = document.getElementById("music");
    audio.muted();
})
