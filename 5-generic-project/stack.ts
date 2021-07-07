{
  interface Stack<T> {
    push(element: T): void;
    pop(): T;
    readonly size: number;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }
    push(value: T) {
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is Empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>();
  stack.push("byung");
  stack.push("byung1");
  stack.push("byung2");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  const stack2 = new StackImpl<number>();
  stack2.push(11);
  stack2.push(22);
  stack2.push(33);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
