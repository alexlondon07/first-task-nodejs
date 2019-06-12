const fs = require('fs');


let lisLoginUser = [];


/**
 * Metodo para cargar los curos guardados previamente
 */
const loadDB = () => {
    try {
        lisLoginUser = require('../db/login.json');
    } catch (error) {
        lisLoginUser = [];
    }
}

/**
 * Metodo para buscar un curso especifico 
 * @param {*} id Identifificador del curso
 */
const buscarLogin = (login) => {
    try {
        loadDB();
        let loginInBD = lisLoginUser.find( user => user.user == login.user);
        if(loginInBD.pwd == login.pwd){
        	return loginInBD;
        }
    } catch (error) {
        
    }
}

const buscarLoginUser = (login) => {
	 let loginInBD = null;
    try {
        loadDB();
       	loginInBD = lisLoginUser.find( user => user.user == login.user || user.doc == login.doc);
    } catch (error) {
        console.log(error);
    }
    return loginInBD;
}




const createLogin = ( data ) => {
 	let loginUser = null;
	if(buscarLoginUser(data) == null){
	     loginUser = {
	        nombre: data.nombre,
	        doc: data.doc,
	        tel: data.tel,
	        user: data.user,
	        pwd: data.pwd,
	        perfil: data.perfil
	    }
	    lisLoginUser.push( loginUser );
	    saveDB();
	}
   return loginUser;
}


/**
 * Metodo para guardar la información de un curso en archivo Json
 */
const saveDB = () => {
    let data = JSON.stringify( lisLoginUser );

    fs.writeFile ( 'db/login.json', data, ( err ) => {
        if ( err ) throw new Error('El usuario se ha guardado de forma exitosa')
    }); 
}

module.exports = {
    buscarLogin,
    createLogin
}