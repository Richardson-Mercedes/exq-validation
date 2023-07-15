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
  <div class="table">
    <div class="header-table">
      <div>Nombres</div>
      <div>Apellidos</div>
      <div>Edad</div>
      <div>Exequátur</div>
      <div>Propietario</div>
      <div>Año graduación</div>
      <div>Universidad</div>
      <div>Título</div>
      <div>Inicio de carrera</div>
      <div>Fin de carrera</div>
      <div>Duración de carrera</div>
      <div>Enlace a Exq</div>
    </div>
    <div class="results-table">
      <div>${finalResult.nombres}</div>
      <div>${finalResult.apellidos}</div>
      <div>${finalResult.edad}</div>
      <div>${finalResult.exequatur}</div>
      <div>${finalResult.propietario}</div>
      <div>${finalResult.anio_graduacion}</div>
      <div>${finalResult.universidad}</div>
      <div>${finalResult.titulo}</div>
      <div>${finalResult.inicio_carrera}</div>
      <div>${finalResult.final_carrera}</div>
      <div>${finalResult.duracion_carrera}</div>
      <div><a href="exqPage.html?who=${finalResult.exequatur}">Ver Certificado</a></div>
    </div>
  </div>`;

  result_container.innerHTML = table;
  display_name = finalResult.nombres;
}
