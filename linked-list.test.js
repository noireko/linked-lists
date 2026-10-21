const { LinkedList } = require("./linked-list");

// Arma una lista a partir de un array de valores, usando append
function crearLista(valores = []) {
  const lista = new LinkedList();
  for (const valor of valores) {
    lista.append(valor);
  }
  return lista;
}

describe("append", () => {
  test("en una lista vacía, el nodo pasa a ser el primero", () => {
    const lista = new LinkedList();
    lista.append("a");
    expect(lista.toString()).toBe("( a ) -> null");
  });

  test("agrega los nodos al final, en orden", () => {
    const lista = crearLista(["a", "b", "c"]);
    expect(lista.toString()).toBe("( a ) -> ( b ) -> ( c ) -> null");
  });
});

describe("prepend", () => {
  test("en una lista vacía, el nodo pasa a ser el único", () => {
    const lista = new LinkedList();
    lista.prepend("a");
    expect(lista.toString()).toBe("( a ) -> null");
  });

  test("agrega el nodo al principio sin perder los que ya estaban", () => {
    const lista = crearLista(["b", "c"]);
    lista.prepend("a");
    expect(lista.toString()).toBe("( a ) -> ( b ) -> ( c ) -> null");
  });

  test("varios prepend seguidos quedan en orden inverso", () => {
    const lista = new LinkedList();
    lista.prepend("c");
    lista.prepend("b");
    lista.prepend("a");
    expect(lista.toString()).toBe("( a ) -> ( b ) -> ( c ) -> null");
  });
});

describe("size", () => {
  test("devuelve 0 en una lista vacía", () => {
    expect(new LinkedList().size()).toBe(0);
  });

  test("devuelve 1 con un solo nodo", () => {
    expect(crearLista(["a"]).size()).toBe(1);
  });

  test("devuelve la cantidad de nodos", () => {
    expect(crearLista(["a", "b", "c"]).size()).toBe(3);
  });

  test("devuelve un número, no un texto", () => {
    expect(typeof crearLista(["a"]).size()).toBe("number");
  });
});

describe("head", () => {
  test("devuelve undefined si la lista está vacía", () => {
    expect(new LinkedList().head()).toBeUndefined();
  });

  test("devuelve el valor del primer nodo", () => {
    expect(crearLista(["a", "b", "c"]).head()).toBe("a");
  });
});

describe("tail", () => {
  test("devuelve undefined si la lista está vacía", () => {
    expect(new LinkedList().tail()).toBeUndefined();
  });

  test("con un solo nodo, el primero y el último son el mismo", () => {
    expect(crearLista(["a"]).tail()).toBe("a");
  });

  test("devuelve el valor del último nodo", () => {
    expect(crearLista(["a", "b", "c"]).tail()).toBe("c");
  });
});

describe("at", () => {
  const lista = crearLista(["a", "b", "c"]);

  test("devuelve el valor del primer nodo con índice 0", () => {
    expect(lista.at(0)).toBe("a");
  });

  test("devuelve el valor del último nodo", () => {
    expect(lista.at(2)).toBe("c");
  });

  test("devuelve undefined si el índice está fuera de rango", () => {
    expect(lista.at(3)).toBeUndefined();
    expect(lista.at(100)).toBeUndefined();
  });

  test("devuelve undefined con índices negativos", () => {
    expect(lista.at(-1)).toBeUndefined();
  });

  test("devuelve undefined en una lista vacía", () => {
    expect(new LinkedList().at(0)).toBeUndefined();
  });
});

describe("pop", () => {
  test("devuelve undefined en una lista vacía", () => {
    expect(new LinkedList().pop()).toBeUndefined();
  });

  test("quita el primer nodo y devuelve su valor", () => {
    const lista = crearLista(["a", "b", "c"]);
    expect(lista.pop()).toBe("a");
    expect(lista.toString()).toBe("( b ) -> ( c ) -> null");
    expect(lista.size()).toBe(2);
  });

  test("al quitar el único nodo, la lista queda vacía", () => {
    const lista = crearLista(["a"]);
    expect(lista.pop()).toBe("a");
    expect(lista.size()).toBe(0);
    expect(lista.head()).toBeUndefined();
  });
});

describe("contains", () => {
  const lista = crearLista(["a", "b", "c"]);

  test("devuelve true si el valor está en la lista", () => {
    expect(lista.contains("b")).toBe(true);
  });

  test("devuelve false si el valor no está", () => {
    expect(lista.contains("z")).toBe(false);
  });

  test("devuelve false en una lista vacía", () => {
    expect(new LinkedList().contains("a")).toBe(false);
  });
});

describe("findIndex", () => {
  test("devuelve la posición del valor", () => {
    const lista = crearLista(["a", "b", "c"]);
    expect(lista.findIndex("a")).toBe(0);
    expect(lista.findIndex("c")).toBe(2);
  });

  test("devuelve -1 si el valor no está", () => {
    expect(crearLista(["a", "b"]).findIndex("z")).toBe(-1);
  });

  test("devuelve -1 en una lista vacía", () => {
    expect(new LinkedList().findIndex("a")).toBe(-1);
  });

  test("si el valor se repite, devuelve la primera posición", () => {
    const lista = crearLista(["a", "b", "c", "b"]);
    expect(lista.findIndex("b")).toBe(1);
  });
});

describe("toString", () => {
  test("devuelve un texto vacío si la lista está vacía", () => {
    expect(new LinkedList().toString()).toBe("");
  });

  test("con un solo nodo", () => {
    expect(crearLista(["a"]).toString()).toBe("( a ) -> null");
  });

  test("con varios nodos usa el formato pedido", () => {
    expect(crearLista(["a", "b", "c"]).toString()).toBe(
      "( a ) -> ( b ) -> ( c ) -> null"
    );
  });
});