//composicion
//composicion de metodos de objetos
const obtenerNombre = info => ({
    mostarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});
//composicion de metodos de objetos
const guardarEmail = info => ({
    email(email){
        console.log(`Guardando mail : ${email}`);
        info.email = email;
    }
});
//composicion de metodos de objetos
const obtenerEmail = info => ({
    mostrarMail(){
        console.log(`nombre : ${info.nombre} su correo electronico es ${info.email}` );
        
    }
});
//composicion de metodos de objetos
const obtenerEmpresa= info => ({
    mostrarEmpresa(){
        console.log(`nombre de empresa : ${info.empresa} ` );
        
    }
});
//crea objeto cliente
function Cliente (nombre,email,puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        
    )
}
//crea objeto empresa
function Empresa(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa 
       }
       return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)        
    )
}

const cliente = Cliente('Diego');
cliente.mostarNombre();
cliente.email('fuentesdiego054@gmail.com');
cliente.mostrarMail();

const empleado = Empresa('Awakelab',null,'awake');
empleado.mostarNombre();
empleado.mostrarEmpresa();
