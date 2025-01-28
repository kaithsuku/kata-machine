type Node<T> = {
    value: T;
    next? : Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length ++
        if(!this.tail){
            this.tail = this.head = node ; // if the list is empty, the head and tail are the same
            return;
        }

        this.tail.next = node; // add the node to the end of the list
        this.tail = node; // move the tail to the end of the list

}
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }

        this.length--;

        const head = this.head; // save the head
        this.head = this.head.next; // move the head

        head.next = undefined; // remove the reference to the next node

        return head.value; // return the value of the head

}
    peek(): T | undefined {
        return this.head?.value;

}
}