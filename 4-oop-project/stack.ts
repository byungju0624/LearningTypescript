interface Stack {
  push(element: string): void;
  pop(): string;
  readonly size: number;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is Empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
const stack = new StackImpl(); 
stack.push("byung");
stack.push("byung1");
stack.push("byung2");
while (stack.size !== 0) {
  console.log(stack.pop());
}
