/**
- Funcion para eliminar objetos hijos de el objeto que le pasamos
**/
function limpiarPantalla(cosa) {
    var arrayHijos = cosa.children;
    for (var i = arrayHijos.length - 1; i > -1; i--) {
        cosa.removeChild(arrayHijos[i]);
    }
}

/**
- Crea Obj Ajax
**/
function ObjetoAjax() {
    if (window.XMLHttpRequest) {
        objetoAjax = new XMLHttpRequest();
    } else {
        objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return objetoAjax;
}

/**
- Genera contraseña aleatoria
**/
function generaPassword() {
    var longitud = 5;
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    var password = "";
    for (i = 0; i < longitud; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return password;
}

function pintaRecordarPass(perfil) {
    var fondo = document.getElementById("fondo");
    limpiarPantalla(fondo);

    var contenido = document.createElement("div");

    contenido.setAttribute("id", "contenido");
    contenido.setAttribute("style", "width:25%;");

    var h2 = document.createElement("h2");
    var texto = document.createTextNode("Correo Electronico");
    h2.appendChild(texto);
    contenido.appendChild(h2);
    var form = document.createElement("form");
    contenido.appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "email");
    input.setAttribute("placeholder", "ejemplo@ejemplo.es");
    input.setAttribute("name", "email");
    input.required = true;
    form.appendChild(input);

    var boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary btn-block");
    boton.setAttribute("style", "width:40%; text-align: center; margin: 0 auto; margin-top: 10px;");
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        enviarNuevaPassword(document.getElementById("email").value, perfil);
        
    });

    var texto = document.createTextNode("Confirmar");
    boton.appendChild(texto);
    form.appendChild(boton);
    fondo.appendChild(contenido);
}

function enviarNuevaPassword(email, perfil) {

    var objetoUsuario = {'perfil': perfil, 'email': email, 'password': generaPassword()};

    var json = JSON.stringify(objetoUsuario);
    objetoAjax = ObjetoAjax();
    objetoAjax.open('GET', "php/setNuevaPass.php?json=" + json);
    objetoAjax.send();
    objetoAjax.onreadystatechange = function () {
        if (objetoAjax.readyState === 4 && objetoAjax.status === 200) {
            var datos = objetoAjax.responseText;
            var objeto = JSON.parse(datos);
            if(objeto == "true") {
                alert("Revise su correo electronico, hemos enviado su nueva contraseña.")
                if(perfil == "alumno") {
                    iniciarSesionSolicitante();
                }else{
                    pintaIniciarSesionEmpresa();
                }
            }
        }
    }

}


