const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")

const randomColor = function () {
    hexColors = "0123456789ABCDEF" // Length is 16
    color = "#";
    for (i=0; i<6; i++) {
        hexCode = Math.floor(Math.random()*16)
        color += hexColors[hexCode]
    }
    return color;
};

function colorChanger () {
    document.body.style.backgroundColor = `${randomColor()}`
};

startButton.addEventListener('click', () => {
    colorInterval = setInterval(colorChanger, 700)
});

stopButton.addEventListener('click', () => {
    clearInterval(colorInterval);
});

resetButton.addEventListener('click', () => {
    clearInterval(colorInterval);
    document.body.style.backgroundColor = 'white'
});