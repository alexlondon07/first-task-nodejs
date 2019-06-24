const login = require('./login/login.js');
const colors = require('colors');
const course  = require('./course/course');
const JSAlert = require("js-alert");
var express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(session({secret: 'actividad2'}));
var sess;
let perfilUser; 



app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));

var courseList = course.getAllCourses(); 
app.get('/home-list', (req, res) => {
    res.render('home-list', {
        name: 'Alexander Londoño',
        courses: courseList,
        datosLogin:sess.login,
    });
});

app.get('/', (req, res) => {
    res.render('index', {
        tituloWeb: 'App Matriculas cursos'
    });
});

app.get('/course', (req, res) => {
        console.log( 'course\n')
    console.log( sess)
    res.render('course-form', {
        title: 'New course',
         datosLogin:sess.login,
    });
});

app.get('/create-login', (req, res) => {
    res.render('create-login', {
        tituloWeb: 'Crear usuarios',
    });
});

/**
 * Register login
 */
app.post('/create-login-action', (req, res) => {
    
    let loginData = {
        nombre: req.body.nameUser,
        doc: req.body.doc,
        tel: req.body.tel,
        user: req.body.user,
        pwd: req.body.pwd,
        perfil: req.body.perfil,
    }
    let response = login.createLogin( loginData );
    if(response != null){
        res.render('index', {
            tituloWeb: 'App Matriculas cursos',
            msgNotificationGreen: 'El usuario '+loginData.nombre+' se ha creado de forma correcta por favor inicia session',
        });
    }else{
         res.render('create-login', {
            tituloWeb: 'App Matriculas cursos',
            msgNotification: 'El usuario que intentas crear ya existe en base de datos',
        });

    }
});


/**
 * Register course
 */
app.post('/course-register', (req, res) => {
    console.log( 'course-register\n')
    console.log(sess)
    
    let courseData = {
        name: req.body.name,
        description: req.body.description,
        modality: req.body.modality,
        duration: req.body.duration,
        value: req.body.value,
        status: req.body.status
    }
    let response = course.create( courseData );
    if(response){
        res.render('course-form', {
            title: 'New course',
            response: 'Course entered correctly',
            datosLogin:sess.login,
        });
    }
});






app.post('/login', (req, res) => {
    
    let loginO = {
        user: req.body.user,
        pwd: req.body.pwd
       
    }
    let response = login.buscarLogin( loginO );
        sess = req.session;
        
        sess.login = response;
        if(response != null){
            if(response.perfil == 'admin'){
           response.perfilBool = true;
            res.render('home-list', {
                courses: courseList,
                 name: sess.login.nombre,
                title: 'New course',
                response: 'Course entered correctly',
                datosLogin:sess.login,
            });
        }else{
            response.perfilBool = false;
              let courseListAvailable = courseList.filter(val => {
                return val.status == "enable";
            });
            res.render('courses-available', {
                courses: courseListAvailable,
                 datosLogin:sess.login,
            });
        }
           
        }else{
            res.render('index', {
                tituloWeb: 'App Matriculas cursos',
                msgNotification: 'Tus datos no son correctos',
            });

        }
   
});

/**
 * Courses availables
 */
app.get('/courses-available', (req, res) => {
    let courseListAvailable = courseList.filter(val => {
        return val.status == "enable";
    });
    res.render('courses-available', {
        courses: courseListAvailable,
         datosLogin:sess.login,
    });
});


app.listen(port, function () {
    console.log(`App listening on http://localhost:${port}`);
});

