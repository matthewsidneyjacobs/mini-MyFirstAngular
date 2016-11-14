
angular.module('friendsList').controller('mainCtrl', function($scope) {

  $scope.name = "sid";
  $scope.friends = ['ghandi', 'homer', 'mchumba'];

  $scope.addFriend = function() {
    //get what was in input box
    //add to array
    //clear out input box

    $scope.friends.push($scope.newFriend);
    $scope.newFriend='';
  };

});
