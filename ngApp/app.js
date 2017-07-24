var app = angular.module("myApp", [ "ui.router"]);

app.controller("Home", Home);
app.controller("Product", Product);
app.controller("Login", Login);

app.service("$productService", ProductService);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
  .state("home",{
      url:"/",
      templateUrl:"ngApp/Views/home.html",
      controller: Home,
      controllerAs: "vm"
  })
  .state("product",{
      url:"/product/:id",
      templateUrl:"ngApp/Views/Products.html",
      controller: Product,
      controllerAs: "vm"
  })
   .state("login",{
      url:"/login",
      templateUrl:"ngApp/Views/login.html",
      controller: Login,
      controllerAs: "vm"
   });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
});
