
var app1=angular.module('docsSimpleDirective', []);



  app1.directive('myCustomer', function() {
    return {
       transclude:true,
      template: "<b>{{customer.name}} {{customer.address}}</b>  <div ng-transclude> </div>"

    };
  });
  app1.controller('Controller', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  });
