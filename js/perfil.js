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

document.getElementById("bio").value =
usuario.bio || "";

function agregarHabilidadEnsenar(){

    const input =
    document.getElementById(
        "habilidadEnsenar"
    );

    if(input.value === "") return;

    usuario.habilidadesEnsenar.push(
        input.value
    );

    cargarHabilidades();

    input.value = "";
}

function agregarHabilidadAprender(){

    const input =
    document.getElementById(
        "habilidadAprender"
    );

    if(input.value === "") return;

    usuario.habilidadesAprender.push(
        input.value
    );

    cargarHabilidades();

    input.value = "";
}

function cargarHabilidades(){

    const listaEnsenar =
    document.getElementById("listaEnsenar");

    const listaAprender =
    document.getElementById("listaAprender");

    listaEnsenar.innerHTML = "";
    listaAprender.innerHTML = "";

    usuario.habilidadesEnsenar.forEach(habilidad => {

        const li =
        document.createElement("li");

        li.textContent = habilidad;

        listaEnsenar.appendChild(li);
    });

    usuario.habilidadesAprender.forEach(habilidad => {

        const li =
        document.createElement("li");

        li.textContent = habilidad;

        listaAprender.appendChild(li);
    });

}

cargarHabilidades();

function cerrarSesion(){

    localStorage.removeItem(
        "usuarioLogueado"
    );

    window.location.href =
    "login.html";
}

function guardarPerfil(){

    usuario.bio =
    document.getElementById("bio").value;

    let usuarios =
    JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    const indice =
    usuarios.findIndex(
        u => u.email === usuario.email
    );

    usuarios[indice] = usuario;

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuario)
    );

    alert(
        "Perfil guardado correctamente"
    );
}

document
.getElementById("fotoInput")
.addEventListener(
    "change",
    cargarFoto
);

function cargarFoto(event){

    const archivo =
    event.target.files[0];

    if(!archivo) return;

    const reader =
    new FileReader();

    reader.onload = function(e){

        const imagenBase64 =
        e.target.result;

        document.getElementById(
            "fotoPerfil"
        ).src = imagenBase64;

        usuario.foto =
        imagenBase64;
    };

    reader.readAsDataURL(
        archivo
    );
}

if(usuario.foto){

    document.getElementById(
        "fotoPerfil"
    ).src = usuario.foto;
}