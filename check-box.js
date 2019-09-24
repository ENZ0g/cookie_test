const all_check_boxes = document.querySelectorAll('input');

btn_0.onclick = () => {
    let is_checked_array = [0, 0, 0, 0, 0, 0, 0];
    is_checked_array[0] = 1; 
    
    all_check_boxes.forEach(
    (element) => {
        index = element.id.split('_')[1];
        is_checked_array[index] = element.checked ? 1 : 0;
        element.disabled = 1;
    });
    
    localStorage.setItem('is_checked_array', is_checked_array.join(''));
    
    btn_0.innerHTML = 'Готово'
    btn_0.disabled = 1;
};

if (localStorage.getItem('is_checked_array')[0]) {
    const is_checked_array = localStorage.getItem('is_checked_array');    
    all_check_boxes.forEach(
    (element) => {
        index = element.id.split('_')[1];
        element.checked = +is_checked_array[index] ? 1 : 0;
        element.disabled = 1;
    });
    
    btn_0.style.display = 'none';
    text.innerHTML = 'Вы уже сделали выбор ранее. Мы его сохранили:';
}