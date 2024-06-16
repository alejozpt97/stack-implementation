class Stack<T> {
    private items: T[]; // Aquí se almacenan los elementos de la pila

    constructor() {
        this.items = [];
    }

    // Método para agregar un elemento a la pila
    push(element: T): void {
        this.items.push(element);
    }

    // Método para eliminar y devolver el elemento superior de la pila
    pop(): T | undefined {
        return this.items.pop();
    }

    // Método para devolver el elemento superior de la pila sin eliminarlo
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Método para comprobar si la pila está vacía
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Método para devolver el tamaño de la pila
    size(): number {
        return this.items.length;
    }

    // Método para vaciar la pila
    clear(): void {
        this.items = [];
    }

    // Método para imprimir la pila
    print(): void {
        console.log(this.items);
    }
}

// Ejemplo de uso
const numberStack = new Stack<number>(); // Pila para números

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log('Pila después de agregar elementos:');
numberStack.print();

console.log('Elemento superior:', numberStack.peek());

console.log('Eliminar elemento superior:', numberStack.pop());

console.log('Pila después de eliminar el elemento superior:');
numberStack.print();

console.log('Tamaño de la pila:', numberStack.size());

numberStack.clear();

console.log('Pila después de vaciarla:');
numberStack.print();
console.log('¿La pila está vacía?', numberStack.isEmpty());