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
           class="btn-contactar"
           onclick="solicitarIntercambio('${usuario.email}')">
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

function solicitarIntercambio(emailDestino){

    const usuarioActual =
    JSON.parse(
        localStorage.getItem(
            "usuarioLogueado"
        )
    );

    if(!usuarioActual){
        alert(
            "Debes iniciar sesión"
        );
        return;
    }

    if(
        usuarioActual.email ===
        emailDestino
    ){
        alert(
            "No puedes enviarte solicitudes a ti mismo"
        );
        return;
    }

    let solicitudes =
    JSON.parse(
        localStorage.getItem(
            "solicitudes"
        )
    ) || [];

    const existe =
    solicitudes.find(
        solicitud =>
        solicitud.emisor ===
        usuarioActual.email &&
        solicitud.receptor ===
        emailDestino
    );

    if(existe){
        alert(
            "Ya enviaste una solicitud"
        );
        return;
    }

    solicitudes.push({
        id: Date.now(),
        emisor:
        usuarioActual.email,
        receptor:
        emailDestino,
        estado:
        "pendiente",
        fecha:
        new Date()
        .toLocaleDateString()
    });

    localStorage.setItem(
        "solicitudes",
        JSON.stringify(
            solicitudes
        )
    );

    alert(
        "Solicitud enviada"
    );
}