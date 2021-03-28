function move(elm) {
    elm.style.possiton = 'absolute'
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%'
    elm.style.left = Math.floor(Math.random()* 90 + 5 ) + '%'
}

var btn = document.querySelector('#no');
btn.addEventListener('mouseover', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#yes');
btn.addEventListener('click', function() {
    alert("Yes babe ❤, you too")
})

