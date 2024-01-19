const allButtons = document.querySelectorAll(".button")
const page = document.querySelector('body')
allButtons.forEach( function(btn) {
    btn.addEventListener('click', function(event) {
        switch (event.target.id) {
            case "white":
                page.style.backgroundColor = 'white'
                break;
            case "blue":
                page.style.backgroundColor = 'blue'
                break;
            case "yellow":
                page.style.backgroundColor = 'yellow'
                break;
            case "grey":
                page.style.backgroundColor = 'grey'
                break;
            case "purple":
                page.style.backgroundColor = 'purple'
                break;
            default:
                break;
        }
    })
});