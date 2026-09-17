function buscarHabilidad() {

    let habilidad =
        document.getElementById("searchInput").value;

    if(habilidad === ""){
        alert("Escribe una habilidad");
        return;
    }

    alert(
        "Buscando personas que enseñen: " +
        habilidad
    );
}