const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}







/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.clasList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/564x/c6/fa/40/c6fa40733fab0ab70a726beee1dc7ee0.jpg');

pid.append(img);*/
