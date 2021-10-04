//                                                   NIVELL 1
// Exercici 1
/* Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. Invocar-la des de fora pasandole totes
 dues funcions que imprimeixin un missatge diferent en cada cas. */

 let esUnLenguaje = (lenguaje, delay = 250) => {

    return new Promise((resolve, reject) => {
        let lenguajes = ["php","javascript"];
        console.log("Buscando respuesta..")
        setTimeout(() =>{
         lenguajes.includes(lenguaje.toLowerCase()) ? resolve("Es un lenguaje") :  reject("No es un lenguaje");
        },delay);

    })
}

esUnLenguaje("javasadacript")
.then(resolve => console.info(resolve))
.catch(error => console.log(error));

// Exercici 2
/* Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. Invocar-la des de fora pasandole totes
 dues funcions que imprimeixin un missatge diferent en cada cas. */


let consoleLog = (msg) => {
    console.log(`El callback ha recibido -> ${msg}`)
}
      
let enviarCallback = (msg,callback) =>{
        callback(msg);
}
      
enviarCallback("mensage",consoleLog);

//                                                   NIVELL 2
// Exercici 1
/* Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find(empleado => empleado['id']==id)
        if (employee) {
            resolve(employee)
        } else {
            reject('No existe el empleado en employees')
        }     
    }) 
} 

getEmpleado(7).then( ok => console.log(ok)).catch(err =>console.log(err));

// Exercici 2
/* Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari. */

let getSalario = (employe) =>{


    return new Promise((resolve, reject) =>{

        if(employe === undefined){
            reject('No existe el empleado')
        }

        let searchSalary = salaries.find(salary => salary['id'] == employe.id)

        if(searchSalary){
            resolve(searchSalary)
        }else{
            reject('No existe el empleado en salaries')
        }

    })
}


getSalario(employees[1])
    .then( ok => console.log(ok))
    .catch(err =>console.log(err));

// Exercici 3 y ¿ Nivell 3?
/* Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.*/

getEmpleado(1)
    .then( employe => {return getSalario(employe)})
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

