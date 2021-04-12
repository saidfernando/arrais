let lista_plaza2 = ["Papas", "Yuca", "Cebolla", "Tomate", "Pepino"];
let lista_plaza = [];
lista_plaza[0] = "Papas";
lista_plaza[1] = "Yuca";
lista_plaza[2] = "Cebolla";
lista_plaza[3] = "Tomate";
lista_plaza[4] = "Pepino";
lista_plaza[5] = "Arroz";

console.log(lista_plaza);
for (let i = 0; i < lista_plaza.length; i++) {
    console.log(lista_plaza[i]);
}
console.warn('');

let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = `Datos ${i}`;
}
console.log(array);

console.warn('');
let datos = [];

datos.push("Ludwing");
datos.push("Yesid");
datos.push("Pinto");
let devuelta = datos.push("Pimiento");

console.log(devuelta);
console.log(datos);
