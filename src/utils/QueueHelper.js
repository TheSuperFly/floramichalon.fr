class QueueHelper {
  constructor() {
    this.queue = [];
  }

  add(func) {
    this.queue.push(func);
  }

  process(index = false) {
    if (this.remaining() === 0) {
      return false;
    }

    if (index) {
      return (this.queue.splice(index, 1))();
    }

    return (this.queue.shift())();
  }

  remaining() {
    return this.queue.length;
  }
}

export default QueueHelper;