const form =
document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    if(
        nombre === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ){
        alert("Todos los campos son obligatorios");
        return;
    }

    if(password !== confirmPassword){
        alert("Las contraseñas no coinciden");
        return;
    }

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios"))
    || [];

    const existeUsuario =
    usuarios.find(
        usuario => usuario.email === email
    );

    if(existeUsuario){
        alert("El correo ya está registrado");
        return;
    }

    usuarios.push({
        nombre,
        email,
        password
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Usuario registrado correctamente");

    window.location.href =
    "login.html";

});