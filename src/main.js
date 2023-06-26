const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
btnAgregar.addEventListener('click', agregarAlumnos);

/* clase estudiantes */
class Estudiantes{
    constructor(nombre, apellido, edad, materias,){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.materias = materias
    }
}

/* costructor vacio */
class ListaAlumnos {
    constructor() {
        this.lista = [];
    }
    /* agregar estudiantes */
    agregar(estudiantes) {
        this.lista.push(estudiantes);
    }
    /* buscar estudiantes */

}

const listaEstudiantes = new ListaAlumnos();

/* función agregar estudiantes a la lista */
function agregarAlumnos() {
    
    let nombreAlumno = document.getElementById('nombre-alumno').value;
    let apellidoAlumno = document.getElementById('apellido-alumno').value;
    let edadAlumno = document.getElementById('edad-alumno').value;

    let alumno = new Estudiantes(nombreAlumno, apellidoAlumno, edadAlumno);
    listaEstudiantes.agregar(alumno);

    actualizarBase();
    actualizarLista();
}


/* estudiantes por defecto */

