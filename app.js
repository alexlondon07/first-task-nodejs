const argv = require('./config/yargs').argv;
const colors = require('colors');
const course  = require('./course/course');

let command = argv._[0];

function showData(element) {
    console.log('ENTRE');
    console.table(element);
}
switch ( command ){
    case 'create':
        let task = course.create( argv.name, argv.duration, argv.value );
        console.log( task );
        break;

    case 'list':
        
        let listCourses = course.getAllCourses();
        console.log('================= List courses =========='.red); 
        listCourses.forEach(element => {
            (function(){
                setTimeout(showData, 2000, element);
            })();
        });       
        break;

    default:
    console.log('Command no found'.red);
}