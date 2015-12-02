var squareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);  

} 

squareDancer.prototype = Object.create(Dancer.prototype);
squareDancer.prototype.constructor = squareDancer;


squareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //make it do this every step slide down
  this.$node.animate({height: '300px', opacity: '0.4'}, "slow");
  this.$node.animate({width: '300px', opacity: '0.8'}, "slow");
  this.$node.animate({height: '100px', opacity: '0.4'}, "slow");
  this.$node.animate({width: '100px', opacity: '0.8'}, "slow");
}

