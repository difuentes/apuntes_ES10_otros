//this con explicit binding

function persona(el1,el2){
    console.log(`hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`);
}

const informacion={
    nombre:'diego',
    trabajo:'Programador Full Stack'
}


const generosMusica=['Techno','Rock'];

//explicit binding con call , cuando pasas arreglo debe colocar tolas las posiciones
persona.call(informacion ,generosMusica[0],generosMusica[1] );


//explicit binding con ..aply (si toma un arreglo)
persona.apply(informacion,generosMusica);

//explicit binding con ..bind (si toma un arreglo)7
const bind = persona.bind(informacion ,generosMusica[0],generosMusica[1] );
bind();