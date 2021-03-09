var faker = require('faker');

var database = { cursos: []};

for ( var i = 1; i < 5; i++) {
    database.cursos.push({
        id: i,
        name: faker.name.jobTitle()
    });
}
console.log(JSON.stringify(database));