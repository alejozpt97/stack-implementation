class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Método para agregar un elemento a la pila
    push(element: T): void {
        this.items.push(element);
    }

    // Método para eliminar y devolver el elemento superior de la pila
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    // Método para devolver el elemento superior de la pila sin eliminarlo
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
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
const Stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Pila después de agregar elementos:');
stack.print();

console.log('Elemento superior:', stack.peek());

console.log('Eliminar elemento superior:', stack.pop());

console.log('Pila después de eliminar el elemento superior:');
stack.print();

console.log('Tamaño de la pila:', stack.size());

stack.clear();

console.log('Pila después de vaciarla:');
stack.print();
console.log('¿La pila está vacía?', stack.isEmpty());