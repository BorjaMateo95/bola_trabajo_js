function pintaCrearEmpresa() {
	var fondo = document.getElementById("fondo");
	limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%;");

    var h2 = document.createElement("h2");
    h2.innerHTML = "Crear Perfil Empresa";
    contenido.appendChild(h2);
    var form = document.createElement("form");
    form.setAttribute("action", "submit");
    contenido.appendChild(form);

    var divrow = document.createElement("div");
    divrow.setAttribute("class", "row");
    contenido.appendChild(divrow);
    form.appendChild(divrow);

    var divdos = document.createElement("div");
    divdos.setAttribute("class", "col-sm-4");
    divrow.appendChild(divdos);

    var label = document.createElement("label");
    label.setAttribute("for", "cif");
    label.innerHTML = "CIF";
    divdos.appendChild(label);

    var inputCIF = document.createElement("input");
    inputCIF.setAttribute("type", "text");
    inputCIF.setAttribute("class", "form-control");
    inputCIF.setAttribute("id", "cif");
    inputCIF.setAttribute("placeholder", "X12345678");
    inputCIF.setAttribute("name", "cif");

    divdos.appendChild(inputCIF);
    form.appendChild(divrow);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    divrow.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "name");
    label.innerHTML = "Nombre";
    divtres.appendChild(label);
    var inputN = document.createElement("input");
    inputN.setAttribute("type", "text");
    inputN.setAttribute("class", "form-control");
    inputN.setAttribute("id", "name");
    inputN.setAttribute("placeholder", "Nombre Empresa");
    inputN.setAttribute("name", "name");
    divtres.appendChild(inputN);
    form.appendChild(divrow);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    divrow.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "telefono");
    label.innerHTML = "Telefono";
    divcuatro.appendChild(label);
    var inputA = document.createElement("input");
    inputA.setAttribute("type", "text");
    inputA.setAttribute("class", "form-control");
    inputA.setAttribute("id", "telefono");
    inputA.setAttribute("placeholder", "967462619");
    inputA.setAttribute("name", "telefono");
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
    label.innerHTML = "Email";
    divcinco.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "email");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "email");
    inputE.setAttribute("placeholder", "info@empresa.com");
    inputE.setAttribute("name", "email");
    divcinco.appendChild(inputE);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "direccion");
    label.innerHTML = "Direccion";
    divseis.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "text");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "direccion");
    inputE.setAttribute("placeholder", "C/ piruleta");
    inputE.setAttribute("name", "direccion");
    divseis.appendChild(inputE);
    form.appendChild(divrow2);


    var divsiete = document.createElement("div");
    divsiete.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divsiete);

    var label = document.createElement("label");
    label.setAttribute("for", "pcontacto");
    label.innerHTML = "Persona Contacto";
    divsiete.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "pcontacto");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "pcontacto");
    inputE.setAttribute("placeholder", "Perico");
    inputE.setAttribute("name", "pcontacto");
    divsiete.appendChild(inputE);
    form.appendChild(divrow2);

    var divboton = document.createElement("div");
    divboton.setAttribute("class", "row");
    divboton.setAttribute("style", "margin-top: 5px");
    contenido.appendChild(divboton);

    var col = document.createElement("div");
    col.setAttribute("class", "col");
    divboton.appendChild(col);


    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary");
    boton.setAttribute("style", "width:30%;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        insertarEmpresaBD();
    });

    boton.innerHTML = "Crear Perfil Empresa";
    col.appendChild(boton);
    form.appendChild(divboton);
    fondo.appendChild(contenido);
}

function pintaIniciarSesionEmpresa() {
    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    h2.innerHTML = "Iniciar Sesion Empresa";
    contenido.appendChild(h2);
    var form = document.createElement("form");
    form.setAttribute("action", "submit");
    contenido.appendChild(form);

//cif
    var label = document.createElement("label");
    label.setAttribute("for", "cif");
    label.innerHTML = "CIF";
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "cif");
    input.setAttribute("placeholder", "X12345678");
    input.setAttribute("name", "cif");
    input.required = true;
    form.appendChild(input);

