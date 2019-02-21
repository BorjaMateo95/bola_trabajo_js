var numeroEstudios = 0;
var numeroExperiencias = 0;
var numeroCursos = 0;

function pintaCrearUsuario(alumno) {
	var fondo = document.getElementById("fondo");
	limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Crear Perfil");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var divrow = document.createElement("div");
    divrow.setAttribute("class", "row");
    contenido.appendChild(divrow);
    form.appendChild(divrow);

    var divdos = document.createElement("div");
    divdos.setAttribute("class", "col-sm-4");
    divrow.appendChild(divdos);

    var label = document.createElement("label");
    label.setAttribute("for", "dni");
    var texto = document.createTextNode("DNI");
    label.appendChild(texto);
    divdos.appendChild(label);

    var inputDNI = document.createElement("input");
    inputDNI.setAttribute("type", "text");
    inputDNI.setAttribute("class", "form-control");
    inputDNI.setAttribute("id", "dni");
    inputDNI.setAttribute("placeholder", "12345678X");
    inputDNI.setAttribute("name", "dni");
    inputDNI.disabled = true;
    inputDNI.setAttribute("value", alumno[0]["dni"]);

    divdos.appendChild(inputDNI);
    form.appendChild(divrow);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    divrow.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "name");
    var texto = document.createTextNode("Nombre");
    label.appendChild(texto);
    divtres.appendChild(label);
    var inputN = document.createElement("input");
    inputN.setAttribute("type", "text");
    inputN.setAttribute("class", "form-control");
    inputN.setAttribute("id", "name");
    inputN.setAttribute("placeholder", "EJ: Borja");
    inputN.setAttribute("name", "name");
    inputN.setAttribute("value", alumno[0]["nombre"]);
    divtres.appendChild(inputN);
    form.appendChild(divrow);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    divrow.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "apellidos");
    var texto = document.createTextNode("Apellidos");
    label.appendChild(texto);
    divcuatro.appendChild(label);
    var inputA = document.createElement("input");
    inputA.setAttribute("type", "text");
    inputA.setAttribute("class", "form-control");
    inputA.setAttribute("id", "apellidos");
    inputA.setAttribute("placeholder", "Ej: Mateo Leon");
    inputA.setAttribute("name", "apellidos");
    inputA.setAttribute("value", alumno[0]["apellidos"]);
    divcuatro.appendChild(inputA);
    form.appendChild(divrow);

    var divrow2 = document.createElement("div");
    divrow2.setAttribute("class", "row");
    contenido.appendChild(divrow2);
    form.appendChild(divrow2);

    var divcinco = document.createElement("div");
    divcinco.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divcinco);

    var label = document.createElement("label");
    label.setAttribute("for", "email");
    var texto = document.createTextNode("Email");
    label.appendChild(texto);
    divcinco.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "email");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "email");
    inputE.setAttribute("placeholder", "ejemplo@ejemplo.com");
    inputE.setAttribute("name", "email");
    inputE.setAttribute("value", alumno[0]["email"]);
    divcinco.appendChild(inputE);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "direccion");
    var texto = document.createTextNode("Direccion");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "direccion");
    inputD.setAttribute("placeholder", "c/ejemplo");
    inputD.setAttribute("name", "direccion");
    inputD.setAttribute("value", alumno[0]["residencia"]);
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "telefono");
    var texto = document.createTextNode("Telefono");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "telefono");
    inputD.setAttribute("placeholder", "6666666");
    inputD.setAttribute("name", "telefono");
    inputD.setAttribute("value", alumno[0]["telefono"]);
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "viajar");
    var texto = document.createTextNode("Posibilidad Viajar");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "checkbox");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "viajar");
    inputD.setAttribute("name", "viajar");
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "Cambio de Residencia");
    var texto = document.createTextNode("Cambio de Residencia");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "checkbox");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "cresidencia");
    inputD.setAttribute("name", "cresidencia");
    divseis.appendChild(inputD);
    form.appendChild(divrow2);


    var divrow3 = document.createElement("div");
    divrow3.setAttribute("class", "row");
    divrow3.setAttribute("style", "margin-top: 5px;");
    contenido.appendChild(divrow3);
    form.appendChild(divrow3);

    var divsiete = document.createElement("div");
    divsiete.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divsiete);

    var bCursos = document.createElement("button");
    bCursos.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Estudios");
    bCursos.appendChild(texto);
    bCursos.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirEstudios(form);
    });

    divsiete.appendChild(bCursos);
    form.appendChild(divrow3);

    var divoxo = document.createElement("div");
    divoxo.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divoxo);

    var bExpe = document.createElement("button");
    bExpe.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Experiencia");
    bExpe.appendChild(texto);
    bExpe.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirExperiencia(form);

    });

    divoxo.appendChild(bExpe);
    divrow3.appendChild(divoxo);

    var divnue = document.createElement("div");
    divnue.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divnue);

    var bCur = document.createElement("button");
    bCur.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Cursos");
    bCur.appendChild(texto);
    bCur.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirCursos(form);

    });

    divnue.appendChild(bCur);
    divrow3.appendChild(divnue);

    var divboton = document.createElement("div");
    divboton.setAttribute("class", "row");
    divboton.setAttribute("style", "margin-top: 5px");
    contenido.appendChild(divboton);

    var col = document.createElement("div");
    col.setAttribute("class", "col");
    divboton.appendChild(col);


    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary");//float-right
    boton.setAttribute("style", "width:30%;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        insertaUsuarioBD();

    });

    var texto = document.createTextNode("Crear Perfil");
    boton.appendChild(texto);
    col.appendChild(boton);
    form.appendChild(divboton);
    fondo.appendChild(contenido);

}

