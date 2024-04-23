[]

var frutas = ["manzan", "platano", "cereza", "fresa"];

console.log(frutas.length);
4


console.log(frutas[0]);
manzana

console.log(frutas[2]);
cereza





var frutas = ["manzan", "platano", "cereza", "fresa"];

var masFrutas = frutas.push("Uvas");
frutas
["manzan", "platano", "cereza", "fresa", "Uvas"]

console.log(frutas[4]);
Uvas




var ultimo = frutas.pop("Uvas");
frutas
["manzan", "platano", "cereza", "fresa"]




var nuevaLongitud = frutas.unshift("Uvas");
frutas
["Uvas", "manzan", "platano", "cereza", "fresa"]



var borrarFruta = frutas.shift("Uvas")
frutas
["manzan", "platano", "cereza", "fresa"];




var posicion = frutas.indexOf("cereza");
posicion
2
frutas[2]
cereza