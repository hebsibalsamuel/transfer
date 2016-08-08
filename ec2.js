var app1=angular.module("app1",[]);
app1.controller("ctrl1",function($scope)
{

});
app1.directive("jqlDirective",function()
{
return function(scope,element,attr)
{
  var players=element.children();
  for(i=0;i<players.length;i++)
  {
    if(players.eq(i).text()=="HEBSI")
    {
      players.eq(i).css("color","red");
    }
  }

};
});