//contraseña
    var label = document.createElement("label");
    label.setAttribute("for", "password");
    label.innerHTML = "Contraseña";
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "password");
    input.setAttribute("name", "password");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:40%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        iniciaSesionEmpresa();
    });

    boton.innerHTML = "Entrar";
    form.appendChild(boton);
    fondo.appendChild(contenido);
}


function iniciaSesionEmpresa() {
    var cif = document.getElementById("cif").value;
    var password = document.getElementById("password").value;

    var objLogin = {'cif': cif, 'password': password};
    var json = JSON.stringify(objLogin);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/loginEmpresa.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto==0) {
                alert("Usuario o contraseña incorrecto");
            }else{

                if(objeto['temporal'] == "true") {
                    var fondo = document.getElementById("fondo");
                    limpiarPantalla(fondo);
                    pideCambioContraseñaEmp(objeto['cif']);
                }else{
                    dameCursos();
                }
                
                
            }

        }
    }
}

function dameCursos() {
    //perfiles
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getCursosCentro.php");
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            pintaSolicitarEmpleo(objeto);
        }
    }
}

function pintaSolicitarEmpleo(objeto) {

    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:80%;");

    var h2 = document.createElement("h2");
    h2.innerHTML = "Buscar Alumnos";
    contenido.appendChild(h2);
    var form = document.createElement("form");
    form.setAttribute("action", "submit");
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
    label.innerHTML = "Perfil";
    divdos.appendChild(label);

    var inputD = document.createElement("select");
    inputD.setAttribute("type", "select");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "perfil");
    inputD.setAttribute("name", "perfil");

    for(i=0; i < objeto.length; i++) {
        var option = document.createElement("option");
        option.value=objeto[i]["id"];
        option.text = objeto[i]["nombre"];
        inputD.appendChild(option);
    }

    divdos.appendChild(inputD);
    form.appendChild(divrow);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    divrow.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "experiencia");
    label.innerHTML = "Experiencia";
    divtres.appendChild(label);
    var inputN = document.createElement("input");
    inputN.setAttribute("type", "number");
    inputN.setAttribute("class", "form-control");
    inputN.setAttribute("id", "experiencia");
    inputN.setAttribute("placeholder", "Meses");
    inputN.setAttribute("name", "experiencia");
    divtres.appendChild(inputN);
    form.appendChild(divrow);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    divrow.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "experiencia");
    label.innerHTML = "Cambiar de residencia";
    divcuatro.appendChild(label);

    var inputA = document.createElement("input");
    inputA.setAttribute("type", "checkbox");
    inputA.setAttribute("class", "form-control");
    inputA.setAttribute("id", "cambiarresidencia");
    inputA.setAttribute("name", "cambiarresidencia");
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
    label.setAttribute("for", "pviajar");
    label.innerHTML = "Posibilidad Viajar";
    divcinco.appendChild(label);

    var inputE = document.createElement("input");
    inputE.setAttribute("type", "checkbox");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "viajar");
    inputE.setAttribute("name", "viajar");

    divcinco.appendChild(inputE);
    form.appendChild(divrow2);    

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
        buscarAlumnos();

    });

    boton.innerHTML = "Buscar Alumnos";
    col.appendChild(boton);
    form.appendChild(divboton);
    fondo.appendChild(contenido);

}


function buscarAlumnos() {
    var perfil = document.getElementById("perfil").value;
    var experiencia = document.getElementById("experiencia").value;
    var cambiarResidencia = document.getElementById("cambiarresidencia").checked;
    var posibilidadViajar = document.getElementById("viajar").checked;

    var objetoSolicitud = {'perfil': perfil, 'experiencia': experiencia, 'cambiarResidencia': cambiarResidencia, 'posibilidadViajar': posibilidadViajar};

    var json = JSON.stringify(objetoSolicitud);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getAlumnosPerfil.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == 0){
                alert("No hay alumnos disponibles para estas condiciones de busqueda");
            }else{
                listadoAlumnos(objeto);
            }
            
            
        }
    }

}