function pintaAnadirCursos(form) {
    var fondo = document.getElementById("fondo");
    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%; overflow: auto;");

    var h4 = document.createElement("h4");
    var texto = document.createTextNode("Cursos");
    h4.appendChild(texto);
    contenido.appendChild(h4);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var divdos = document.createElement("div");
    divdos.setAttribute("class", "col-sm-4");
    contenido.appendChild(divdos);

    var label = document.createElement("label");
    label.setAttribute("for", "trabajo");
    var texto = document.createTextNode("Curso");
    label.appendChild(texto);
    divdos.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "cursoNombre" + numeroCursos);
    inputD.setAttribute("name", "cursoNombre" + numeroCursos);
    inputD.setAttribute("placeholder", "Nombre Curso");

    divdos.appendChild(inputD);
    form.appendChild(divdos);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    contenido.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "perfil");
    var texto = document.createTextNode("Perfil");
    label.appendChild(texto);
    divtres.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "cursoPerfil"+numeroCursos);
    inputD.setAttribute("name", "cursoPerfil"+numeroCursos);
    inputD.setAttribute("placeholder", "Perfil");

    divtres.appendChild(inputD);

    form.appendChild(divtres);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    contenido.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "perfil");
    var texto = document.createTextNode("Horas");
    label.appendChild(texto);
    divcuatro.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "number");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "cursoHoras"+numeroCursos);
    inputD.setAttribute("name", "cursoHoras"+numeroCursos);
    inputD.setAttribute("placeholder", "Horas curso");

    numeroCursos++;

    divcuatro.appendChild(inputD);

    form.appendChild(divcuatro);
    fondo.appendChild(contenido);
}

