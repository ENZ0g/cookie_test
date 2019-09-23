'use strict'

city.oninput = () => {
    console.log(city.value);
    document.cookie = 'city=' + encodeURIComponent(city.value)
};

if (document.cookie) {
    city.value = document.cookie.split('=')[1];
    city.readOnly = 1;
};
