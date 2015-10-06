angular.module('starter.controllers', [])

.controller('DashCtrl',  function($scope, $ionicPopup, $timeout) {
  $scope.data = {}

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Dont eat that!',
      template: 'It might taste good'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };
})

.controller('TwistCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
