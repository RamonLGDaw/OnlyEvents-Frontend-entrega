const btnRecuperar = document.getElementById('btnRecuperar');
let email = document.getElementById('email');
let erroremail = document.getElementById('erroremail');
console.log('erroremail: ' + erroremail);

let bandera = false;

function esCorreoValido(correo) {
    let esValido = false;
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    esValido = expReg.test(correo);
    return esValido;
}

function validarCampoCorreo(correo){

    let error=[];
    if (correo.value.trim() === '') {
        error.push('El correo es requerido');
    }
    if (!esCorreoValido(correo.value.trim())) {
        error.push('Ingrese un correo valido');
    }
    return error;
}

function imprimirError(errores, campo){

    if (errores.length > 0){
        campo.innerHTML=errores[0];
    }
    else{
        campo.innerHTML='';
    } 
}

function validarFormulario() {
    email = document.getElementById('email');
    console.log('error email: '+erroremail)
    bandera = true;
    imprimirError(validarCampoCorreo(email), erroremail);
}

function limpiarErrores(){
    erroremail.innerHTML='';
}

function limpiarCampos(){
    email.value='';
}

btnRecuperar.addEventListener('click', validarFormulario);

if (bandera){
    email.addEventListener('input',  imprimirError(validarCampoCorreo(email), erroremail));

}
