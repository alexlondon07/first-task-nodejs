const argv = require('./config/yargs').argv;
const colors = require('colors');
const course  = require('./course/course');

let command = argv._[0];

function showData(element) {
    console.table(element);
}

switch ( command ){
    case 'create':
        let response = course.create( argv.name, argv.duration, argv.value );
        console.log( response );
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

    case 'search':
        let data = course.searchById(argv.id);
        if( data.id ){
            console.log('================= Course =========='.red); 
            console.table(data);
        }else{
            console.log(`Course with id ${argv.id} no found `.red)
        }
        break;

    default:
    console.log('Command no found'.red);
}