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




## Alexander Andrés Londoño Espejo
