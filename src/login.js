 /* funcion login */
 let accounts = [
    { name: 'mali', password: '1234'},
    { name: 'giselle', password: '1abril2023'},
    { name: 'salvador', password: 'git'}
];

let user = document.getElementById ('user');
let password = document.getElementById ('password');

function login(){
    let user = document.getElementById('user').value;
    let  password = document.getElementById('password').value;
    let validatedSession = false;
    let i ;
    
    for ( i = 0; i < accounts.length; i++) {
        if(user == accounts[i].name && password == accounts[i].password){
            validatedSession = true;
            break; 
        }
    }

    if(validatedSession) { //es lo mismo que: if(validatedSession === true) {}
        window.location.href = 'iteso.html';
    } else {
        Swal.fire('Contraseña incorrecta');


    }
}