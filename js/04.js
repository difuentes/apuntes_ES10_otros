//window binding

function obtenerAuto(){
    console.log(`mi auto es de color ${this.color}`);
}

const color = 'negro';
window.color = 'negro';//en window encuentra los valores si no los escuentra
obtenerAuto();