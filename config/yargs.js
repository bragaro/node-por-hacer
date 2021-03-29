const crearOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion d la tarea por hacer'
    }
}

const actOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion d la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }

}

const borrarOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Para borrar una tarea'
    },
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', crearOpts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actOpts)
    .command('borrar', 'Borra una tarea', borrarOpts)
    .help()
    .argv;

module.exports = {
    argv
}