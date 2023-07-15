const dv_papel = document.querySelector(".dv-papel");
const owner_name = document.querySelector(".name");
let name_display = "";

//const url = window.location.href;
//console.log(url);


/*const query = window.location.search;
console.log(query);*/


const urlParams = new URLSearchParams(window.location.search);
const who_value = urlParams.get('who');
//console.log(who_value);



for (let i = 0; i < personas.length; i++) {
  if (personas[i].exequatur === who_value) {
    finalResult = personas[i];
    //return personas[i]; // Retorna la persona que tiene el código buscado

    //console.log(personas[i]);
    name_display = personas[i].propietario;
    //console.log(`Nombre = ${name_display}`);
  }
}



owner_name.textContent = name_display;