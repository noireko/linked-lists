const { LinkedList } = require("./linked-list");

const lista = new LinkedList();

console.log("--- Lista vacía ---");
console.log("toString:", JSON.stringify(lista.toString()));
console.log("size:", lista.size());
console.log("head:", lista.head());
console.log("tail:", lista.tail());
console.log("pop:", lista.pop());

console.log("\n--- append y prepend ---");
lista.append("perro");
lista.append("gato");
lista.append("loro");
lista.prepend("pez");
console.log(lista.toString()); // ( pez ) -> ( perro ) -> ( gato ) -> ( loro ) -> null

console.log("\n--- Consultas ---");
console.log("size:", lista.size());           // 4
console.log("head:", lista.head());           // "pez"
console.log("tail:", lista.tail());           // "loro"
console.log("at(0):", lista.at(0));           // "pez"
console.log("at(2):", lista.at(2));           // "gato"
console.log("at(10):", lista.at(10));         // undefined
console.log("contains('gato'):", lista.contains("gato")); // true
console.log("contains('vaca'):", lista.contains("vaca")); // false
console.log("findIndex('loro'):", lista.findIndex("loro")); // 3
console.log("findIndex('vaca'):", lista.findIndex("vaca")); // -1

console.log("\n--- pop ---");
console.log("pop:", lista.pop());             // "pez"
console.log(lista.toString());               // ( perro ) -> ( gato ) -> ( loro ) -> null
console.log("size:", lista.size());          // 3