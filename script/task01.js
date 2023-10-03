const exo = document.querySelector('footer>div');
let count = 0;

function clicking() {
    count ++
    exo.innerHTML = count
}

exo.addEventListener('click', () => {
    clicking()
})