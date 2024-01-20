const timeOnPage = document.getElementById('time')
const dateOnPage = document.getElementById('date')

setInterval(function() {
    let time = new Date();
    let date = new Date();
    timeOnPage.innerHTML = time.toLocaleTimeString();
    dateOnPage.innerHTML = date.toLocaleDateString();
},1000);