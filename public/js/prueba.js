
var primerLibro = new Libro({ 
	titulo: 'la odisea', 
	autor: 'homero', 
	categoria:'literatura'
});

console.log(primerLibro.toJSON());
console.log(primerLibro.get('titulo'));
primerLibro.set('autor','pikachu');
console.log("Autor del libro 1: "+primerLibro.get('autor'));

var tercerLibro = new Libro({titulo: 'Lazarillo'});
console.log(tercerLibro.toJSON());


var cuartoLibro = new Libro({
	titulo: 'la metamorfosis', 
	autor: 'kafka', 
});

cuartoLibro.set({
	autor: 'kafka',
});


var libroPrueba = new Libro({ id: '1',});
libroPrueba.fetch();
libroPrueba.toJSON();
console.log(libroPrueba.toJSON());


var libroPrueba2 = new Libro({ 
titulo: 'pepe',
autor: 'pipi', 
categoria: 'Literatura'
});

libroPrueba2.save();
console.log("OK");

//libroPrueba2.destroy();