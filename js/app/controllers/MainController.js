function MainController($scope) {
  $scope.contact = {
    name: "Brigan",
    email: "example@example.com",
    phone: "123-456-7890"
  }
}

angular 
  .module('app')
  .controller('MainController', MainController);