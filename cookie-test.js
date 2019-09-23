'use strict'

city.oninput = () => {
    console.log(city.value);
    document.cookie = 'city=' + encodeURIComponent(city.value)
};

let current_city = document.cookie.split('=')[1]

if (current_city) {
    city.value = current_city;
    city.readOnly = 1;
    reset_btn.style.display = 'block';
    reset_btn.onclick = () => {
        document.cookie = '';
        city.readOnly = 0;
        reset_btn.style.display = 'none';
    }
};