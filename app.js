const argv = require('./config/yargs').argv;
const colors = require('colors');
const course  = require('./course/course');

let command = argv._[0];
let TIME_INTERVAL = 2000;

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

switch ( command ){
    case 'create':
        let response = course.create( argv.name, argv.duration, argv.value );
        console.log( response );
        break;

    case 'list':
        
        let listCourses = course.getAllCourses();
        coursesWithTimer( listCourses );    
        break;

    case 'search':
        let data = course.searchById(argv.id);
        if( data ){
            console.log('================= Course =========='.red); 
            console.table(data);
        }else{
            console.log(`Course with id ${argv.id} no found `.red)
        }
        break;

    default:
    console.log('Command no found'.red);
}