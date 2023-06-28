//Elementos
 

 //STUDENT CLASS
 class Students{
    constructor(name, lastName, age, classes, grade) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.classes = classes;
        this.grade = grade;
    }
 }

 // STUDENT LIST
 class AlumniList {
    constructor(){
        this.list = [];
    }
    // ADD STUDENTS METHOD
    add(student){
        this.list.push(student);
    }
    // SEARCH METHOD
    search(name){
        let listSearch = this.list;
        let studentFounded = null;
        for (let i = 0; i < listSearch.length; i++) {
            if (name === listSearch[i].name) {
                studentFounded = listSearch[i];
                break;
            }
        }
        return studentFounded;
    }
 }

// GATHER INPUT INFO & ADD IT INTO THE LIST
let studentList = new AlumniList();

function addStudents () {
    let studentName = document.getElementById("student-name").value;
    let studentLastName =document.getElementById("student-last-name").value;
    let studentAge =document.getElementById("student-age").value;

    let alumni = new Students(studentName, studentLastName, studentAge);
    studentList.add(alumni);
    cleanInput();
    refreshTable();
    refreshList()
}
const cleanBtn = document.getElementById("clean-btn");
cleanBtn.addEventListener("click", addStudents);
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addStudents);

//CLEAN INPUTS
function cleanInput() {
    studentName = "";
    studentLastName = "";
    studentAge = "";
}

// TABLE DOM INTERACTION
function refreshTable() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < studentList.list.length; i++) {
        let estudiante = studentList.list[i];
        
        let row = document.createElement("tr");

        let columnName = document.createElement("td");
        columnName.textContent = estudiante.name;
        row.appendChild(columnName);

        let columnLastName = document.createElement("td");
        columnLastName.textContent = estudiante.lastName;
        row.appendChild(columnLastName);

        let columnAge = document.createElement("td");
        columnAge.textContent = estudiante.age;
        row.appendChild(columnAge);

        let columnClasses = document.createElement("td");
        row.appendChild(columnClasses);

        let columnGrade = document.createElement("td");
        row.appendChild(columnGrade);

        //SHOW CLASSES AND GRADES
        for (let subject in estudiante.classes ) {
            let subjectElement = document.createElement("p");
            subjectElement.textContent = subject;
            columnClasses.appendChild(subjectElement);

            
        }
        tableBody.append(row);
    }
}

// DEFAULT STUDENTS
var jhonStu = new Students("Jhon", "Montaño", 21, {Inglés: 10,Literatura: 9, Historia: 7, Ecología: 8});
var raulStu = new Students("Raul", "Martinez", 20, {Inglés: 7, Ecología: 7, Comercio: 10});
var diegoStu = new Students("Diego", "Ceballos", 22, {Inglés: 9, Literatura: 8});
var julStu = new Students("Julieta", "Herrera", 21, {Inglés: 9, Comercio: 9, Administración: 8});

studentList.add(jhonStu);
studentList.add(raulStu);
studentList.add(diegoStu);
studentList.add(julStu);

refreshTable()



