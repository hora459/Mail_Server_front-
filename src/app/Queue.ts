export class Queue {
    private queue: Array<string>;
  
    constructor() {
      this.queue = [];
    }
  
    public enqueue(item: any) {
      this.queue.push(item);
    }
  
    public dequeue(): any {
      return this.queue.shift();
    }
  
    public size(): any {
      return this.queue.length;
    }
  }