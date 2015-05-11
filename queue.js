var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.entireSize = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.size] = value;
}
Queue.prototype.dequeue = function() {
  if(this.size - this.front) {
    var dequeued = this.storage[this.front];
    delete dequeued;
    this.front += 1;
    return dequeued;
  }
}
Queue.prototype.length = function() {
  return this.size - this.front;
}
