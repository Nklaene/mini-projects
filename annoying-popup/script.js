const popup = document.querySelector('.popup-wrapper');
const popupBody = document.querySelector('popup');
const button = document.querySelector('button');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display="block";
});

close.addEventListener('click', () => {
    popup.style.display="none";
});

popupBody.addEventListener('click', e => {
    e.stopPropagation();
})

popup.addEventListener('click', () => {
    popup.style.display="none";
});

