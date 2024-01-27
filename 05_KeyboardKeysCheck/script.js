const text = document.querySelector(".text")
function changeText() {
    text.innerHTML = "Press any Key<span>|</span>"
};
function changeTextTwo() {
    text.innerHTML = "Press any Key<span></span>"
};
setInterval(changeText, 500);
setInterval(changeTextTwo, 1000);

const insert = document.querySelector(".insert")

window.addEventListener('keydown', function(event) {
    insert.innerHTML = `
    <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>${event.key == " " ? 'Space Bar' : event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    </table>
    `
});