const fs = require('fs');

let users = [];

/**
 * Metodo para cargar los usuarios guardados previamente
 */
const loadDB = () => {
    try {
        users = require('../db/login.json');
    } catch (error) {
        users = [];
    }
}

/**
 * Metodo para listar todos los usuarios registrados
 */
const getAllUsers = () => {
    loadDB();
    return users;
}

module.exports = {
    getAllUsers
}