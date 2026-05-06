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

        div_principal1.appendChild(nameElement1);
        document.body.appendChild(div_principal1);

        const div_principal2 = document.createElement("div");
        const nameElement2 = document.createElement("p");
        nameElement2.textContent = email;
        nameElement2.className = "email";

        div_principal2.appendChild(nameElement2);
        document.body.appendChild(div_principal2);

        const div_principal3 = document.createElement("div");
        const nameElement3 = document.createElement("img");
        nameElement3.textContent = picture;
        nameElement3.className = "picture";
        nameElement3.src = picture;
        nameElement3.alt = "User Picture";

        div_principal3.appendChild(nameElement3);
        document.body.appendChild(div_principal3);


        const div_principal4 = document.createElement("div");
        const nameElement4 = document.createElement("p");
        nameElement4.textContent = cell;
        nameElement4.className = "cell";

        div_principal4.appendChild(nameElement4);
        document.body.appendChild(div_principal4);


        const div_principal5 = document.createElement("div");
        const nameElement5 = document.createElement("p");
        nameElement5.textContent = city;
        nameElement5.className = "city";



        div_principal5.appendChild(nameElement5);
        document.body.appendChild(div_principal5);

        const div_principal6 = document.createElement("div");
        const nameElement6 = document.createElement("p");
        nameElement6.textContent = country;
        nameElement6.className = "country";


        div_principal6.appendChild(nameElement6);
        document.body.appendChild(div_principal6);

        const div_principal7 = document.createElement("div");
        const nameElement7 = document.createElement("p");
        nameElement7.textContent = state;
        nameElement7.className = "state";


        div_principal7.appendChild(nameElement7);
        document.body.appendChild(div_principal7);

        const div_principal8 = document.createElement("div");
        const nameElement8 = document.createElement("p");
        nameElement8.textContent = street;
        nameElement8.className = "street";


        div_principal8.appendChild(nameElement8);
        document.body.appendChild(div_principal8);

        const div_principal9 = document.createElement("div");
        const nameElement9 = document.createElement("p");
        nameElement9.textContent = postcode;
        nameElement9.className = "postcode";


        div_principal9.appendChild(nameElement9);
        document.body.appendChild(div_principal9);

        //

    } catch (error) {
        console.error(error);
    }

}


// function mostrarDatos() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.results[0]);
//             const user = data.results[0];
//             const name = `${user.name.first} ${user.name.last}`;
//             const email = user.email;
//             const picture = user.picture.large;
//             const cell = user.cell;
//             const city = user.location.city;
//             const country = user.location.country;
//             const state = user.location.state;
//             const street = `${user.location.street.number} ${user.location.street.name}`;
//             const postcode = user.location.postcode;

//             const div_principal1 = document.createElement("div");
//             const nameElement1 = document.createElement("p");
//             nameElement1.textContent = name;
//             nameElement1.className = "name";

//             div_principal1.appendChild(nameElement1);
//             document.body.appendChild(div_principal1);

//             const div_principal2 = document.createElement("div");
//             const nameElement2 = document.createElement("p");
//             nameElement2.textContent = email;
//             nameElement2.className = "email";

//             div_principal2.appendChild(nameElement2);
//             document.body.appendChild(div_principal2);

//             const div_principal3 = document.createElement("div");
//             const nameElement3 = document.createElement("img");
//             nameElement3.textContent = picture;
//             nameElement3.className = "picture";
//             nameElement3.src = picture;
//             nameElement3.alt = "User Picture";

//             div_principal3.appendChild(nameElement3);
//             document.body.appendChild(div_principal3);


//             const div_principal4 = document.createElement("div");
//             const nameElement4 = document.createElement("p");
//             nameElement4.textContent = cell;
//             nameElement4.className = "cell";

//             div_principal4.appendChild(nameElement4);
//             document.body.appendChild(div_principal4);


//             const div_principal5 = document.createElement("div");
//             const nameElement5 = document.createElement("p");
//             nameElement5.textContent = city;
//             nameElement5.className = "city";



//             div_principal5.appendChild(nameElement5);
//             document.body.appendChild(div_principal5);

//             const div_principal6 = document.createElement("div");
//             const nameElement6 = document.createElement("p");
//             nameElement6.textContent = country;
//             nameElement6.className = "country";


//             div_principal6.appendChild(nameElement6);
//             document.body.appendChild(div_principal6);

//             const div_principal7 = document.createElement("div");
//             const nameElement7 = document.createElement("p");
//             nameElement7.textContent = state;
//             nameElement7.className = "state";


//             div_principal7.appendChild(nameElement7);
//             document.body.appendChild(div_principal7);

//             const div_principal8 = document.createElement("div");
//             const nameElement8 = document.createElement("p");
//             nameElement8.textContent = street;
//             nameElement8.className = "street";


//             div_principal8.appendChild(nameElement8);
//             document.body.appendChild(div_principal8);

//             const div_principal9 = document.createElement("div");
//             const nameElement9 = document.createElement("p");
//             nameElement9.textContent = postcode;
//             nameElement9.className = "postcode";


//             div_principal9.appendChild(nameElement9);
//             document.body.appendChild(div_principal9);

//         })
// }