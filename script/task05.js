const canvas = document.querySelector('canvas');
const pause = document.querySelector("body > div > div > footer > div:nth-child(2) > button:nth-child(1)")
const stopped = document.querySelector("body > div > div > footer > div:nth-child(2) > button:nth-child(2)")
const muted = document.querySelector("body > div > div > footer > div:nth-child(2) > button:nth-child(3)")

const audio = new Audio("https://web.archive.org/web/20220217112309/https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3")

canvas.addEventListener('click', () => {
    triangle()
})

pause.addEventListener('click', () => {
    audio.play()
})

stopped.addEventListener('click', () => {
    audio.pause()
})

muted.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false
    } else {
        audio.muted = true
    }
})



function triangle() {
    if (canvas.getContext) {
        const triangleDraw = canvas.getContext("2d");

        triangleDraw.beginPath();
        triangleDraw.fillStyle = "red";
        triangleDraw.strokeStyle = "white";
        triangleDraw.lineWidth = 1;
        triangleDraw.moveTo(6, 6);
        triangleDraw.lineTo(14,10);
        triangleDraw.lineTo(6,14);
        triangleDraw.closePath();
        triangleDraw.fill();
        triangleDraw.stroke();
        console.log("je suis ici");
    }
}
triangle()