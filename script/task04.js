const exo = document.querySelector('footer>div');
const exoBtn = exo.querySelectorAll('div>button');
body = document.querySelector('body');

function increaseSize() {
    body.style.fontSize = "20px"
}

function decreaseSize() {
    body.style.fontSize = "10px"
}

function changeColor(value) {
    body.style.backgroundColor = value;
}

exo.addEventListener('click', (element) => {
    if(element.target.innerHTML === "-"){
        decreaseSize()
    } else if (element.target.innerHTML === "+"){
        increaseSize() 
    } else {
        value = element.target.value
        changeColor(value)
    }

})