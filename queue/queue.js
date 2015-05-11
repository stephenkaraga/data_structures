var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.size] = value;
  this.size += 1;
}
Queue.prototype.dequeue = function() {
  if(this.size - this.front) {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return dequeued;
  }
}
Queue.prototype.length = function() {
  return this.size - this.front;
}
