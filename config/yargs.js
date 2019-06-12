const argv = require('yargs')
    .command('create', 'Add course', {
        name: {
            demand: true,
            alias: 'n',
            desc: 'Name course'
        },
        duration: {
            demand: true,
            alias: 'd',
            desc: 'Duration course'
        },
        value: {
            demand: true,
            alias: 'v',
            desc: 'Valor course'
        }
    })
    .command('search', 'Search course', {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Identification of course'
        }   
    })
    .command('list', 'List courses',{
        
    })
    .command('register', 'Register student to a course',{
        idCourse: {
            demand: true,
            alias: 'id',
            desc: 'idCourse course'
        },
        name: {
            demand: true,
            alias: 'n',
            desc: 'Name student'
        },
        doc: {
            demand: true,
            alias: 'doc',
            desc: 'Doc student'
        },
        reg: {
            demand: true,
            alias: 'reg',
            desc: 'Register',
            defaul: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}