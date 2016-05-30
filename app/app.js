(function(){
  angular.module('SMNetwork', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('/dashboard', '/dashboard/regions');
        $urlRouterProvider.otherwise('/logIn');

        $stateProvider
          .state('dashboard', {
            url: '/dashboard',
            parent: 'base',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
          })

          .state('signUp', {
          url: "/signup",
          templateUrl: "app/signup/signup.html",
          controller: "SignUpController"
          })

          .state('logIn', {
          url: "/logIn",
          templateUrl: "app/login/login.html",
          controller: "NavigationController"
          })

          .state('regions', {
          url: "/regions",
          templateUrl: "app/regions/regions.html",
          controller: "RegionsController"
          })

      })
}());
