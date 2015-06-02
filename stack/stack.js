var Stack = function() {
  this.storage = {};
  this.size = 0;
}
Stack.prototype.push = function(value) {
  this.storage[this.size] = value;
  this.size += 1;
}
Stack.prototype.pop = function(){
  if(this.size) {
    var temp = this.storage[this.size - 1];
    delete this.storage[this.size--];
    return temp;
  }
}
Stack.prototype.length = function(){
  return this.size;
}
