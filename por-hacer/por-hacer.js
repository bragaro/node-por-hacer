const fs = require('fs');



let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar la tarea', err);
        }

    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }



}

const listarTareas = () => {

    cargarDB();

    return listadoPorHacer;
}

const findTarea = (descripcion) => {
    let result = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    return result;
}

const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = findTarea(descripcion);
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return 'Tarea no encontrada';
    }

}

const borrarTarea = (descripcion) => {

    cargarDB();
    let index = findTarea(descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

//otra forma de borrar elemento es crear un listado sin el elemento
let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

module.exports = {
    crear,
    listarTareas,
    actualizar,
    borrarTarea
}