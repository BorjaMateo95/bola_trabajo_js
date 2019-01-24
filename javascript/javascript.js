function limpiarPantalla(cosa) {
    var arrayHijos = cosa.children;
    for (var i = arrayHijos.length - 1; i > -1; i--) {
        cosa.removeChild(arrayHijos[i]);
    }
}


function ObjetoAjax() {
    if (window.XMLHttpRequest) {
        objetoAjax = new XMLHttpRequest();
    } else {
        objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return objetoAjax;
}

function generaPassword() {
    var longitud = 5;
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    var password = "";
    for (i = 0; i < longitud; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return password;
}