var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter= 1;
    }
},5000);

function gotoLink(this){
console.log(link.value);
location.href = 'https://www.holmesplace.de/mitglied-werden';
window.open(link.value);
}

let list = document.querySelector('.slider ..list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
     if(active + 1 > lengthItems){
        active = 0;
     }else{
        active = active + 1;
     }
    reloadSlider();
}

prev.onlick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active -1;
    }
}
let refreshSlider = setInterval(()=>{next.click()},3000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDots = document.querySelector('.slider .dots li.active');
    lastActiveDots.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()},5000);
}
dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})