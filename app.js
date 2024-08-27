
const btnEncriptar = document.querySelector('.btn_encriptar');
const textArea = document.querySelector('.encriptar');
const btnCopiar = document.querySelector('.btn_copiar');
const btnDesencriptar = document.querySelector('.btn_desencriptar');
const contenido1 = document.querySelector('.tarjeta_contenido');
const AreaResultado = document.querySelector('.evaluar');

function encriptar(texto) {
    let texto_encriptado = texto
        .replace(/e/g, 'estudiantes')
        .replace(/i/g, 'inter')
        .replace(/a/g, 'atlethic')
        .replace(/o/g, 'orlando')
        .replace(/u/g, 'united');
    return texto_encriptado;
}


function desencriptar(texto) {
    let texto_desencriptado = texto
        .replace(/estudiantes/g, 'e')
        .replace(/inter/g, 'i')
        .replace(/atlethic/g, 'a')
        .replace(/orlando/g, 'o')
        .replace(/united/g, 'u');
    return texto_desencriptado;
}


btnEncriptar.addEventListener('click', () => {
    const texto = textArea.value;
    if (validarTexto(texto)) {
        contenido1.remove();
        AreaResultado.value = encriptar(texto);
        textArea.value = '';
    } else {
        alert('Solo se permiten letras minúsculas y sin acentos.');
    }
});


btnDesencriptar.addEventListener('click', () => {
    const texto = textArea.value;
    if (validarTexto(texto)) {
        contenido1.remove();
        AreaResultado.value = desencriptar(texto);
        textArea.value = '';
    } else {
        alert('Solo se permiten letras minúsculas y sin acentos.');
    }
});


btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(AreaResultado.value);
});


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; 
    return regex.test(texto);
}
