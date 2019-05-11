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
    .help()
    .argv;

module.exports = {
    argv
}