function pintaAnadirExperiencia(form) {
    var fondo = document.getElementById("fondo");

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%; overflow: auto;");

    var h4 = document.createElement("h4");
    var texto = document.createTextNode("Experiencia");
    h4.appendChild(texto);
    contenido.appendChild(h4);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var divdos = document.createElement("div");
    divdos.setAttribute("class", "col-sm-4");
    contenido.appendChild(divdos);

    var label = document.createElement("label");
    label.setAttribute("for", "trabajo");
    var texto = document.createTextNode("Trabajo");
    label.appendChild(texto);
    divdos.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "experienciaTrabajo"+numeroExperiencias);
    inputD.setAttribute("name", "experienciaTrabajo"+numeroExperiencias);
    inputD.setAttribute("placeholder", "Trabajo");

    divdos.appendChild(inputD);
    form.appendChild(divdos);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    contenido.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "empresal");
    var texto = document.createTextNode("Empresa");
    label.appendChild(texto);
    divtres.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "experienciaEmpresa"+numeroExperiencias);
    inputD.setAttribute("name", "experienciaEmpresa"+numeroExperiencias);
    inputD.setAttribute("placeholder", "Empresa");

    divtres.appendChild(inputD);

    form.appendChild(divtres);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    contenido.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "perfil");
    var texto = document.createTextNode("Meses Experiencia");
    label.appendChild(texto);
    divcuatro.appendChild(label);

    var inputD = document.createElement("input");

    inputD.setAttribute("type", "number");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "experienciaTiempo"+numeroExperiencias);
    inputD.setAttribute("name", "experienciaTiempo"+numeroExperiencias);
    inputD.setAttribute("placeholder", "1");

    divcuatro.appendChild(inputD);

    numeroExperiencias++;

    form.appendChild(divcuatro);
    fondo.appendChild(contenido);  
}


function pintaAnadirEstudios(form) {

    var fondo = document.getElementById("fondo");

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%;");

    var h4 = document.createElement("h4");
    var texto = document.createTextNode("Estudios");
    h4.appendChild(texto);
    contenido.appendChild(h4);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var inputD = document.createElement("select");

    //cursos
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getCursosCentro.php");
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);

            if(objeto!=0){
                for(i=0; i<objeto.length; i++) {
                    var option = document.createElement("option");
                    option.value=objeto[i]["id"];
                    option.text = objeto[i]["nombre"];
                    inputD.appendChild(option);
                }

                inputD.setAttribute("type", "select");
                inputD.setAttribute("class", "form-control");
                inputD.setAttribute("id", "estudios"+numeroEstudios);
                inputD.setAttribute("name", "estudios"+numeroEstudios);
                numeroEstudios++;

                form.appendChild(inputD);
                fondo.appendChild(contenido);
            }else{
                alert("No hemos encontrado cursos");
            }

        }
    }


}


function insertaUsuarioBD() {
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var disponibilidadViajar = document.getElementById("viajar").checked;
    var cambioResidencia = document.getElementById("cresidencia").checked;

    //cursos
    insertaCurso(dni);

    //estudios
    insertaEstudios(dni);

    //experiencia
    insertaExperiencia(dni);

    var objetoUsuario = {'dni': dni, 'nombre': nombre, 'apellidos': apellidos,
     'direccion': direccion, 'email': email, 'password': generaPassword(), 'telefono': telefono, 'posibilidadViajar': disponibilidadViajar,
     'cambiarResidencia': cambioResidencia};

    var json = JSON.stringify(objetoUsuario);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/setAlumno.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
        }
    }

}

function insertaCurso(dni) {

    for(i=0; i < numeroCursos; i++) {
        var nombreCurso = document.getElementById("cursoNombre"+i).value;
        var perfilCurso = document.getElementById("cursoPerfil"+i).value;
        var cursoHoras = document.getElementById("cursoHoras"+i).value;

        var objetoCurso = {'dni': dni, 'nombre': nombreCurso, 'perfil': perfilCurso, 'horas': cursoHoras};
        var json = JSON.stringify(objetoCurso);
        objetoAjax = ObjetoAjax();
        objetoAjax.open('GET', "php/setCurso.php?json=" + json);
        objetoAjax.send();
        objetoAjax.onreadystatechange = function () {
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {

            }
        }
    }

    numeroCursos = 0;


}

function insertaEstudios(dni) {

    for(i=0; i < numeroEstudios; i++) {
        var valueEstudio = document.getElementById("estudios"+i).value;

        var objetoEstudio = {'dni': dni, 'idEstudio': valueEstudio};
        var json = JSON.stringify(objetoEstudio);
        objetoAjax = ObjetoAjax();
        objetoAjax.open('GET', "php/setEstudios.php?json=" + json);
        objetoAjax.send();
        objetoAjax.onreadystatechange = function () {
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {

            }
        }

    }

    numeroEstudios = 0;

}

