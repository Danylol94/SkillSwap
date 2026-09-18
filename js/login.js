const form =
document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    const usuarios =
    JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    const usuarioEncontrado =
    usuarios.find(
        usuario =>
        usuario.email === email &&
        usuario.password === password
    );

    if(!usuarioEncontrado){
        alert("Correo o contraseña incorrectos");
        return;
    }

    localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuarioEncontrado)
    );

    alert(
        "Bienvenido " +
        usuarioEncontrado.nombre
    );

    window.location.href =
    "perfil.html";

});