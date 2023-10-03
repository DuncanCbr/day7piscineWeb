const exo = document.querySelector('footer>div');

let reponse = "";

function dialog() {
    let dialogue = prompt("What's your name ?")
    if (dialogue == null || dialogue ==""){
        dialog()
    } else {
        let confirmation = prompt("Are you sure that " + dialogue + " is your name ?");
        if (confirmation == "yes") {
            alert("Hello " + dialogue + " !")
            reponse = "Hello " + dialogue + " !"
        }else {
            dialog()
        }
    
    }
}

exo.addEventListener('click', () => {
    dialog()
    exo.innerHTML = reponse
})