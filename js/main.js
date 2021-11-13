let offset = 0;
const sliderLine = document.querySelector('.main_hits_wrapper');

document.querySelector('.main_hits_arrow_right').addEventListener('click', function () {
    offset = offset + 265;
    let container_width = document.querySelector('.container').offsetWidth;
    let sliderLine_width = sliderLine.offsetWidth;
    if(offset > (sliderLine_width - container_width)) { offset = 0; }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.main_hits_arrow_left').addEventListener('click', function () {
    offset = offset - 265;
    let container_width = document.querySelector('.container').offsetWidth;
    let sliderLine_width = sliderLine.offsetWidth;
    if(offset < 0) { offset = (sliderLine_width - container_width); }
    sliderLine.style.left = -offset + 'px';
});

window.addEventListener('resize', function(event) {
    offset = 0;
    sliderLine.style.left = -offset + 'px';
}, true);