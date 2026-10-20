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
    if (this.nodo === null){
      this.nodo = new Node(value);
    }
  }
}

const lista = new LinkedList()

lista.append("aaa");

