'use strict'

city.oninput = () => {
    console.log(city.value);
    document.cookie = 'city=' + encodeURIComponent(city.value)
};