$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $(".lineUpButton").on("click", function(){
    for(var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i]);
      window.dancers[i].lineUp();
    }

  })

  var collisions = function(collection){
    
    if(collection.length > 2) {
    for(var i = 0; i < collection.length; i++) {
      for(var j = 0; j <collection.length; j++) {
        if(i !== j) {
          var total = Math.pow((collection[i].top-collection[j].top), 2) + Math.pow((collection[i].left-collection[j].left), 2);
          var distance = Math.sqrt(total);
          //do something here when distance is 100 or something
        }
      }
    }
  }
}
  setInterval(function(){ collisions(window.dancers) }, 1000);
});
