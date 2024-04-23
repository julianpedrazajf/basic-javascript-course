var articulos = [
    { nombre: "bici", costo: 3000},
    { nombre: "tv", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "laptop", costo: 2000},
    { nombre: "teclado", costo: 500},
    { nombre: "audifonos", costo: 1700},
];
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
articulosFiltrados
    0: {nombre: "Libro", costo: 320}
    1: {nombre: "Teclado", costo: 500}



/*     Map */
    var articulos = [
        { nombre: "bici", costo: 3000},
        { nombre: "tv", costo: 2500},
        { nombre: "libro", costo: 320},
        { nombre: "celular", costo: 10000},
        { nombre: "laptop", costo: 2000},
        { nombre: "teclado", costo: 500},
        { nombre: "audifonos", costo: 1700},
    ];

    var  nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre
    });
    nombreArticulos
    ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]