function insertaExperiencia(dni) {
    for(i=0; i < numeroExperiencias; i++) {
        var expTrabajo = document.getElementById("experienciaTrabajo"+i).value;
        var expEmpresa = document.getElementById("experienciaEmpresa"+i).value;
        var expTiempo = document.getElementById("experienciaTiempo"+i).value;

        var objExperiencia = {'dni': dni, 'trabajo': expTrabajo, 'empresa': expEmpresa, 'tiempo': expTiempo};
        var json = JSON.stringify(objExperiencia);
        objetoAjax = ObjetoAjax();
        objetoAjax.open('GET', "php/setExperiencia.php?json=" + json);
        objetoAjax.send();
        objetoAjax.onreadystatechange = function () {
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {

            }
        }
    }

    numeroExperiencias = 0;
}



function pintaBuscarDNI() {
	var fondo = document.getElementById("fondo");
	limpiarPantalla(fondo);

	var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Buscar DNI");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var label = document.createElement("label");
    label.setAttribute("for", "dni");
    var texto = document.createTextNode("DNI");
    label.appendChild(texto);
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "dni");
    input.setAttribute("placeholder", "12345678X");
    input.setAttribute("name", "dni");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:40%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        buscaDNI();

    });

    var texto = document.createTextNode("Buscar");
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);

}

function buscaDNI() {
	var dni = document.getElementById("dni").value;
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getAlumno.php?dni=" + dni);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
        	var datos = objetoAjax.responseText;
    		var objeto = JSON.parse(datos);

    		if(objeto!=0){
                pintaCrearUsuario(objeto);
    		}else{
    			alert("No hemos encontrado alumno");
    		}

        	
        }
    }
}



function iniciarSesionSolicitante() {
    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Iniciar Sesion");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    //dni
    var label = document.createElement("label");
    label.setAttribute("for", "dni");
    var texto = document.createTextNode("DNI");
    label.appendChild(texto);
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "dni");
    input.setAttribute("placeholder", "12345678X");
    input.setAttribute("name", "dni");
    input.required = true;
    form.appendChild(input);

//contraseña
    var label = document.createElement("label");
    label.setAttribute("for", "password");
    var texto = document.createTextNode("Contraseña");
    label.appendChild(texto);
    form.appendChild(label);

    var inputP = document.createElement("input");
    inputP.setAttribute("type", "password");
    inputP.setAttribute("class", "form-control");
    inputP.setAttribute("id", "password");
    inputP.setAttribute("name", "password");
    inputP.required = true;
    form.appendChild(inputP);

    var botonPass = document.createElement("button");
    botonPass.setAttribute("class", "btn btn-link");
    botonPass.setAttribute("style", "text-align: center; margin: 0 auto; margin-top: 1px;");
    botonPass.addEventListener("click", function (event) {
        event.preventDefault();
        pintaRecordarPass("alumno");
    });

    var texto = document.createTextNode("Olvidé mi contraseña");
    botonPass.appendChild(texto);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:40%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        iniciaSesion();
    });

    var texto = document.createTextNode("Entrar");
    boton.appendChild(texto);
    form.appendChild(botonPass);
    form.appendChild(boton);
    fondo.appendChild(contenido);
}


function iniciaSesion() {
    var dni = document.getElementById("dni").value;
    var pass = document.getElementById("password").value;

    var objLogin = {'dni': dni, 'password': pass};
    var json = JSON.stringify(objLogin);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/loginAlumno.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);

            if(objeto!=0){
                var fondo = document.getElementById("fondo");
                limpiarPantalla(fondo);
                if(objeto['temporal'] == "true") {
                    pideCambioContraseña(objeto);
                }else{
                    pintaUsuarioRegistrado(objeto);
                    aniadirSubmenu("alumno", objeto);
                }
            }else{
                alert("DNI o Contraseña incorrecto");
            }

            
        }
    }

}


