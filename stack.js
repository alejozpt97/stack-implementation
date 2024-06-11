var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Método para agregar un elemento a la pila
    Stack.prototype.push = function (element) {
        this.items.push(element);
    };
    // Método para eliminar y devolver el elemento superior de la pila
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    };
    // Método para devolver el elemento superior de la pila sin eliminarlo
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    };
    // Método para comprobar si la pila está vacía
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Método para devolver el tamaño de la pila
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // Método para vaciar la pila
    Stack.prototype.clear = function () {
        this.items = [];
    };
    // Método para imprimir la pila
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
// Ejemplo de uso
var stack = new Stack();
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
