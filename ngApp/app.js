var app = angular.module("myApp", [ "ui.router"]);

app.controller("home", home);
app.controller("shirts", shirts);
app.controller("pants", pants);



app.config(function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
  .state("home",{
      url:"/",
      templateUrl:"ngApp/Views/home.html",
      controller: home,
      controllerAs: "vm"
  })
  .state("shirts",{
      url:"/shirts",
      templateUrl:"ngApp/Views/shirts.html",
      controller: shirts,
      controllerAs: "vm"
  })
  .state("pants",{
      url:"/pants",
      templateUrl:"ngApp/Views/pants.html",
      controller: pants,
      controllerAs: "vm"
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
});
