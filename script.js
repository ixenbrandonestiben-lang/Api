const url = "https://randomuser.me/api/?results=50";

let usuarios = [];
usuarios.className = "card";

const botonCargar = document.getElementById("btn");
const botonBuscar = document.getElementById("btnbuscarusuario");
const input = document.getElementById("input");
const cargando = document.getElementById("loading");
const contenedor = document.getElementById("contenedorUsuarios");

async function llamadaApi() {

    try {

        cargando.textContent = "Cargando usuarios...";

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error en la API");
        }

        const data = await respuesta.json();

        usuarios = data.results;

        mostrarUsuarios(usuarios);

        cargando.textContent = "";

    } catch (error) {

        console.error(error);
        cargando.textContent = "Error al cargar usuarios";

    }
}

function mostrarUsuarios(lista) {

    contenedor.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        const user = lista[i];

        const tarjetaUsuario = document.createElement("div");
        tarjetaUsuario.className = "card";

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

        tarjetaUsuario.appendChild(imagen);
        tarjetaUsuario.appendChild(nombre);
        tarjetaUsuario.appendChild(email);
        tarjetaUsuario.appendChild(ciudad);
        tarjetaUsuario.appendChild(pais);

        contenedor.appendChild( tarjetaUsuario);
    }
}

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

        cargando.textContent = "";

    }, 700);
}

botonCargar.addEventListener("click", llamadaApi);
botonBuscar.addEventListener("click", buscarUsuario);