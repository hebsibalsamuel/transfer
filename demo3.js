var app7 = angular.module('app7', []);

app7.controller('mainCtrl', function() {

  // Define 2 fields that are bound to this controller
  // This is an example of a scopeless controller using this
  this.name = "Animal";
  this.sound = "Grrrrr";

  // Bound method
  this.animalClick = function(){
    alert(this.name + " says " + this.sound);
  };

});

// The $controller service allows us to instantiate a controller
// inside of another controller
app7.controller('dogCtrl', function($controller) {

  var childCtrl = this;

  // Create an instance of the parent controller
  childCtrl.child1 = $controller('mainCtrl', {});

  // Overwrite the parent name field
  childCtrl.child1.name = "Dog";

  // Define a field for the child
  childCtrl.child1.bark = "Wooof";

  // You can extend the child controller by declaring your own methods
  childCtrl.child1.dogData = function(){
     alert(this.name + " says " + this.sound + " and " + this.bark);
  }

});
