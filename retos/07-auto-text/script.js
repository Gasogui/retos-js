const textEl = document.getElementById('text');
const speedEl = "We Love Programming!";
let idx = 1
let speed = 1 / speedEl.value;

writeText();

function writeText() {
    text.innerText = speedEl.slice(0, idx)

    idx++;

    if (idx > speedEl.length) {
        idx = 1;
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('', (e) => speed = 1 / speedEl.value)