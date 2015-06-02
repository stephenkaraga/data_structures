var Tree = function(value){
	this.value = value;
	this.children = [];
}

Tree.prototype.addChild = function(value){
	var newTree = new Tree(value);
	this.children.push(newTree);
}

Tree.prototype.contains = function(value) {
	if (this.value === value) {
		return true;
	} else if(this.children.length){
		var children = this.children;
		var len = children.length;
		while(len--){
			return children[i].contains(value);
		}
	}
	return false;
}