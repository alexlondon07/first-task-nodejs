# First task -  NodeJs 

Course Nodejs - Tecnologico de Antioquia.

## Installation

Use npm 

```bash
npm install
```

## Usage to create a new course

```python

Commands required

-n: name couse
-d: duration course
-v: value course


Example:
node app.js create -n="NodeJs" -d=10 -v=50000 

Response to create a new course:
{ id: 'CfwQxvbdi', name: 'NodeJs', duration: 10, value: 50000 }


```


## Usage to get all courses

```python
-list: command to get all courses 

Example:
node app.js list 

```

## Usage to search a course

```python
-list: command to get all courses 


Example:
node app.js list 


Response Example:

================= List courses ==========
┌──────────┬─────────────┐
│ (index)  │   Values    │
├──────────┼─────────────┤
│    id    │ 'oR6-4Viiz' │
│   name   │   'JAVA'    │
│ duration │     50      │
│  value   │    80000    │
└──────────┴─────────────┘
┌──────────┬─────────────┐
│ (index)  │   Values    │
├──────────┼─────────────┤
│    id    │ 'Kj-0y9pM-' │
│   name   │  'NodeJs'   │
│ duration │     40      │
│  value   │    70000    │
└──────────┴─────────────┘
┌──────────┬────────────────┐
│ (index)  │     Values     │
├──────────┼────────────────┤
│    id    │  'yaZNdC_jT'   │
│   name   │ 'React Native' │
│ duration │       80       │
│  value   │     170000     │
└──────────┴────────────────┘
┌──────────┬─────────────┐
│ (index)  │   Values    │
├──────────┼─────────────┤
│    id    │ 'sNtESTbmy' │
│   name   │  'Angular'  │
│ duration │     50      │
│  value   │    70000    │
└──────────┴─────────────┘
```


## Usage to search a course

```python

Commands required

-search: command to search a course


Example:
node app.js search -i="Kj-0y9pM-" 

Response to search course:
================= Course ==========
┌─────────┬─────────────┬──────────┬──────────┬───────┐
│ (index) │     id      │   name   │ duration │ value │
├─────────┼─────────────┼──────────┼──────────┼───────┤
│    0    │ 'Kj-0y9pM-' │ 'NodeJs' │    40    │ 70000 │
└─────────┴─────────────┴──────────┴──────────┴───────┘

OR

Course with id Kj-0y9pM-99 no found 


##  Usage to Register a student to an course

```python

Commands required

-idCourse:  idCourse course
-name:      Name student
-doc:       Doc student
-reg:       Register (true/false)


Example with --reg=false:

node app.js register --idCourse="Kj-0y9pM-" --name "Alexander Londoño Espejo" --doc="12356" --reg=false

Response:
List all courses



Example with --reg=true, Command to register an student to course:

node app.js register --idCourse="Kj-0y9pM-" --name "Alexander Londoño Espejo" --doc="12356" --reg=true


Response:
================= Student enrolled =================
┌──────────┬────────────────────────────┐
│ (index)  │           Values           │
├──────────┼────────────────────────────┤
│ idCourse │        'Kj-0y9pM-'         │
│   name   │ 'Alexander Londoño Espejo' │
│   doc    │           12356            │

OR

When the ide course not exists: 

Course with id Kj-0y9pM-11 no exists 

```



## Bonus -  Show the courses list in the web

```python

Command

node app.js


Response:

App listening on port 3000!

```


We need to write in the browser:

[Localhost](http://localhost:3000/)


![alt text](https://raw.githubusercontent.com/alexlondon07/first-task-nodejs/master/public/images/table.png "Courses list")
## Alexander Andrés Londoño Espejo
