class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.nodo = null;
  }
  append(value) {
    if (this.nodo === null) {
      this.nodo = new Node(value);
    } else {
      let actual = this.nodo;
      while (actual.nextNode !== null) {
        actual = actual.nextNode;
      }
      actual.nextNode = new Node(value);
    }
  }
  prepend(value) {
    const nuevoNodo = new Node(value);
    nuevoNodo.nextNode = this.nodo;
    this.nodo = nuevoNodo;
  }
  size() {
    let nodos = 0;
    let actual = this.nodo;

    while (actual !== null) {
      nodos++;
      actual = actual.nextNode;
    }

    return nodos;
  }
  head() {
    let actual = this.nodo
    if (actual === null) return undefined;
    if (actual !== null) return actual.value;
  }
  tail() {
    let actual = this.nodo;
    if (actual === null) {
      return undefined;
    } else {
      while (actual !== null) {
        if (actual.nextNode === null) return actual.value;
        actual = actual.nextNode;
      }
    }
  }
}

const lista = new LinkedList()

lista.append("aaa");

