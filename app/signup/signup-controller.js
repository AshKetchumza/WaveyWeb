(function(){
    angular.module('SMNetwork')

    .controller('SignUpController', ['$scope', '$state', '$http',
      function($scope, $state, $http){

        $scope.createUser = function(){
          console.log('$scope.newUser');
          $http.post('api/user/signup', $scope.newUser).success(function(res){
              $state.go('logIn');
          }).error(function(error){
            console.log(error);
          })
        }

        $scope.goLogIn = function () {
        $state.go('logIn');
    };
    }]);

}());
