var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
    $scope.full_data = [{yr:"2001",under500:61777,above500:32871},
      {yr:"2002",under500:47493,above500:27842},
      {yr:"2003",under500:37023,above500:20654},
      {yr:"2004",under500:35872,above500:19291},
      {yr:"2005",under500:27920,above500:18849},
      {yr:"2006",under500:27182,above500:20724},
      {yr:"2007",under500:25238,above500:22118},
      {yr:"2008",under500:25396,above500:24141},
      {yr:"2009",under500:24216,above500:21502},
      {yr:"2010",under500:24632,above500:21851},
      {yr:"2011",under500:28993,above500:15668},
      {yr:"2012",under500:29526,above500:15978},
      {yr:"2013",under500:27898,above500:15615},
      {yr:"2014",under500:28841,above500:14954},
      {yr:"2015",under500:24629,above500:12651},
      {yr:"2016",under500:6047,above500:3563}];
      $scope.filter_contents=["ABOVE 500","BELOW 500"];
      $scope.sort_by=["Ascending","Descending"];
      $scope.sort=["year","Above500","Below500"];



});
