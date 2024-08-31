const button = document.querySelector('#header-burger');
const nav = document.querySelector('#header-nav');
const arrows = document.querySelectorAll('.nav-link_arrow');

button.addEventListener ('click', function (event) {
    button.classList.toggle('_active');
    nav.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})

if (arrows) {
    for (let index = 0; index < arrows.length; index++) {
        const arrow = arrows[index];
        arrow.addEventListener ('click', function (event) {
            arrow.parentElement.classList.toggle('_open');
        })
    }
}