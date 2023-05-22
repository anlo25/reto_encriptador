const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "url('./imagenes/close.png')";
    mensaje.style.backgroundSize = "200px";
    mensaje.style.backgroundPosition = "bottom";
}
function encriptar(stringEncriptada){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    if (stringEncriptada.trim() === '') {
        // Mostrar una alerta si el resultado está vacío
        alert('No hay texto para encriptar.');
        return; // Detener la ejecución de la función
    }
        return stringEncriptada
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "url('./imagenes/open.png')";
    mensaje.style.backgroundSize = "200px";
    mensaje.style.backgroundPosition = "bottom";

}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    if (stringDesencriptada.trim() === '') {
        // Mostrar una alerta si el resultado está vacío
        alert('No hay texto para desencriptar.');
        return; // Detener la ejecución de la función
    }
        return stringDesencriptada
}
function btnCopiar() {
    var texto = document.querySelector(".mensaje");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    mensaje.style.backgroundImage = "url('./imagenes/Muñeco.png')";
    mensaje.style.backgroundSize = "250px";
    mensaje.style.backgroundPosition = "bottom center";
}
