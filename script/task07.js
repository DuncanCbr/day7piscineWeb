const link = document.querySelector("body > div > div > footer > div > a")
const divCookie = document.querySelector("body > div > div > footer > div")

function setcookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

link.addEventListener("click", () => {
    setcookie(duncan, true, 1)
})

divCookie.addEventListener("click", () => {
    var cookieSplited = JSON.stringify(document.cookie).split('=');
    if (document.cookie && cookieSplited[1]){
        divCookie
    }
})
