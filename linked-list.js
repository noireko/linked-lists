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
    if (actual === null) return undefined;
    while (actual.nextNode !== null) {
      actual = actual.nextNode;
    }
    return actual.value;
  }
  at(index) {
    let iteracion = 0;
    let actual = this.nodo;
    while (actual !== null) {
      if (iteracion === index) {
        return actual.value;
      } else {
        iteracion++;
        actual = actual.nextNode;
      }
    }
    return undefined;
  }
  pop() {
    let actual = this.nodo;
    if (actual !== null) {
      let valorEl = actual.value;
      this.nodo = actual.nextNode;
      return valorEl;
    }
    return undefined;
  }
}

const lista = new LinkedList()

lista.append("aaa");

