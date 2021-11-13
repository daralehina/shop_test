let header_icon_counter = document.querySelectorAll('.header_icon_counter');
for (let elem of header_icon_counter){
    if (elem.innerHTML == 0) { elem.style.display = 'none'; };
}

let counter_office = document.querySelector('.counter_office');

let counter_stat = document.querySelector('.counter_stat');

let counter_like = document.querySelector('.counter_like');

let counter_basket = document.querySelector('.counter_basket');

let main_hits_cart_button = document.querySelectorAll('.main_hits_cart_button');
for (let elem of main_hits_cart_button){
    elem.addEventListener('click', function () {
        counter_basket.style.display = 'block';
        counter_basket.innerHTML = Number(counter_basket.innerHTML) + 1;
    });
}

