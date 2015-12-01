var TaylorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var taylor = $('<img src="src/Taylor123.png" height="100" width="100">')

  this.$node.append(taylor);
}

TaylorDancer.prototype = Object.create(Dancer.prototype);
TaylorDancer.prototype.constructor = TaylorDancer;
