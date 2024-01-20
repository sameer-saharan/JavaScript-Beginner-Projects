const formBMI = document.querySelector('#form');
let success = false;
formBMI.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#result");

    const BMIresult = ((weight)/((height/100)**2)).toFixed(2);

    if (height === " " || height<0 || isNaN(height)){
        result.innerHTML = "You entered an invalid height or weight."
    } else if (weight === " " || weight<0 || isNaN(weight)) {
        result.innerHTML = "You entered an invalid height or weight."
    } else {
        result.innerHTML = `Your Body Mass Index is ${BMIresult}`;
        success = true
    };

    if (success) {
        if (BMIresult < 18.6) {
            result.style.backgroundColor = 'yellow';
            result.style.color = 'black';
        } else if (BMIresult >= 18.6 && BMIresult <=24.9) {
        result.style.backgroundColor = 'green';
        result.style.color = 'white';
        } else if (BMIresult > 24.9) {
        result.style.backgroundColor = 'red';
        result.style.color = 'white';
        }
    };

});


