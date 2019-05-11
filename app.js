const argv = require('./config/yargs').argv;
const colors = require('colors');
const course  = require('./course/course');

let command = argv._[0];

switch ( command ){
    case 'create':
        let task = course.create( argv.name, argv.duration, argv.value );
        console.log( task );
        break;

    case 'list':
        let listCourses = course.getAllCourses();
        console.log('================ Courses List ================'.blue);
        for (let  course of listCourses) {
            console.log( course.name );  
            console.log( course.duration );  
            console.log( course.value );  
            console.log('========================================='.blue);
        }
        break;

    default:
    console.log('Command no found');
}