function guardarNuevaPassword(objeto) {
    var pass1 = document.getElementById("passnueva1").value;
    var pass2 = document.getElementById("passnueva2").value;

    if(pass1 == pass2) {
        var objPass = {'perfil': 'alumno', 'identificador': objeto['dni'], 'pass1': pass1};
        var json = JSON.stringify(objPass);
        objetoAjax = ObjetoAjax();
        objetoAjax.open('GET', "php/updatePassword.php?json=" + json);
        objetoAjax.send();
        objetoAjax.onreadystatechange = function () {
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
                var fondo = document.getElementById("fondo");
                limpiarPantalla(fondo);
                pintaUsuarioRegistrado(objeto);
                aniadirSubmenu("alumno", objeto);
            }
        }
    }else{
        document.getElementById("passnueva1").value = "";
        document.getElementById("passnueva1").value = "";
        alert("Las contraseñas no coinciden");
    }

}


function pideCambioContraseña(objeto) {
    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Contraseña Nueva");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    //pass 1
    var label = document.createElement("label");
    label.setAttribute("for", "passnueva1");
    var texto = document.createTextNode("Contraseña");
    label.appendChild(texto);
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "passnueva1");
    input.setAttribute("name", "passnueva1");
    input.required = true;
    form.appendChild(input);

    //pass 2
    var label = document.createElement("label");
    label.setAttribute("for", "passnueva2");
    var texto = document.createTextNode("Confirmar Contraseña");
    label.appendChild(texto);
    form.appendChild(label);

    var inputP = document.createElement("input");
    inputP.setAttribute("type", "password");
    inputP.setAttribute("class", "form-control");
    inputP.setAttribute("id", "passnueva2");
    inputP.setAttribute("name", "passnueva2");
    inputP.required = true;
    form.appendChild(inputP);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:40%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        guardarNuevaPassword(objeto);
    });

    var texto = document.createTextNode("Guardar");
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);
}

