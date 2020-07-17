//this con implicit binding

const persona ={
    nombre: 'Diego',
    edad: 26,
    presentacion(){
        console.log(`mi nombre es ${this.nombre} tengo ${this.edad}`);
    },
    mascota:{
        nombre: 'blanca',
        edad: 8,
        presentacion(){
            console.log(`mi nombre es ${this.nombre} tengo ${this.edad}`);
        } 
    }

}


persona.presentacion();
persona.mascota.presentacion();