const url = "https://randomuser.me/api/";

async function llamadaApi() {
    try {
        const api = await fetch(url);
        if (!api.ok) throw new Error("Error en la llamada a la API");
        const data = await api.json();
        console.log(data);

        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;
        const cell = user.cell;
        const city = user.location.city;
        const country = user.location.country;
        const state = user.location.state;
        const street = `${user.location.street.number} ${user.location.street.name}`;
        const postcode = user.location.postcode;

        const div_principal1 = document.createElement("div");
        const nameElement1 = document.createElement("p");
        nameElement1.textContent = name;
        nameElement1.className = "name";
        nameElement1.id = "1";
        div_principal1.appendChild(nameElement1);
        document.body.appendChild(div_principal1);

        const div_principal2 = document.createElement("div");
        const nameElement2 = document.createElement("p");
        nameElement2.textContent = email;
        nameElement2.className = "email";
        nameElement2.id = "2";
        div_principal2.appendChild(nameElement2);
        document.body.appendChild(div_principal2);

        const div_principal3 = document.createElement("div");
        const nameElement3 = document.createElement("img");
        nameElement3.textContent = picture;
        nameElement3.className = "picture";
        nameElement3.src = picture;
        nameElement3.alt = "User Picture";
        nameElement3.id = "3";
        div_principal3.appendChild(nameElement3);
        document.body.appendChild(div_principal3);


        const div_principal4 = document.createElement("div");
        const nameElement4 = document.createElement("p");
        nameElement4.textContent = cell;
        nameElement4.className = "cell";
        nameElement4.id = "4";
        div_principal4.appendChild(nameElement4);
        document.body.appendChild(div_principal4);


        const div_principal5 = document.createElement("div");
        const nameElement5 = document.createElement("p");
        nameElement5.textContent = city;
        nameElement5.className = "city";
        nameElement5.id = "5";
        div_principal5.appendChild(nameElement5);
        document.body.appendChild(div_principal5);

        const div_principal6 = document.createElement("div");
        const nameElement6 = document.createElement("p");
        nameElement6.textContent = country;
        nameElement6.className = "country";
        nameElement6.id = "6";
        div_principal6.appendChild(nameElement6);
        document.body.appendChild(div_principal6);

        const div_principal7 = document.createElement("div");
        const nameElement7 = document.createElement("p");
        nameElement7.textContent = state;
        nameElement7.className = "state";
        nameElement7.id = "7";
        div_principal7.appendChild(nameElement7);
        document.body.appendChild(div_principal7);

        const div_principal8 = document.createElement("div");
        const nameElement8 = document.createElement("p");
        nameElement8.textContent = street;
        nameElement8.className = "street";
        nameElement8.id = "8";
        div_principal8.appendChild(nameElement8);
        document.body.appendChild(div_principal8);

        const div_principal9 = document.createElement("div");
        const nameElement9 = document.createElement("p");
        nameElement9.textContent = postcode;
        nameElement9.className = "postcode";
        nameElement9.id = "9";
        div_principal9.appendChild(nameElement9);
        document.body.appendChild(div_principal9);

        //funcion para buscar un usuario por id, entre todos los usuarios registrados, y mostrar su información en la consola

        function buscarUsuarioPorId(id) {
            const userId = document.getElementById("input").value;
            const elementoEncontrado = document.getElementById(` nameElemt${userId}`);
            document.getElementById("btnbuscarusuario").addEventListener("click", function () {
                const userId = id;
                if (elementoEncontrado === nameElement1.id) {
                    console.log(`Usuario encontrado: ${nameElement1.textContent}`);
                } else if (userId === nameElement2.id) {
                    console.log(`Usuario encontrado: ${nameElement2.textContent}`);
                } else if (userId === nameElement3.id) {
                    console.log(`Usuario encontrado: ${nameElement3.src}`);
                } else if (userId === nameElement4.id) {
                    console.log(`Usuario encontrado: ${nameElement4.textContent}`);
                } else if (userId === nameElement5.id) {
                    console.log(`Usuario encontrado: ${nameElement5.textContent}`);
                } else if (userId === nameElement6.id) {
                    console.log(`Usuario encontrado: ${nameElement6.textContent}`);
                } else if (userId === nameElement7.id) {
                    console.log(`Usuario encontrado: ${nameElement7.textContent}`);
                } else if (userId === nameElement8.id) {
                    console.log(`Usuario encontrado: ${nameElement8.textContent}`);
                } else if (userId === nameElement9.id) {
                    console.log(`Usuario encontrado: ${nameElement9.textContent}`);
                } else {
                    console.log("Usuario no encontrado");
                }
            });
        }

        buscarUsuarioPorId("1");
        buscarUsuarioPorId("2");
        buscarUsuarioPorId("3");
        buscarUsuarioPorId("4");
        buscarUsuarioPorId("5");
        buscarUsuarioPorId("6");
        buscarUsuarioPorId("7");
        buscarUsuarioPorId("8");
        buscarUsuarioPorId("9");    

    } catch (error) {
        console.error(error);
    }

}
