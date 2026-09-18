function buscarUsuarios(){

    const texto =
    document
    .getElementById(
        "busqueda"
    )
    .value
    .toLowerCase();

    const usuarios =
    JSON.parse(
        localStorage.getItem(
            "usuarios"
        )
    ) || [];

    const resultados =
    document.getElementById(
        "resultados"
    );

    resultados.innerHTML = "";

    usuarios.forEach(usuario => {

        const coincide =
        usuario.habilidadesEnsenar
        .some(habilidad =>
            habilidad
            .toLowerCase()
            .includes(texto)
        );

        if(coincide){

            const card =
            document.createElement(
                "div"
            );

            card.classList.add(
                "card"
            );

            card.innerHTML = `
                 <div class="card-header">

                 <img
                 src="${
                       usuario.foto ||
                       'https://via.placeholder.com/100'
                       }">

                </div>

                <div class="card-body">

                <h3>${usuario.nombre}</h3>

                <p class="bio">
                ${usuario.bio || "Sin descripción"}
                </p>

                <div class="skills">

            ${
              usuario.habilidadesEnsenar
            .map(
                 habilidad =>
                 `<span class="skill">
                 ${habilidad}
            </span>`
        )
        .join("")
        }

    </div>

    <button
    class="btn-contactar">
        Solicitar intercambio
    </button>

</div>
`;

            resultados.appendChild(
                card
            );
        }

    });

}