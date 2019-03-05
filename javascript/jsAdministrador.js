function pintaIniciarSesionAdmin() {
   var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Iniciar Sesion Administrador");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

//usuario
    var label = document.createElement("label");
    label.setAttribute("for", "usuario");
    var texto = document.createTextNode("Usuario");
    label.appendChild(texto);
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "usuario");
    input.setAttribute("placeholder", "Usuario");
    input.setAttribute("name", "usuario");
    input.required = true;
    form.appendChild(input);

//contraseña
    var label = document.createElement("label");
    label.setAttribute("for", "password");
    var texto = document.createTextNode("Contraseña");
    label.appendChild(texto);
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
        iniciaSesionAdmin();
    });

    var texto = document.createTextNode("Entrar");
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);

}

function iniciaSesionAdmin() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    var objAdmin = {'usuario': usuario, 'password': password};
    var json = JSON.stringify(objAdmin);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/loginAdministrador.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto==0) {
                alert("Usuario o contraseña incorrecto");
            }else{
            	aniadirSubmenu("admin", "admin");
                primeraPantalla();
            }

        }
    }
}

function pintaListarAlumnos(tipo) {
	var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:55%;");

    var h4 = document.createElement("h4");
    var texto = document.createTextNode("Selecciona un Perfil");
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
                for(i=0; i< objeto.length; i++) {
                    var option = document.createElement("option");
                    option.value=objeto[i]["id"];
                    option.text = objeto[i]["nombre"];
                    inputD.appendChild(option);
                }

                inputD.setAttribute("type", "select");
                inputD.setAttribute("class", "form-control");
                inputD.setAttribute("id", "perfil");
                inputD.setAttribute("name", "perfil");

                form.appendChild(inputD);
                fondo.appendChild(contenido);

                var divboton = document.createElement("div");
    			divboton.setAttribute("class", "row");
    			divboton.setAttribute("style", "margin-top: 5px");
    			contenido.appendChild(divboton);

                var col = document.createElement("div");
    			col.setAttribute("class", "col");
    			divboton.appendChild(col);

    			var boton = document.createElement("button");
    			boton.setAttribute("class", "btn btn-primary");
    			boton.setAttribute("style", "width:30%; margin-top:10px;");
    			boton.addEventListener("click", function (event) {
        			event.preventDefault();
        			if(tipo=="empresas") {
						buscarEmpresasPerfil(document.getElementById("perfil").value);
        			}else{
        				buscarAlumnosPerfil(document.getElementById("perfil").value);
        			}
        			
    			});

    			if(tipo == "empresas") {
					var texto = document.createTextNode("Buscar Empresas");
    			}else{
    				var texto = document.createTextNode("Buscar Perfil");
    			}

    			boton.appendChild(texto);
    			col.appendChild(boton);
    			form.appendChild(divboton);
    			fondo.appendChild(contenido);
            }else{
                alert("No hemos encontrado cursos");
            }

        }
    }
}

function buscarAlumnosPerfil(idEstudio) {

    var objEstudio = {'idestudio': idEstudio};

    var json = JSON.stringify(objEstudio);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getAlumnosPerfilEstudio.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == 0){
                alert("No hay alumnos disponibles para estas condiciones de busqueda");
                primeraPantalla();
            }else{
                listadoAlumnosPerfil(objeto);
            }
            
            
        }
    }
}

function buscarEmpresasPerfil(idEstudio) {
    var objEstudio = {'idestudio': idEstudio};

    var json = JSON.stringify(objEstudio);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getEmpresasPerfil.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == 0){
                alert("No hay Empresas disponibles para esta busqueda");
                primeraPantalla();
            }else{
                listadoEmpresasPerfil(objeto);
            }
            
            
        }
    }
}

