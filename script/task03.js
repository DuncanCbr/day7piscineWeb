const exo = document.querySelector('footer>div');
count = 0
let str = ""
function displayeyboard(elementKeyBoard) {
    console.log(elementKeyBoard.key);
    str += elementKeyBoard.key
    let last42 = str.slice(-42)
    exo.innerHTML = last42
    console.log(last42.length);
}

window.addEventListener("keydown" ,(elementKeyBoard) => {
    console.log("je vais ici");
    displayeyboard(elementKeyBoard)
})