function pintaUsuarioRegistrado(objeto) {
    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Perfil");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var divrow = document.createElement("div");
    divrow.setAttribute("class", "row");
    contenido.appendChild(divrow);
    form.appendChild(divrow);

    var divdos = document.createElement("div");
    divdos.setAttribute("class", "col-sm-4");
    divrow.appendChild(divdos);

    var label = document.createElement("label");
    label.setAttribute("for", "dni");
    var texto = document.createTextNode("DNI");
    label.appendChild(texto);
    divdos.appendChild(label);

    var inputDNI = document.createElement("input");
    inputDNI.setAttribute("type", "text");
    inputDNI.setAttribute("class", "form-control");
    inputDNI.setAttribute("id", "dni");
    inputDNI.setAttribute("placeholder", "12345678X");
    inputDNI.setAttribute("name", "dni");
    inputDNI.disabled = true;
    inputDNI.setAttribute("value", objeto["dni"]);

    divdos.appendChild(inputDNI);
    form.appendChild(divrow);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    divrow.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "name");
    var texto = document.createTextNode("Nombre");
    label.appendChild(texto);
    divtres.appendChild(label);
    var inputN = document.createElement("input");
    inputN.setAttribute("type", "text");
    inputN.setAttribute("class", "form-control");
    inputN.setAttribute("id", "name");
    inputN.setAttribute("placeholder", "EJ: Borja");
    inputN.setAttribute("name", "name");
    inputN.setAttribute("value", objeto["nombre"]);
    divtres.appendChild(inputN);
    form.appendChild(divrow);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    divrow.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "apellidos");
    var texto = document.createTextNode("Apellidos");
    label.appendChild(texto);
    divcuatro.appendChild(label);
    var inputA = document.createElement("input");
    inputA.setAttribute("type", "text");
    inputA.setAttribute("class", "form-control");
    inputA.setAttribute("id", "apellidos");
    inputA.setAttribute("placeholder", "Ej: Mateo Leon");
    inputA.setAttribute("name", "apellidos");
    inputA.setAttribute("value", objeto["apellidos"]);
    divcuatro.appendChild(inputA);
    form.appendChild(divrow);

    var divrow2 = document.createElement("div");
    divrow2.setAttribute("class", "row");
    contenido.appendChild(divrow2);
    form.appendChild(divrow2);

    var divcinco = document.createElement("div");
    divcinco.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divcinco);

    var label = document.createElement("label");
    label.setAttribute("for", "email");
    var texto = document.createTextNode("Email");
    label.appendChild(texto);
    divcinco.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "email");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "email");
    inputE.setAttribute("placeholder", "ejemplo@ejemplo.com");
    inputE.setAttribute("name", "email");
    inputE.setAttribute("value", objeto["email"]);
    divcinco.appendChild(inputE);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "direccion");
    var texto = document.createTextNode("Direccion");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "direccion");
    inputD.setAttribute("placeholder", "c/ejemplo");
    inputD.setAttribute("name", "direccion");
    inputD.setAttribute("value", objeto["residencia"]);
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "telefono");
    var texto = document.createTextNode("Telefono");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "telefono");
    inputD.setAttribute("placeholder", "6666666");
    inputD.setAttribute("name", "telefono");
    inputD.setAttribute("value", objeto["telefono"]);
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "viajar");
    var texto = document.createTextNode("Posibilidad Viajar");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "checkbox");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "viajar");
    inputD.setAttribute("name", "viajar");
    if(objeto["disponibilidadViajar"] == "true") {
        inputD.checked = true;
    }else{
        inputD.checked = false;
    }
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "Cambio de Residencia");
    var texto = document.createTextNode("Cambio de Residencia");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "checkbox");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "cresidencia");
    inputD.setAttribute("name", "cresidencia");
    if(objeto["cambioResidencia"] == "true") {
        inputD.checked = true;
    }else{
        inputD.checked = false;
    }
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divrow3 = document.createElement("div");
    divrow3.setAttribute("class", "row");
    divrow3.setAttribute("style", "margin-top: 5px;");
    contenido.appendChild(divrow3);
    form.appendChild(divrow3);

    var divsiete = document.createElement("div");
    divsiete.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divsiete);

    var bCursos = document.createElement("button");
    bCursos.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Estudios");
    bCursos.appendChild(texto);
    bCursos.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirEstudios(form);
    });

    divsiete.appendChild(bCursos);
    form.appendChild(divrow3);

    var divoxo = document.createElement("div");
    divoxo.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divoxo);

    var bExpe = document.createElement("button");
    bExpe.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Experiencia");
    bExpe.appendChild(texto);
    bExpe.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirExperiencia(form);

    });

    divoxo.appendChild(bExpe);
    divrow3.appendChild(divoxo);

    var divnue = document.createElement("div");
    divnue.setAttribute("class", "col-sm-4");
    divrow3.appendChild(divnue);

    var bCur = document.createElement("button");
    bCur.setAttribute("class", "btn btn-link");
    var texto = document.createTextNode("Añadir Cursos");
    bCur.appendChild(texto);
    bCur.addEventListener("click", function (event) {
        event.preventDefault();
        pintaAnadirCursos(form);

    });

    divnue.appendChild(bCur);
    divrow3.appendChild(divnue);

    var divboton = document.createElement("div");
    divboton.setAttribute("class", "row");
    divboton.setAttribute("style", "margin-top: 5px");
    contenido.appendChild(divboton);

    var col = document.createElement("div");
    col.setAttribute("class", "col");
    //divboton.setAttribute("style", "margin-top: 5px");
    divboton.appendChild(col);


    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary");//float-right
    boton.setAttribute("style", "width:30%;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        actualizarAlumno();

    });

    var texto = document.createTextNode("Actualizar Perfil");
    boton.appendChild(texto);
    col.appendChild(boton);
    form.appendChild(divboton);
    fondo.appendChild(contenido);
}

function actualizarAlumno() {
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var disponibilidadViajar = document.getElementById("viajar").checked;
    var cambioResidencia = document.getElementById("cresidencia").checked;


    //cursos
    insertaCurso(dni);

    //estudios
    insertaEstudios(dni);

    //experiencia
    insertaExperiencia(dni);

    var objetoUsuario = {'dni': dni, 'nombre': nombre, 'apellidos': apellidos, 
    'direccion': direccion, 'email': email, 'telefono': telefono, 'disponibilidadViajar': disponibilidadViajar,
     'cambioResidencia': cambioResidencia};

    var json = JSON.stringify(objetoUsuario);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/updateAlumno.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            alert("Datos Actualizados Correctamente");
        }
    }

}