/**
- Gestiona los menus y submenus segun quien este logueado
**/
function aniadirSubmenu(tipo, objeto) {
    if(tipo=="admin") {
        var liadmin = document.getElementById("liempresa");
        limpiarPantalla(liadmin);
        var lialumno = document.getElementById("lialumno");
        limpiarPantalla(lialumno);


        var id = document.getElementById("submenusadmin");
        limpiarPantalla(id);
        var liempresa = document.getElementById("liadmin");

        var aempresa = document.getElementById("aadmin");
        aempresa.remove();

        var a = document.createElement("a");
        a.setAttribute("class", "dropdown-toggle");
        a.setAttribute("data-toggle", "dropdown");
        a.setAttribute("id", "aadmin");
        var texto = document.createTextNode("Bienvenido,  " + objeto + " ");
        var span = document.createElement("spam");
        span.setAttribute("class", "caret");
        a.appendChild(texto);
        a.appendChild(span);
        liempresa.appendChild(a);


        //Añade tantos elementos en el submenu como tengamos en la matriz
        matriz = ["Listar Alumnos por perfil", "Listar Empresas por perfil",
         "Buscar Alumno", "Buscar Empresa", "Mandar correo Alumnos", "Mandar correo Empresas",
          "Eliminar un Alumno", "Eliminar una Empresa", "Cerrar Sesion"];

        for(i = 0; i < matriz.length; i++) {
            var li = document.createElement("li");
            var a = document.createElement("a");

            switch (i) {
                case 0://listar alumnos perfil
                    a.addEventListener("click", function(){pintaListarAlumnos("alumnos")});
                    break;
                case 1://listar empresas perfil
                    a.addEventListener("click", function(){pintaListarAlumnos("empresas")});
                    break;
                case 2://buscar alumno
                    a.addEventListener("click", function(){buscarUnAlumnoEmpresa("alumno")});
                    break;
                case 3:///buscar empresa
                    a.addEventListener("click", function(){buscarUnAlumnoEmpresa("empresa")});
                    break;

                case 4: //mandar correo alumnos
                    a.addEventListener("click", function(){mandaCorreo("alumno")});
                    break;
                    
                case 5://manda correo empresas
                    a.addEventListener("click", function(){mandaCorreo("empresa")});
                    break;    

                case 6://eliminar alumno
                    a.addEventListener("click", function(){pintaEliminarAlumno()});
                    break;

                case 7://eliminar empresa
                    a.addEventListener("click", function(){pintaEliminarEmpresa()});
                    break;
                case 8://cerrar sesion
                    a.setAttribute("href", "");
            }

            a.appendChild(document.createTextNode(matriz[i]));
            li.appendChild(a);
            id.appendChild(li);
        }
    }

    if(tipo == "empresa") {
        var id = document.getElementById("submenuempresa");
        limpiarPantalla(id);
        var liempresa = document.getElementById("liempresa");

        var liadmin = document.getElementById("liadmin");
        limpiarPantalla(liadmin);
        var lialumno = document.getElementById("lialumno");
        limpiarPantalla(lialumno);

        var aempresa = document.getElementById("aempresa");
        aempresa.remove();

        var a = document.createElement("a");
        a.setAttribute("class", "dropdown-toggle");
        a.setAttribute("data-toggle", "dropdown");
        a.setAttribute("id", "aempresa");
        var texto = document.createTextNode("Bienvenido,  " + objeto["nombre"] + " ");
        var span = document.createElement("spam");
        span.setAttribute("class", "caret");
        a.appendChild(texto);
        a.appendChild(span);
        liempresa.appendChild(a);

        matriz = ["Buscar Alumno", "Modificar Datos", "Cerrar Sesion"];
        for(i = 0; i < matriz.length; i++) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            switch (i) {
                case 0:
                    a.addEventListener("click",function(){dameCursos(objeto["id"])});
                    break;
                case 1:
                    a.addEventListener("click",function(){modificarDatosEmpresa(objeto)});
                    break;
                case 2:
                    a.setAttribute("href", "");
            }

            a.appendChild(document.createTextNode(matriz[i]));
            li.appendChild(a);
            id.appendChild(li);
        }
    }

    if(tipo == "alumno") {
        var liadmin = document.getElementById("liadmin");
        limpiarPantalla(liadmin);
        var lialumno = document.getElementById("liempresa");
        limpiarPantalla(lialumno);


        var id = document.getElementById("submenualumno");
        limpiarPantalla(id);
        var liempresa = document.getElementById("lialumno");

        var aempresa = document.getElementById("aalumno");
        aempresa.remove();

        var a = document.createElement("a");
        a.setAttribute("class", "dropdown-toggle");
        a.setAttribute("data-toggle", "dropdown");
        a.setAttribute("id", "aalumno");
        var texto = document.createTextNode("Bienvenido,  " + objeto["nombre"] + " ");
        var span = document.createElement("spam");
        span.setAttribute("class", "caret");
        a.appendChild(texto);
        a.appendChild(span);
        liempresa.appendChild(a);


        matriz = ["Cerrar Sesion"];
        for(i = 0; i < matriz.length; i++) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href", "");
            a.appendChild(document.createTextNode(matriz[i]));
            li.appendChild(a);
            id.appendChild(li);
        }
    }

}

