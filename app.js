let numeroSecreto = 0;
let intentos=0;
let liastaNumerosSorteado=[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemeto(elemento, texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}
function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemeto('p', `acertaste el numero en ${intentos} ${(intentos===1) ?'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{

        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemeto('p', 'el numero es menor');
        } else{
            asignarTextoElemeto('p', 'el numero es mayor');
        }
        intentos++;
    }   limpiarCaja();
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
}



function genererNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(liastaNumerosSorteado);

    if (liastaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemeto('p','ya se sortearon todos los numeros posibles');
    } else {

        if (liastaNumerosSorteado.includes(numeroGenerado)) {
            return genererNumeroSecreto();
        } else{
            liastaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemeto('h1', 'juego del numero secreto!');
    asignarTextoElemeto('p', `Dame un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = genererNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {

    limpiarCaja();

    condicionesIniciales();
    
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();