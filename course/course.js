const fs = require('fs');
const shortid = require('shortid');

let listCourses = [];

/**
 * Metodo para crear la Información de un curso
 * @param {*} name 
 * @param {*} duration 
 * @param {*} value 
 */
const create = ( name, duration, value ) => {
    loadDB();
    
    let course = {
        id: shortid.generate(),
        name,
        duration,
        value
    }

    listCourses.push( course );
    saveDB();
    return course;
}

/**
 * Metodo para listar todos los cursos existentes
 */
const getAllCourses = () => {
    loadDB();
    return listCourses;
}

/**
 * Metodo para guardar la información de un curso en archivo Json
 */
const saveDB = () => {
    let data = JSON.stringify( listCourses );

    fs.writeFile ( 'db/data.json', data, ( err ) => {
        if ( err ) throw new Error('El curso no pudo ser guardado')
    }); 
}

const loadDB = () => {
    try {
        listCourses = require('../db/data.json');
    } catch (error) {
        listCourses = [];
    }
}

module.exports = {
    create,
    saveDB,
    getAllCourses
}