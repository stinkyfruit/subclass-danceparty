var southPark = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class = "taylorImage" src="src/Animated Gif South Park (11).gif" height="100" width="100">')

  Dancer.prototype.setPosition.call(this, top, left);
}

southPark.prototype = Object.create(Dancer.prototype);
southPark.prototype.constructor = southPark;