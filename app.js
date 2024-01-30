/*https://www.aluracursos.com/challenges/challenge-one-logica/sprint01-construye-un-encriptador-texto-con-javascript*/

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/**https://sweetalert2.github.io/ */

function moduloCifrado(frase){
    let fraseConCambio = "";

    for(let i =0; i < frase.length; i++){
        let char = frase[i];

        switch(char){
            case 'e':
                fraseConCambio += "enter";
                break;
            case 'i':
                fraseConCambio += "imes";
                break;
            case 'a':
                fraseConCambio += "ai";
                break;
            case 'o':
                fraseConCambio += "ober";
                break;
            case 'u':
                fraseConCambio += "ufat";
                break;
            default:
                fraseConCambio += char;

        }

    }

    return fraseConCambio;
}

function moduloDecifrado(frase){
    return "No implementado aun";
}

function encriptar(){
    alert("Boton encriptar pulsado");

    let textoIngresado = document.getElementById("mensaje").value;

    let textoCifrado = moduloCifrado(textoIngresado);

    console.log("Texto en area:  "+ textoIngresado);
    console.log("Texto procesado: " + textoCifrado);
}

function desencriptar(){
    alert("Boton desencriptar pulsado");

    let textoIngresado = document.getElementById("mensaje").value;

    let textoDecifrado = moduloDecifrado(textoIngresado);

    console.log("Texto en area:  "+ textoIngresado);
    console.log("Texto procesado: " + textoDecifrado);

}