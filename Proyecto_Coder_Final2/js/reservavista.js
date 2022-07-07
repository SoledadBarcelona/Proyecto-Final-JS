const btn = document.getElementById("reg");

btn.addEventListener("click", () => {
    agregarUsuario();
});

function inicializarAplicacion() {
    crearTitulo();
    crearMenu();
}

function crearTitulo() {
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "Mis Reservas";
    document.body.appendChild(tituloH1);
}

function crearMenu() {
    let opciones = ["Mis Reservas", "Eminar Reserva"];
    opciones.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.innerHTML = opcion;

        if (opcion === "Mis Reservas") {
            boton.addEventListener("click", () => {
                listarUsuarios(usuarios);
            });
        } else if (opcion === "Eminar Reserva") {
            boton.addEventListener("click", () => {
                eliminarUsuario();
                listarUsuarios(usuarios);
            });
        }

        document.body.appendChild(boton);
    });
}

function listarUsuarios(listaUsuarios) {
    let miLista = document.querySelector("#listaUsuarios");
    if (!miLista) {
        miLista = document.createElement("table");
        miLista.setAttribute("id", "listaUsuarios");
    }
    miLista.innerHTML = "";

    const encabezado = document.createElement("tr");

    const tdId = document.createElement("th");
    tdId.innerHTML = "Orden";
    encabezado.appendChild(tdId);

    const tdNomnre = document.createElement("th");
    tdNomnre.innerHTML = "Dia";
    encabezado.appendChild(tdNomnre);

    const tdDni = document.createElement("th");
    tdDni.innerHTML = "Horario:";
    encabezado.appendChild(tdDni);

    const tdEdad = document.createElement("th");
    tdEdad.innerHTML = "Cantidad de Persoas";
    encabezado.appendChild(tdEdad);

    miLista.appendChild(encabezado);

    listaUsuarios.forEach((usuario) => {
        const nodotr = document.createElement("tr");
        let nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.id}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.nombre}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.dni}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.edad}`;
        nodotr.appendChild(nodotd);

        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista);
}

function agregarUsuario() {
    let id = 1;
    if (usuarios.length > 0) {
        id = usuarios[usuarios.length - 1].id + 1;
    }

    let nombre = document.getElementById("fecha").value;
    let dni = document.getElementById("hora").value;
    let edad = document.getElementById("cantidad").value;
    let usuario = new Usuario(id, nombre, dni, edad);

    usuarios.push(usuario);
    console.log("ALMACENADO");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire({
        title: "Nueva Recerva Agregado",
        icon: "success",
        confirmButtonText: "OK",
    });
}

function eliminarUsuario() {
    let id = Number(prompt("Ingrese la orden de recerva que quiere eliminar"));

    let encontrado = usuarios.find((usuario) => usuario.id === id);

    if (!encontrado) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
            title: "No se encontro la Recerva",
            icon: "success",
            confirmButtonText: "OK",
        });
    } else {
        let index = usuarios.indexOf(encontrado);

        usuarios.splice(index, 1);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
            title: "Reserva Cancelada",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
}