const fs = require('fs');
const shortid = require('shortid');

let listCourses = [];
let coursesStudent = [];
let TIME_INTERVAL = 2000;

/**
 * Metodo para cargar los curos guardados previamente
 */
const loadDB = () => {
    try {
        listCourses = require('../db/data.json');
    } catch (error) {
        listCourses = [];
    }
}

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
/**
 * Metodo para buscar un curso especifico 
 * @param {*} id Identifificador del curso
 */
const searchById = ( id ) => {
    try {
        loadDB();
        let courseResponse = listCourses.find( course => course.id == id)
        return courseResponse;
        
    } catch (error) {
        throw new Error(`Error, buscando el curso con id: ${id}`)
    }
}

/**
 * 
 * @param {*} idCourse 
 * @param {*} name 
 * @param {*} doc 
 */
const register = ( idCourse, name, doc, register ) => {
    let student = {
        idCourse,
        name,
        doc
    }
    const courseExists = searchById( idCourse );
    if ( !courseExists ){
        return  console.log(`Course with id ${ idCourse } no exists `.red);
    }

    if( register == 'true'){

        coursesStudent.push( student );
        let data = JSON.stringify( coursesStudent );
        fs.writeFile ( 'db/student.json', data, ( err ) => {
            if ( err ) throw new Error('El curso no pudo ser guardado al estudiante')
        }); 
        return student;
    }
}

/**
 * Metodo que imprime la información de cada curso segun n tiempo
 */
function coursesWithTimer(items, index = 0) {
    console.log('================= List courses =========='.red); 
    setTimeout(() => {
        const item = items[index]
        console.table(item)
        if (items[index + 1]) coursesWithTimer(items, index + 1)
    }, TIME_INTERVAL );
}

module.exports = {
    create,
    saveDB,
    getAllCourses,
    searchById,
    register,
    coursesWithTimer
}