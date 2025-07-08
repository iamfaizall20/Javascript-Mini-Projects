const Overlay = document.querySelector('.overlay');
const Modal = document.querySelector('.modal');

window.addEventListener('load', function () {
    Overlay.classList.add('show')
    Modal.classList.add('show')
})

Overlay.addEventListener('click', function () {
    Overlay.classList.remove('show')
    Modal.classList.remove('show')
})