function listadoEmpresasPerfil(objeto, bucle) {

	var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:80%;");

    var h2 = document.createElement("h4");
    if(bucle != undefined) {
		var texto = document.createTextNode("Datos Empresa");
    }else{
		var texto = document.createTextNode("Empresas Encontradas");
    }

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("CIF");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("NOMBRE");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("TELEFONO");
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

    var cab6 = document.createElement("th");
    var texto6 = document.createTextNode("PERSONA DE CONTACTO");
    cab6.appendChild(texto6);
    cab.appendChild(cab6);

    tblBody.appendChild(cab);

    if (bucle != undefined) {
		var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["cif"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["nombre"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["telefono"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["email"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["direccion"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["pcontacto"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        tblBody.appendChild(hilera);
    }else{
    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["cif"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["nombre"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["telefono"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["email"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["direccion"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["persona_contacto"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}
    }
    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);

}


function listadoAlumnosPerfil(objeto, bucle) {

	var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:90%;");

    var h2 = document.createElement("h3");

    if(bucle != undefined) {
		var texto = document.createTextNode("Datos Alumno");
    }else{
		var texto = document.createTextNode("Alumnos Encontrados");
    }
    
    h2.appendChild(texto);
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

    var cab6 = document.createElement("th");
    var texto6 = document.createTextNode("DISPONIBILIDAD VIAJAR");
    cab6.appendChild(texto6);
    cab.appendChild(cab6);

    var cab7 = document.createElement("th");
    var texto7 = document.createTextNode("CAMBIAR RESIDENCIA");
    cab7.appendChild(texto7);
    cab.appendChild(cab7);

    var cab8 = document.createElement("th");
    var texto8 = document.createTextNode("CONTRATADO");
    cab8.appendChild(texto8);
    cab.appendChild(cab8);

    var cab9 = document.createElement("th");
    var texto9 = document.createTextNode("TELEFONO");
    cab9.appendChild(texto9);
    cab.appendChild(cab9);



    tblBody.appendChild(cab);

    if (bucle == undefined) {
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

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["disponibilidadViajar"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

       	var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["cambioResidencia"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

       	var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["contratado"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto[i]["telefono"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        tblBody.appendChild(hilera);
    }

    }else{
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["dni"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["nombre"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["apellidos"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["email"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["residencia"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["disponibilidadViajar"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

       	var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["cambioResidencia"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

       	var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["contratado"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(objeto["telefono"]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);


        tblBody.appendChild(hilera);
    }
    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);
}


function buscarUnAlumnoEmpresa(tipo) {
	var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

	var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");

    if (tipo == "empresa") {
    	var texto = document.createTextNode("CIF Empresa");
    }else{
    	var texto = document.createTextNode("DNI Alumno");
    }

    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "identificador");
    input.setAttribute("placeholder", "X12345678");
    input.setAttribute("name", "identificador");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:60%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        if(tipo == "empresa") {
        	buscaEmpresa(document.getElementById("identificador").value);
        }else{
        	buscaAlumno(document.getElementById("identificador").value);
        }

    });

    if(tipo == "empresa") {
		var texto = document.createTextNode("Buscar Empresa");
    }else{
		var texto = document.createTextNode("Buscar Alumno");
    }
    
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);

}


function buscaAlumno(identificador) {
	var objAlumno = {'identificador': identificador};

    var json = JSON.stringify(objAlumno);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getAlumnoCompleto.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == 0){
                alert("DNI no registrado en la base de datos");
                primeraPantalla();
            }else{
                listadoAlumnosPerfil(objeto, "no");
                listadoExperiencias(objeto.arrayExperiencia);
                listadoEstudios(objeto.arrayEstudios);
                listadoCursos(objeto.arrayCursos);
                listadoContratos(objeto.arrayContratos, "alumno");
            }
            
            
        }
    }

}

function buscaEmpresa(identificador) {
	var objEmpresa = {'identificador': identificador};

    var json = JSON.stringify(objEmpresa);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/getEmpresaCompleta.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == 0){
                alert("CIF no registrado en la base de datos");
                primeraPantalla();
            }else{
                listadoEmpresasPerfil(objeto, "no");
				listadoSolicitudes(objeto.arraySolicitudes);
				listadoContratos(objeto.arrayContratos, "empresa");
            }
            
            
        }
    }
}

function listadoSolicitudes(objeto) {
	if(objeto.length != 0) {

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:45%;");

    var h2 = document.createElement("h4");
	var texto = document.createTextNode("Solicitudes");

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("FECHA");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("PERFIL");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("VIAJAR");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);

    var cab4 = document.createElement("th");
    var texto4 = document.createTextNode("CAMBIO RESIDENCIA");
    cab4.appendChild(texto4);
    cab.appendChild(cab4);

    var cab5 = document.createElement("th");
    var texto5 = document.createTextNode("EXPERIENCIA");
    cab5.appendChild(texto5);
    cab.appendChild(cab5);


    tblBody.appendChild(cab);

    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["fecha"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["perfil"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["viajar"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["cambioResidencia"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["experiencia"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);
}

}

function listadoContratos(objeto, tipo) {
	if(objeto.length != 0) {
    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:45%;");

    var h2 = document.createElement("h4");
	var texto = document.createTextNode("Contratos Realizados");

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    if(tipo =="empresa") {
    	var cab1 = document.createElement("th");
    	var texto1 = document.createTextNode("DNI ALUMNO");
    	cab1.appendChild(texto1);
    	cab.appendChild(cab1);
	}

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("CIF EMPRESA");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("FECHA");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);

    tblBody.appendChild(cab);

    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

    		if(tipo =="empresa") {
        		var celda = document.createElement("td");
        		var textoCelda = document.createTextNode(objeto[i]["dniAlumno"]);
        		celda.appendChild(textoCelda);
        		hilera.appendChild(celda);
        	}

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["idEmpresa"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["fechaAltaEmpleo"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);

}

}

function listadoExperiencias(objeto) {
	if(objeto.length != 0) {

	var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:45%;");

    var h2 = document.createElement("h4");
	var texto = document.createTextNode("Experiencias Laborales");

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("ESPECIALIDAD");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("EMPRESA");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("MESES");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);

    tblBody.appendChild(cab);

    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["especialidad"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["empresa"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["tiempo"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);

}

}


function listadoEstudios(objeto) {
	if(objeto.length != 0) {

	var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:45%;");

    var h2 = document.createElement("h4");
	var texto = document.createTextNode("Estudios");

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("NOMBRE");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("NIVEL");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("PERFIL");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);

    var cab4 = document.createElement("th");
    var texto4 = document.createTextNode("INSTITUTO");
    cab4.appendChild(texto4);
    cab.appendChild(cab4);

    tblBody.appendChild(cab);

    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["nombre"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["nivel"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["perfil"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["nombreInstituto"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);
}

}

function listadoCursos(objeto) {
	if(objeto.length != 0) {

	var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:45%;");

    var h2 = document.createElement("h4");
	var texto = document.createTextNode("Cursos");

    h2.appendChild(texto);
    contenido.appendChild(h2);

    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");

    var tblBody = document.createElement("tbody");

    var cab = document.createElement("tr");

    var cab1 = document.createElement("th");
    var texto1 = document.createTextNode("NOMBRE");
    cab1.appendChild(texto1);
    cab.appendChild(cab1);

    var cab2 = document.createElement("th");
    var texto2 = document.createTextNode("PERFIL");
    cab2.appendChild(texto2);
    cab.appendChild(cab2);

    var cab3 = document.createElement("th");
    var texto3 = document.createTextNode("DURACION");
    cab3.appendChild(texto3);
    cab.appendChild(cab3);


    tblBody.appendChild(cab);

    	for (var i = 0; i < objeto.length; i++) {
        	var hilera = document.createElement("tr");

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["nombre"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["centro"]);
       	 	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	var celda = document.createElement("td");
        	var textoCelda = document.createTextNode(objeto[i]["duracion"]);
        	celda.appendChild(textoCelda);
        	hilera.appendChild(celda);

        	tblBody.appendChild(hilera);
    	}    

    tabla.appendChild(tblBody);
    contenido.appendChild(tabla);
    tabla.setAttribute("border", "2");
    fondo.appendChild(contenido);
}
}

function mandaCorreo(tipo) {
    var objTipo = {'tipo': tipo};

    var json = JSON.stringify(objTipo);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/mandarCorreos.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            if(tipo==="alumno") {
                //var datos = objetoAjax.responseText;
                //var objeto = JSON.parse(datos);
                //alert(objeto);
                alert("Hemos enviado un correo electronico a todos los alumnos que llevan 1 año sin entrar a la aplicacion");
            }else{
                alert("Hemos enviado un correo electronico a todas las empresas que llevan 6 meses sin entrar a la aplicacion");
            }
        }
    } 
}


function pintaEliminarAlumno() {

    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");

    var texto = document.createTextNode("DNI Alumno");


    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "identificador");
    input.setAttribute("placeholder", "X12345678");
    input.setAttribute("name", "identificador");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:60%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();

        borraAlumno(document.getElementById("identificador").value);

    });


    var texto = document.createTextNode("Eliminar Alumno");

    
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);

}


function borraAlumno(dni) {
    var objDni = {'dni': dni};

    var json = JSON.stringify(objDni);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/deleteAlumno.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            alert("Alumno Eliminado");
            primeraPantalla();
        }
    } 
}


function pintaEliminarEmpresa() {

    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");

    var texto = document.createTextNode("CIF Empresa");


    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "identificador");
    input.setAttribute("placeholder", "X12345678");
    input.setAttribute("name", "identificador");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:60%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();

        borrarEmpresa(document.getElementById("identificador").value);

    });


    var texto = document.createTextNode("Eliminar Empresa");

    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);

}


function borrarEmpresa(cif) {
    var objCif = {'cif': cif};

    var json = JSON.stringify(objCif);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/deleteEmpresa.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            alert("Empresa Eliminada");
            primeraPantalla();
        }
    } 
}


function primeraPantalla() {
    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:65%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Informacion General");
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
    var texto = document.createTextNode("Alumnos");
    label.appendChild(texto);
    divdos.appendChild(label);

    var inputDNI = document.createElement("input");
    inputDNI.setAttribute("type", "text");
    inputDNI.setAttribute("class", "form-control");
    inputDNI.setAttribute("id", "nalumnos");
    inputDNI.setAttribute("name", "nalumnos");
    inputDNI.disabled = true;
    inputDNI.setAttribute("value", 33);

    divdos.appendChild(inputDNI);
    form.appendChild(divrow);

    var divtres = document.createElement("div");
    divtres.setAttribute("class", "col-sm-4");
    divrow.appendChild(divtres);

    var label = document.createElement("label");
    label.setAttribute("for", "name");
    var texto = document.createTextNode("Empresas");
    label.appendChild(texto);
    divtres.appendChild(label);
    var inputN = document.createElement("input");
    inputN.setAttribute("type", "text");
    inputN.setAttribute("class", "form-control");
    inputN.setAttribute("id", "nempresas");
    inputN.setAttribute("name", "nempresas");
    inputN.setAttribute("value", 8);
    inputN.disabled = true;
    divtres.appendChild(inputN);
    form.appendChild(divrow);

    var divcuatro = document.createElement("div");
    divcuatro.setAttribute("class", "col-sm-4");
    divrow.appendChild(divcuatro);

    var label = document.createElement("label");
    label.setAttribute("for", "nestudios");
    var texto = document.createTextNode("Estudios");
    label.appendChild(texto);
    divcuatro.appendChild(label);
    var inputA = document.createElement("input");
    inputA.setAttribute("type", "text");
    inputA.setAttribute("class", "form-control");
    inputA.setAttribute("id", "nestudios");
    inputA.setAttribute("name", "nestudios");
    inputA.disabled = true;
    inputA.setAttribute("value", 4);
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
    label.setAttribute("for", "nsolicitudes");
    var texto = document.createTextNode("Solicitudes");
    label.appendChild(texto);
    divcinco.appendChild(label);
    var inputE = document.createElement("input");
    inputE.setAttribute("type", "text");
    inputE.setAttribute("class", "form-control");
    inputE.setAttribute("id", "nsolicitudes");
    inputE.setAttribute("name", "nsolicitudes");
    inputE.setAttribute("value", 28);
    inputE.disabled = true;
    divcinco.appendChild(inputE);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "ncursos");
    var texto = document.createTextNode("Cursos");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "ncursos");
    inputD.setAttribute("name", "ncursos");
    inputD.setAttribute("value", 6);
    inputD.disabled = true;
    divseis.appendChild(inputD);
    form.appendChild(divrow2);

    var divseis = document.createElement("div");
    divseis.setAttribute("class", "col-sm-4");
    divrow2.appendChild(divseis);

    var label = document.createElement("label");
    label.setAttribute("for", "nempleadoras");
    var texto = document.createTextNode("Empleadoras");
    label.appendChild(texto);
    divseis.appendChild(label);
    var inputD = document.createElement("input");
    inputD.setAttribute("type", "text");
    inputD.setAttribute("class", "form-control");
    inputD.setAttribute("id", "nempleadoras");
    inputD.setAttribute("name", "nempleadoras");
    inputD.setAttribute("value", 4);
    inputD.disabled = true;
    divseis.appendChild(inputD);
    
    form.appendChild(divrow2);

    fondo.appendChild(contenido);
}


