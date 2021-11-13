let offset = 0;
const sliderLine = document.querySelector('.main_hits_wrapper');



document.querySelector('.main_hits_arrow_right').addEventListener('click', function () {
    offset = offset + 243;
    let container_width = document.querySelector('.container').offsetWidth;
    if(offset > (1328 - container_width)) { offset = 0; }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.main_hits_arrow_left').addEventListener('click', function () {
    offset = offset - 243;
    let container_width = document.querySelector('.container').offsetWidth;
    if(offset < 0) { offset = (1328 - container_width); }
    sliderLine.style.left = -offset + 'px';
});

window.addEventListener('resize', function(event) {
    offset = 0;
    sliderLine.style.left = -offset + 'px';
}, true);