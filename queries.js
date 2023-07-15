const btn_send = document.querySelector("#btn-send");
const input = document.querySelector("#inp-exq");
const error_message_text = document.querySelector(".error-message");
const result_container = document.querySelector(".result-container");

let message = "";
let finalResult;

const personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10];



btn_send.addEventListener("click", (e) => {
  e.preventDefault();

  finalResult = "";
  validate(input.value);
  //const result = validate(input.value);
  //console.log(result);
});



function validate(exq) {

  result_container.innerHTML = "";

  if (input.value != "") {
    //console.log(exq);

    for (let i = 0; i < personas.length; i++) {
      if (personas[i].exequatur === exq) {
        finalResult = personas[i];
        //return personas[i]; // Retorna la persona que tiene el código buscado

        renderInformation(personas[i]);
      }
    }

    //return null;

    if (!finalResult) {
      error_message_text.style.display = "block";
      message = "No se encontró ningún registro con ese exq";
      showMessage(message);
    } else {
      error_message_text.style.display = "none";
    }

    //console.log(finalResult)

  } else {
    error_message_text.style.display = "block";
    message = "Debe ingresar un valor a buscar";
    showMessage(message);
  }
}

function showMessage(msg) {
  error_message_text.textContent = msg;
}

function renderInformation() {
  //console.log(finalResult);

  const table = `
  <table>
    <tr class="header-table">
      <td>Nombres</td>
      <td>Apellidos</td>
      <td>Edad</td>
      <td>Exequátur</td>
      <td>Propietario</td>
      <td>Año graduación</td>
      <td>Universidad</td>
      <td>Título</td>
      <td>Inicio de carrera</td>
      <td>Fin de carrera</td>
      <td>Duración de carrera</td>
      <td>Enlace a Exq</td>
    </tr>
    <tr>
      <td>${finalResult.nombres}</td>
      <td>${finalResult.apellidos}</td>
      <td>${finalResult.edad}</td>
      <td>${finalResult.exequatur}</td>
      <td>${finalResult.propietario}</td>
      <td>${finalResult.anio_graduacion}</td>
      <td>${finalResult.universidad}</td>
      <td>${finalResult.titulo}</td>
      <td>${finalResult.inicio_carrera}</td>
      <td>${finalResult.final_carrera}</td>
      <td>${finalResult.duracion_carrera}</td>
      <td><a href="exqPage.html?who=${finalResult.exequatur}">Ver Certificado</a></td>
    </tr>
  </table>`;

  result_container.innerHTML = table;
  display_name = finalResult.nombres;
}
