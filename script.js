const url = "https://randomuser.me/api/?results=10";

let usuarios = [];

// ELEMENTOS
const botonCargar = document.getElementById("btn");
const botonBuscar = document.getElementById("btnbuscarusuario");
const input = document.getElementById("input");
const loading = document.getElementById("loading");
const contenedor = document.getElementById("contenedorUsuarios");


// =========================
// TRAER USUARIOS DE LA API
// =========================
async function llamadaApi() {

    try {

        loading.textContent = "Cargando usuarios...";

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error en la API");
        }

        const data = await respuesta.json();

        usuarios = data.results;

        mostrarUsuarios(usuarios);

        loading.textContent = "";

    } catch (error) {

        console.error(error);
        loading.textContent = "Error al cargar usuarios";

    }
}


// =========================
// MOSTRAR USUARIOS
// =========================
function mostrarUsuarios(lista) {

    contenedor.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        const user = lista[i];

        const card = document.createElement("div");
        card.className = "card";

        const nombre = document.createElement("p");
        nombre.textContent =
            user.name.first + " " + user.name.last;

        const email = document.createElement("p");
        email.textContent = user.email;

        const ciudad = document.createElement("p");
        ciudad.textContent = user.location.city;

        const pais = document.createElement("p");
        pais.textContent = user.location.country;

        const imagen = document.createElement("img");
        imagen.src = user.picture.large;

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(email);
        card.appendChild(ciudad);
        card.appendChild(pais);

        contenedor.appendChild(card);
    }
}


// =========================
// BUSCAR USUARIO
// =========================
function buscarUsuario() {

    const texto = input.value.toLowerCase();

    loading.textContent = "Buscando...";

    setTimeout(() => {

        const resultado = usuarios.filter(user => {

            const nombre =
                (user.name.first + " " + user.name.last).toLowerCase();

            return (
                nombre.includes(texto) ||
                user.email.toLowerCase().includes(texto) ||
                user.location.city.toLowerCase().includes(texto) ||
                user.location.country.toLowerCase().includes(texto)
            );
        });

        mostrarUsuarios(resultado);

        loading.textContent = "";

    }, 700);
}


// =========================
// EVENTOS
// =========================
botonCargar.addEventListener("click", llamadaApi);
botonBuscar.addEventListener("click", buscarUsuario);