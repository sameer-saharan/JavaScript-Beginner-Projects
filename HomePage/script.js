document.body.style.textAlign = 'center';
document.body.style.backgroundColor = '#0B0B0B';

const htmlElement = document.documentElement;
const navElement = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-a');
const headingElement = document.querySelector('.heading');
const containerElement = document.querySelector('.container');
const divElements = document.querySelectorAll('.div-a');

htmlElement.style.margin = '0';

navElement.style.marginTop = '20px';
navElement.style.marginBottom = '40px';

navLinks.forEach(link => {
    link.style.color = 'white';
    link.style.fontFamily = 'sans-serif';
    link.style.fontWeight = 'bold';
    link.style.border = 'solid white 2px';
    link.style.borderRadius = '20px';
    link.style.textDecoration = 'none';
    link.style.padding = '8px';
    link.style.margin = '15px';
    link.style.transition = 'all 0.5s ease-in-out';

    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#FEC000';
        link.style.color = 'black';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
    });
});

headingElement.style.fontSize = '50px';
headingElement.style.color = 'white';
headingElement.style.fontFamily = 'sans-serif';
headingElement.style.transition = 'all 0.5s ease-in-out';

headingElement.addEventListener('mouseover', () => {
    headingElement.style.fontSize = '52px';
});

containerElement.style.display = 'flex';
containerElement.style.flexDirection = 'column';
containerElement.style.alignItems = 'center';
containerElement.style.fontSize = '25px';
containerElement.style.fontFamily = 'Salsa, cursive';

divElements.forEach(div => {
    div.style.width = '400px';
    div.style.textAlign = 'left';
    div.style.textDecoration = 'none';
    div.style.color = 'black';
    div.style.backgroundColor = 'white';
    div.style.marginBottom = '20px';
    div.style.padding = '5px 0px 5px 20px';
    div.style.border = 'solid black 2px';
    div.style.borderRadius = '10px';
    div.style.transition = 'all 0.5s ease-in-out';

    div.addEventListener('mouseover', () => {
        div.style.width = '450px';
        div.style.backgroundColor = '#FEC000';
        div.style.marginTop = '12px';
        div.style.marginBottom = '30px';
    });

    div.addEventListener('mouseout', () => {
        div.style.width = '400px';
        div.style.backgroundColor = 'white';
        div.style.marginTop = '';
        div.style.marginBottom = '20px';
    });
});
