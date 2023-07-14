function Persona(nombres, apellidos, edad, exequatur, anio_graduacion, universidad, titulo, inicio_carrera, final_carrera, duracion_carrera) {
  this.nombres = nombres;
  this.apellidos = apellidos;
  this.edad = edad;
  this.exequatur = exequatur;
  this.propietario = `${this.nombres} ${this.apellidos}`;
  this.anio_graduacion = anio_graduacion;
  this.universidad = universidad;
  this.titulo = titulo;
  this.inicio_carrera = inicio_carrera;
  this.final_carrera = final_carrera;
  this.duracion_carrera = duracion_carrera;
}



// Crear un nuevo objeto utilizando la función 

const persona1 = new Persona('Juan', 'Pérez', 30, '17-SIST-6-014', 2017, "UASD", "Ingeniero", 2013, 2016, "3 años 8 meses");
const persona2 = new Persona('Pedro', 'Méndez', 30, '17-SIST-7-012', 2017, "O&M", "Diseñador gráfico", 2013, 2016, "3 años 8 meses");
const persona3 = new Persona('María', 'Gómez', 28, '18-INFO-5-021', 2018, "UASD", "Informática", 2014, 2019, "5 años");
const persona4 = new Persona('Carlos', 'Ramírez', 35, '15-CIVI-7-003', 2015, "UNPHU", "Ingeniero Civil", 2011, 2016, "5 años");
const persona5 = new Persona('Ana', 'Santos', 32, '16-ADMI-8-009', 2016, "PUCMM", "Administración de Empresas", 2012, 2017, "5 años");
const persona6 = new Persona('Luis', 'López', 27, '19-ARTE-4-012', 2019, "APEC", "Artes Plásticas", 2015, 2020, "5 años");
const persona7 = new Persona('Laura', 'Hernández', 29, '20-PSIC-3-018', 2020, "UASD", "Psicología", 2017, 2021, "4 años");
const persona8 = new Persona('Pedro', 'González', 31, '17-CONT-6-025', 2017, "UNIBE", "Contabilidad", 2013, 2018, "5 años");
const persona9 = new Persona('Sara', 'Martínez', 26, '19-MEDI-4-037', 2019, "UASD", "Medicina", 2015, 2021, "6 años");
const persona10 = new Persona('Roberto', 'Jiménez', 34, '15-DERE-7-008', 2015, "UCATECI", "Derecho", 2011, 2016, "5 años");
