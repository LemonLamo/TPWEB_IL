const myBox = document.getElementById('myBox');

const myButton = document.getElementById('myButton');

myBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';
    event.target.textContent = 'Clicked! ! ! ! !';
});

myButton.addEventListener('click', () => {
    myBox.style.backgroundColor = 'lightblue';
    myBox.textContent = 'click me again';
});