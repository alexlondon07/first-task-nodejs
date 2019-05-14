const argv = require('./config/yargs').argv;
const colors = require('colors');
const course  = require('./course/course');

let command = argv._[0];

switch ( command ){
    
    case 'create':
        let response = course.create( argv.name, argv.duration, argv.value );
        console.log( response );
        break;

    case 'list':
        let listCourses = course.getAllCourses();
        if(listCourses.length > 0 ){
            course.coursesWithTimer( listCourses );
        }else{
            console.log(`The list courses is empty `.red)
        }
        break;

    case 'search':
        let data = course.searchById(argv.id);
        if( data ){
            console.log('================= Course ================='.red); 
            console.table(data);
        }else{
            console.log(`Course with id ${argv.id} no found `.red)
        }
        break;

    case 'register':

        if(argv.reg == 'false'){
            let listCourses = course.getAllCourses();
            course.coursesWithTimer( listCourses );  
            break;
        }

        let register = course.register( argv.idCourse, argv.name, argv.doc, argv.reg );
        if (register){
            console.log('================= Student enrolled ================='.red); 
            console.table(register);
        }
        break;

    default:
    console.log('Command no found'.red);
}