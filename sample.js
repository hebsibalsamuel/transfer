var app5 = angular.module('app5', []);

app5.controller('gListCtrl', function($scope) {

  $scope.groceries= [
    {item: "Tomatoes", purchased: true},
    {item: "Potatoes", purchased: true},
    {item: "Bread", purchased: true},
    {item: "Hummus", purchased: true}
  ];

  $scope.addItem = function(newItem) {


    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchased: true
      });
      $scope.missingNewItemError = "added";
    }
    else {


      $scope.missingNewItemError = "Please Enter an Item";
    }
  };
});
