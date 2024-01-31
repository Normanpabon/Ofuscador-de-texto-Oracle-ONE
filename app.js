/*https://www.aluracursos.com/challenges/challenge-one-logica/sprint01-construye-un-encriptador-texto-con-javascript*/
/**https://sweetalert2.github.io/ */

// Configuracion inicial
document.getElementById("divMensajeDesencriptado").style.display = "none"; 

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

    try {
        document.getElementById("mensajeDefault").style.display = "none"; 
        document.getElementById("divMensajeDesencriptado").style.display = "inline-block"; 
    } catch (error) {
        //console.log("Error: "+ error);   
    }

    let textAreaDesencriptado = document.getElementById("mensajeDesencriptado");
    let test = document.getElementById("mensaje");
    test.innerHTML = "";
    textAreaDesencriptado.innerHTML = fraseConCambio;

    return fraseConCambio;
}


function moduloDecifrado(frase){

    let fraseBk = frase;
    //Regex
    const regE = /enter/g;
    const regI = /imes/g;
    const regA = /ai/g;
    const regO = /ober/g;
    const regU = /ufat/g;


    frase = frase.replace(regE, "e")
    frase = frase.replace(regI, "i");
    frase = frase.replace(regA, "a");
    frase = frase.replace(regO, "o");
    frase = frase.replace(regU, "u");

    if(frase != fraseBk){

        try {
            document.getElementById("mensajeDefault").style.display = "none"; 
            document.getElementById("divMensajeDesencriptado").style.display = "inline-block"; 
        } catch (error) {
            console.log("Error: "+ error);   
        }

        let textAreaDesencriptado = document.getElementById("mensajeDesencriptado");
        textAreaDesencriptado.innerHTML = frase;

    }else{
        document.getElementById("mensajeDefault").style.display = "inline-block";
        document.getElementById("divMensajeDesencriptado").style.display = "none"; 
    }
    

    return frase;
}

function encriptar(){

    document.getElementById("mensajeDefault").style.display = "inline-block";
    document.getElementById("divMensajeDesencriptado").style.display = "none"; 

    let textoIngresado = document.getElementById("mensaje").value;

    let textoCifrado = moduloCifrado(textoIngresado);

}

function desencriptar(){

    let textoIngresado = document.getElementById("mensaje").value;

    let textoDecifrado = moduloDecifrado(textoIngresado);

    console.log("Texto en area:  "+ textoIngresado);
    console.log("Texto procesado: " + textoDecifrado);

}