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

function cerrarSesion(){

    localStorage.removeItem(
        "usuarioLogueado"
    );

    window.location.href =
    "login.html";
}