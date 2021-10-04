class Persona{

    constructor(value){
        this.name = value;
    }

    decirNombre(){
        console.log(this.name);
    }
        
}

var persona = new Persona("Alejandro");
persona.decirNombre();