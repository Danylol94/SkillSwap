const usuario =
JSON.parse(
    localStorage.getItem(
        "usuarioLogueado"
    )
);

if(!usuario){

    window.location.href =
    "login.html";
}

document.getElementById(
    "nombreUsuario"
).textContent =
usuario.nombre;

document.getElementById(
    "correoUsuario"
).textContent =
usuario.email;

function agregarHabilidadEnsenar(){

    const input =
    document.getElementById(
        "habilidadEnsenar"
    );

    const lista =
    document.getElementById(
        "listaEnsenar"
    );

    if(input.value === "") return;

    const li =
    document.createElement("li");

    li.textContent =
    input.value;

    lista.appendChild(li);

    input.value = "";
}

function agregarHabilidadAprender(){

    const input =
    document.getElementById(
        "habilidadAprender"
    );

    const lista =
    document.getElementById(
        "listaAprender"
    );

    if(input.value === "") return;

    const li =
    document.createElement("li");

    li.textContent =
    input.value;

    lista.appendChild(li);

    input.value = "";
}

function cerrarSesion(){

    localStorage.removeItem(
        "usuarioLogueado"
    );

    window.location.href =
    "login.html";
}