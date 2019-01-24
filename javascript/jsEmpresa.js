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
        iniciaSesion();
    });

    boton.innerHTML = "Entrar";
    form.appendChild(boton);
    fondo.appendChild(contenido);
}



function insertarEmpresaBD() {
    var cif = document.getElementById("cif").value;
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;



    var objetoEmpresa = {'cif': cif, 'nombre': nombre, 'telefono': telefono, 'email': email, 
    'password': generaPassword()};

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
        }
    }


}