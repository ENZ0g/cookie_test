'use strict'

city.oninput = () => {
    console.log(city.value);
    document.cookie = 'city=' + encodeURIComponent(city.value)
};

let current_city = document.cookie.split('=')[1]

if (current_city) {
    city.value = decodeURIComponent(current_city);
    city.readOnly = 1;
    reset_btn.style.display = 'block';
    li_1.style.color = '#ced4da';
    li_2.style.color = '#ced4da';
    li_3.style.display = 'list-item';
    reset_btn.onclick = () => {
        document.cookie = '';
        city.readOnly = 0;
        reset_btn.style.display = 'none';
        li_1.style.color = 'white';
        li_2.style.color = 'white';
        li_3.style.display = 'none';
    }
};