function insertarEmpresaBD() {
    var cif = document.getElementById("cif").value;
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var pContacto = document.getElementById("pcontacto").value;

    var objetoEmpresa = {'cif': cif, 'nombre': nombre, 'telefono': telefono, 'email': email, 
    'password': generaPassword(), 'direccion': direccion, 'pcontacto': pContacto};

    var json = JSON.stringify(objetoEmpresa);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/setEmpresa.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            alert("Perfil empresa creado correctamente");
            var fondo = document.getElementById("fondo");
            limpiarPantalla(fondo);
            pintaIniciarSesionEmpresa();
        }
    }

}


function guardarNuevaPasswordEmp(identificador) {
    var pass1 = document.getElementById("passnueva1").value;
    var pass2 = document.getElementById("passnueva2").value;

    if(pass1 == pass2) {
        var objPass = {'perfil': 'empresa', 'identificador': identificador, 'pass1': pass1};
        var json = JSON.stringify(objPass);
        objetoAjax = ObjetoAjax();
        objetoAjax.open('GET', "php/updatePassword.php?json=" + json);
        objetoAjax.send();
        objetoAjax.onreadystatechange = function () {
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
                dameCursos();
            }
        }
    }else{
        document.getElementById("passnueva1").value = "";
        document.getElementById("passnueva1").value = "";
        alert("Las contraseñas no coinciden");
    }

}


function pideCambioContraseñaEmp(identificador) {
    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    h2.innerHTML = "Contraseña Nueva";
    contenido.appendChild(h2);
    var form = document.createElement("form");
    form.setAttribute("action", "submit");
    contenido.appendChild(form);

    //pass 1
    var label = document.createElement("label");
    label.setAttribute("for", "passnueva1");
    label.innerHTML = "Contraseña";
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
    label.innerHTML = "Confirmar Contraseña";
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
        guardarNuevaPasswordEmp(identificador);
    });

    boton.innerHTML = "Guardar";
    form.appendChild(boton);
    fondo.appendChild(contenido);
}

function listadoAlumnos(objeto) {

    //var fondo = document.getElementById("fondo");
    //limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:80%;");

    var h2 = document.createElement("h3");
    h2.innerHTML = "Alumnos encontrados";
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("DNI");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("NOMBRE");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("APELLIDOS");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);

    var cab4 = document.createElement("th");
    var texto4 = document.createTextNode("EMAIL");
    cab4.appendChild(texto4);
    cab.appendChild(cab4);

    var cab5 = document.createElement("th");
    var texto5 = document.createTextNode("DIRECCION");
    cab5.appendChild(texto5);
    cab.appendChild(cab5);
    tblBody.appendChild(cab);


    for (var i = 0; i < objeto.length; i++) {
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["dni"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["nombre"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["apellidos"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["email"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["residencia"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        
        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-success");
    boton.setAttribute("style", "width:20%;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        generaPDF(objeto, "ver");

    });

    boton.innerHTML = "Ver PDF";
    contenido.appendChild(boton);
    fondo.appendChild(contenido);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-success");
    boton.setAttribute("style", "width:20%; margin-left: 20px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        generaPDF(objeto, "descargar");

    });

    boton.innerHTML = "Descargar PDF";
    contenido.appendChild(boton);
    fondo.appendChild(contenido);


}

function generaPDF(objeto, opcion) {
    var doc = new jsPDF();

    doc.setTextColor(100);
    doc.text(20, 50, 'Listado de Alumnos');

    for (var i = 0; i < objeto.length; i++) {
        doc.setTextColor(100);
        doc.text(20, 20, objeto[i]["dni"] + " " + objeto[i]["nombre"] + " " + objeto[i]["apellidos"])
    }

    if(opcion=="ver") {
        var string = doc.output('datauri');
       
        var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }else{
        doc.save();
    }

}