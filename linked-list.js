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
    let nodos = 1;
    let actual = this.nodo;
    if (actual === null) {
      return 0;
    } else {
      while (actual.nextNode !== null) {
        actual = actual.nextNode;
        nodos++;
      }
    }
    return nodos;
  }
}

const lista = new LinkedList()

lista.append("aaa");

