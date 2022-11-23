const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

if(NaN || null || infinity || undefined) {resultado.innerHTML += `<p>Por favor, inserir dados válidos</p>`}; 
                                        
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if(!peso){setResultado('Peso Inválido');return;};
if(!altura){setResultado('Altura Inválida');return;};
                                                                            
const imc = getIMC(peso,altura);
const nivelIMC = getNívelImc(imc);

const msg1 = 'Resultado'
const msg = `Seu IMC é ${imc} (${nivelIMC})`;

setResultado(msg1, msg,true);
})

function getNívelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
  if (imc >= 39.9) {return nivel[5];}
  if (imc >= 34.9) {return nivel[4];}
  if (imc >= 29.9) {return nivel[3];}
  if (imc >= 24.9) {return nivel[2];}
  if (imc >= 18.5) {return nivel[1];}
  if (imc < 18.5) {return nivel[0]}
}
function getIMC (peso,altura) {
  const imc = peso / altura**2
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function criah3() {
  const h3 = document.createElement('h3');
  return h3;
}

function setResultado(msg1, msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const h3 = criah3();
  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  h3.innerHTML = msg1;
  resultado.appendChild(h3)

  p.innerHTML = msg;
  resultado.appendChild(p);

}
  
