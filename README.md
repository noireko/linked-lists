# Linked Lists

Implementación de una **lista enlazada simple** en JavaScript, hecha como proyecto del curso [The Odin Project](https://www.theodinproject.com/) (sección de JavaScript). El proyecto se desarrolló con **TDD**, usando [Jest](https://jestjs.io/) para los tests.

## ¿Qué es una lista enlazada?

Es una estructura de datos donde cada elemento (nodo) guarda su valor y una referencia al nodo siguiente. A diferencia de un array, no hay índices: para llegar a un elemento hay que recorrer la cadena desde el principio.

```
( a ) -> ( b ) -> ( c ) -> null
```

El último nodo apunta a `null`, y eso marca el final de la lista.

## Estructura del proyecto

```
linked-lists/
├── linked-list.js        # Clases Node y LinkedList
├── linked-list.test.js   # Tests con Jest
├── main.js               # Ejemplo de uso en consola
├── package.json
└── README.md
```

## Instalación

Requiere [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/noireko/linked-lists.git
cd linked-lists
npm install
```

## Uso

```javascript
const { LinkedList } = require("./linked-list");

const lista = new LinkedList();

lista.append("perro");
lista.append("gato");
lista.prepend("pez");

console.log(lista.toString());
// ( pez ) -> ( perro ) -> ( gato ) -> null

console.log(lista.size());              // 3
console.log(lista.at(1));               // "perro"
console.log(lista.contains("gato"));    // true
console.log(lista.findIndex("gato"));   // 2
console.log(lista.pop());               // "pez"
```

Para ver un ejemplo completo en la consola:

```bash
node main.js
```

## Clases

### `Node`

Representa un elemento de la lista.

| Propiedad  | Descripción                                   | Valor por defecto |
| ---------- | --------------------------------------------- | ----------------- |
| `value`    | El dato que guarda el nodo                    | `null`            |
| `nextNode` | Referencia al nodo siguiente (o `null`)       | `null`            |

### `LinkedList`

Representa la lista completa. Internamente solo guarda una referencia al primer nodo (`nodo`), que vale `null` cuando la lista está vacía. Todos los demás nodos se alcanzan siguiendo los `nextNode`.

## Métodos

| Método              | Descripción                                                                                  | Complejidad |
| ------------------- | -------------------------------------------------------------------------------------------- | ----------- |
| `append(value)`     | Agrega un nodo con `value` al final de la lista.                                             | O(N)        |
| `prepend(value)`    | Agrega un nodo con `value` al principio de la lista.                                         | O(1)        |
| `size()`            | Devuelve la cantidad de nodos.                                                               | O(N)        |
| `head()`            | Devuelve el valor del primer nodo, o `undefined` si la lista está vacía.                     | O(1)        |
| `tail()`            | Devuelve el valor del último nodo, o `undefined` si la lista está vacía.                     | O(N)        |
| `at(index)`         | Devuelve el valor del nodo en esa posición, o `undefined` si no existe.                      | O(N)        |
| `pop()`             | Quita el primer nodo y devuelve su valor, o `undefined` si la lista está vacía.              | O(1)        |
| `contains(value)`   | Devuelve `true` si el valor está en la lista, `false` si no.                                 | O(N)        |
| `findIndex(value)`  | Devuelve la posición de la primera coincidencia, o `-1` si no se encuentra.                  | O(N)        |
| `toString()`        | Devuelve la lista como texto: `( a ) -> ( b ) -> null`. Si está vacía, devuelve `""`.        | O(N)        |

## Tests

Los tests están escritos con Jest y cubren cada método, incluyendo los casos borde: lista vacía, un solo nodo, valores repetidos e índices fuera de rango.

```bash
npm test
```

Para que se vuelvan a ejecutar cada vez que guardás un archivo:

```bash
npx jest --watch
```

## Qué aprendí

- Cómo se enlazan los nodos mediante referencias, y por qué el orden de las asignaciones importa para no perder la cadena.
- La diferencia entre moverse por la lista (`actual = actual.nextNode`) y modificarla (`actual.nextNode = nuevo`).
- Recorrer estructuras con `while` y manejar los casos borde (lista vacía, un solo elemento).
- Analizar la complejidad con Big O: por qué `prepend` es O(1) y `append` es O(N).
- Desarrollar con TDD usando Jest.

## Créditos

Proyecto basado en la consigna de [The Odin Project](https://www.theodinproject.com/).
