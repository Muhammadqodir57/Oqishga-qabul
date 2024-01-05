let elInput = document.getElementById('input');
let elBtn = document.getElementById('btn');
let elResult = document.getElementById('result');

elBtn.addEventListener('click' , function() {
    let inputValue = input.value

    if (inputValue <= 50) {
        elResult.textContent = 'Siz oqishga qabul qilinmadingiz';
    } else if (inputValue <= 60) {
        elResult.textContent = 'Siz super kantraktga qabul qilindingiz';
    } else if (inputValue <= 70) {
        elResult.textContent = 'Siz kantraktga qabul qilindingiz'
    } else if (inputValue >= 80) {
        elResult.textContent = 'Siz grandga qabul qilindingiz'
    }
})