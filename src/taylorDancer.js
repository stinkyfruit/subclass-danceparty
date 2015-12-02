var TaylorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class = "taylorImage" src="src/AOSk9x.gif" height="100" width="100">')

  Dancer.prototype.setPosition.call(this, top, left);
  var that = this;
  this.$node.hover(function(){
    setTimeout(function(){ that.$node.toggle()}, 1000)
  })
}

TaylorDancer.prototype = Object.create(Dancer.prototype);
TaylorDancer.prototype.constructor = TaylorDancer;

TaylorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
}

  // $(".taylorImage").on("mouseover", function(event){
  //   console.log(7);
  // })