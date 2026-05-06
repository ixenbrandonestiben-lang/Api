const url = "https://randomuser.me/api/";

async function llamadaApi() {
    try {
        const api = await fetch(url);
        if (!api.ok) throw new Error("Error en la llamada a la API");
        const data = await api.json();
        console.log(data);



    } catch (error) {
        console.error(error);
    }

}
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0]);
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;

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
        
    
        div_principal3.appendChild(nameElement3);
        document.body.appendChild(div_principal3);
      

    })
